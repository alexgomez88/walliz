import {FormEventHandler, PropsWithChildren, useRef} from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import {useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import {Transition} from "@headlessui/react";
import InputError from "@/Components/InputError";
import Card from "@/Components/Card";
import SendWalliz from "@/Pages/Dashboard/Partials/SendWalliz";

export default function MessageCard({message}: PropsWithChildren<{ message: any }>) {
    console.log(message.messages)
    return <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-6">
        <Card>
            <div className="">
                <div className="">

                </div>
                <div className="">
                    <header
                        className="flex flex-row items-center justify-between mb-4 text-sm text-gray-600 font-medium border-b-2 border-gray-200 pb-2 last:border-b-0 last:pb-0 last:mb-0">
                        <div>{message.author.name ?? ''}</div>
                        <div>{message.created_at}</div>
                    </header>
                    <article>
                        {message.content.message}
                    </article>
                    <footer className="flex flex-col mt-4 text-sm text-gray-600 font-medium border-t-2 border-gray-200 pt-2">
                        <div className="mt-2">
                            {message.threads.map((message: any) => {
                                return <MessageCard key={message.id} message={message}/>
                            })}
                        </div>
                        <div className="mt-2">
                            <SendWalliz parentId={message.id}/>
                        </div>
                    </footer>
                </div>
            </div>
        </Card>
    </div>
}
