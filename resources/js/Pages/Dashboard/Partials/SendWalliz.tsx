import {FormEventHandler, PropsWithChildren, useRef} from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import {useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import {Transition} from "@headlessui/react";
import InputError from "@/Components/InputError";

export default function SendWalliz({parentId}: PropsWithChildren<{parentId: number}>) {
    const messageInput = useRef<HTMLInputElement>();

    const {
        data,
        setData,
        errors,
        post,
        reset,
        processing,
        recentlySuccessful
    } = useForm({
        message: '',
        message_id: parentId,
    });

    const sendMessage: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('messages.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset();
                    messageInput.current?.focus();
                }
            },
        });
    };

    return <form onSubmit={sendMessage}>
        <div>
            <InputLabel htmlFor="send_message" value={parentId ? "Reply" : "Show to the wall!"}/>
            <InputError message={errors.message} className="mt-2" />
        </div>
        <div className="flex flex-row ">
            <TextInput
                id="send_message"
                ref={messageInput}
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
                className="block w-full rounded-r-none"
            />
            <PrimaryButton className="rounded-l-none" disabled={processing}>
                Send
            </PrimaryButton>
        </div>
        <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
        >
            <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
        </Transition>
    </form>
}
