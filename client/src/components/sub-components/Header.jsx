import React from "react";

export default function Header({ setIsOpen }) {
    return (
        <header className="flex justify-between p-4">
            <h1 className="font-medium">Open drawer to see your friends code</h1>
            <button
                className="bg-green-600 text-white rounded px-4 py-1"
                onClick={() => setIsOpen(true)}
            >
                open
            </button>
        </header>
    );
}
