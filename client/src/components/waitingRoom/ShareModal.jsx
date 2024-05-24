import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShareModal() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentUrl, setCurrentUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(14); // Reduced to 5 seconds for demonstration

  useEffect(() => {
    setCurrentUrl(window.location.href); // Get the current URL

    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdown);
          setIsVisible(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setIsCopied(true);
      toast.success("Link copied to clipboard!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    });
  };

  const circleRadius = 13;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const animationDuration = 15000; // Same as timeLeft in milliseconds

  return (
    <>
      <ToastContainer />
      {/* CONTAINER MODAL */}
      <div
        className={`fixed bottom-5 left-5 transition-all duration-${animationDuration} ease-in-out transform z-20 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        style={{ display: isVisible ? "block" : "none" }}
      >
        {/* MODAL ITEM */}
        <div className="bg-gray-800 w-full p-4 rounded-lg shadow-xl md:w-96 border border-gray-700 animate-fade-in-up">
          {/* MODAL HEADER */}
          <div className="flex justify-between items-center border-b border-gray-700 py-2">
            <div className="flex items-center justify-center">
              <p className="text-xl font-semibold text-white">Copy Room Link</p>
            </div>
            <div className="relative flex items-center justify-center ">
              <div
                className="bg-gray-600 hover:bg-gray-500 cursor-pointer hover:text-gray-200 text-gray-300 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300"
                onClick={() => setIsVisible(false)}
              >
                x{/* Countdown Timer */}
                <svg className="absolute   w-10 h-10" viewBox="0 0 36 36">
                  <circle
                    className="text-gray-600"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r={circleRadius}
                    cx="18"
                    cy="18"
                  />
                  <circle
                    className="text-blue-500"
                    strokeWidth="4"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={
                      circleCircumference - (timeLeft / 5) * circleCircumference
                    }
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={circleRadius}
                    cx="18"
                    cy="18"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      dur={`${animationDuration}ms`}
                      from={circleCircumference}
                      to="0"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
              {/* <div className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center">
                <span className="text-white text-xs">{timeLeft}s</span>
              </div> */}
            </div>
          </div>
          {/* MODAL BODY */}
          <div className="mt-4">
            <p className="text-gray-300">
              Share this link to invite others to join and be part of the
              conversation. Let’s get more people involved!
            </p>
            {/* BOX LINK */}
            <div className="border-2 border-gray-700 flex justify-between items-center mt-4 py-2 px-3 rounded bg-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="fill-gray-400 mr-2"
              >
                <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z" />
                <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z" />
              </svg>

              <input
                className="w-full outline-none bg-transparent text-gray-400"
                type="text"
                placeholder="link"
                value={currentUrl}
                readOnly
              />
              <button
                className={`bg-blue-600 text-white rounded text-sm py-1 px-4 hover:bg-blue-700 transition-transform duration-300 transform ${
                  isCopied ? "scale-105" : ""
                }`}
                onClick={handleCopy}
              >
                {isCopied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default ShareModal;
