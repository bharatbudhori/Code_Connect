import { useEffect, useState } from "react";
const { io } = require("socket.io-client");

function Room() {
    const [socket, setSocket] = useState(null);
    const [userText, setUserText] = useState("");
    const [friendText, setFriendText] = useState("");

    var user1 = 1;
    var user2 = 2;

    useEffect(() => {
        const socket = io("http://localhost:3001");
        setSocket(socket);
        // socket.on("connect", () => {
        //     console.log("Connected!");
        // });
        socket.on("message", (message) => {
            console.log(message);
            // setUserText(message["text"]);

            if (message["id"] != user1) {
                setFriendText(message["text"]);
            } else {
                setUserText(message["text"]);
            }
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => { 
        if (socket) {
            // socket.emit("message", text);
            //emit message and id

            socket.emit("message", {
                id: 2,
                text: userText,
            });
        }
    }, [userText]);

    return (
        <div className="bg-gray-900 h-[600edpx]">
            <h1 className="text-4xl">Code_Dual</h1>
            

            <div class="flex w-100 flex-row items-end gap-6 m-10">
                <div class="relative w-full min-w-[200px]">
                    <textarea
                        class="peer h-full min-h-[300px] w-full resize-none rounded-[7px] border border-green-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-green-500 placeholder-shown:border-t-green-500 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "

                        type="text"
                        value={userText}
                        onChange={(e) => setUserText(e.target.value)}
                    ></textarea>
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-green-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Your Code (Editable)
                    </label>
                </div>
                <div class="relative w-full min-w-[200px]">
                    <textarea
                        class="peer h-full min-h-[300px] w-full resize-none rounded-[7px] border border-red-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-red-500 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                        // disabled
                        //type text area
                        type="text"
                        value={friendText}
                        onChange={(e) => setFriendText(e.target.value)}
                    ></textarea>
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-red-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Friend's Code (Not Editable)
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Room;
