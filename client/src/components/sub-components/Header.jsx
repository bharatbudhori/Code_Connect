import React from "react";
import StartIcon from '@mui/icons-material/Start';

export default function Header({ isOpen, setIsOpen }) {
    return (
        <header className="flex justify-between p-4">
            {!isOpen && (
            <button
                style={{ position: "absolute", right: "0px", top: "400px", zIndex: "100", borderRadius: "50px 0px 0px 50px" }}
                className="bg-green-600 text-white px-4 py-1 opacity-70 hover:opacity-100"
                onClick={() => setIsOpen(true)}
            >
                <div style={{ transform: "rotate(180deg)" }}><StartIcon /></div>
            </button>
            )}
        </header>
    );
}
