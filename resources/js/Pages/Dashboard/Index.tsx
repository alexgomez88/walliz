import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import {PageProps} from '@/types';
import Card from "@/Components/Card";
import SendWalliz from "@/Pages/Dashboard/Partials/SendWalliz";
import MessageCard from "@/Pages/Dashboard/Partials/MessageCard";

export default function Index({auth, last_messages}: PageProps<{ last_messages: any[] }>) {
    console.log(last_messages)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-6">
                    <Card>
                        <SendWalliz/>
                    </Card>
                </div>

                {last_messages.map(message => (
                    <MessageCard key={message.id} message={message}/>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
