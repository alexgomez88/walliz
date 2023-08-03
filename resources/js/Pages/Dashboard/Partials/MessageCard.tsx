import {FormEventHandler, PropsWithChildren, useRef} from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import {useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import {Transition} from "@headlessui/react";
import InputError from "@/Components/InputError";
import Card from "@/Components/Card";
import SendWalliz from "@/Pages/Dashboard/Partials/SendWalliz";

export default function MessageCard({message}: PropsWithChildren<{message: any}>) {
    return <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-6">
        <Card>
            {message.content.message}
        </Card>
    </div>
}
