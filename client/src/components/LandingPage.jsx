import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    var url =
        "https://media.istockphoto.com/id/629286010/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=1024x1024&w=is&k=20&c=u6LfvezDsWUPFwDCHkkWmpzi1W7EFF-8aCnpYMUkwlk=";
    return (
        <div className="w-screen h-[calc(100vh-8rem)] overflow-hidden">
            <div className="bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/codedual-37722.appspot.com/o/7xm.xyz800281.jpg?alt=media&token=4910535d-6f43-4e1c-93b5-f6e3a9a028a9')] bg-center bg-no-repeat h-full w-full">
                <div className="container mx-auto flex flex-col my-auto align-middle h-full">
                    <div className="my-auto  mx-auto lg:mx-0 w-10/12 lg:w-2/5">
                        <h1 className="text-7xl mb-4">
                            <span className="text-blue-500">
                                Uniting Coding
                            </span>{" "}
                            Amplyfying Brilliance!
                        </h1>
                        <p className="text-2xl mb-8">
                            Code Connect: Collaborative coding excellence, uniting
                            minds for superior solutions.
                        </p>
                        <div className="flex items-center">
                            <Link
                                to={"/problems"}
                                className="rounded px-10 py-3 text-white bg-blue-500 hover:bg-blue-600"
                            >
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
