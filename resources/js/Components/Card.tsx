import {PropsWithChildren} from "react";

export default function Card({children}: PropsWithChildren) {
    return (
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6 text-gray-900 dark:text-gray-100">
            {children}
        </div>
    )
}
