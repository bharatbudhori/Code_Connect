/* eslint-disable jsx-a11y/anchor-is-valid */
import { json, useActionData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isLoggedin, saveAuthToken } from "../utlis/loginUtils";
import { serverUrl } from "../constants";
import GlobalContext from "../context/GlobalContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

let mode = "login";

const LoginForm = ({ isOpen }) => {
  const [signup, setSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const data = useActionData();
  const { loggedIn, setLoggedIn } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(isOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    signup ? (mode = "signup") : (mode = "login");
  }, [signup]);

  async function formAction({ request }) {
    try {
      // console.log("form submitted tmkc");

      // console.log(request);

      const email = await request.email;
      const password = await request.password;

      const authData = {
        email: email,
        password: password,
      };

      setLoading(true);

      const response = await fetch(serverUrl + mode, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
      });

      setLoading(false);

      if (!response.ok) {
        throw json({ msg: "Can not authenticate the user" }, { status: 500 });
      }

      // access token
      const respData = await response.json();

      const token = respData.token;

      if (token != null) {
        setLoggedIn(true);
        // console.log("logged in");
        saveAuthToken(token);

        //replace instead of push
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);

      alert("Invalid credentials", error);
    } finally {
      setIsOpen(false);
      setLoading(false);
    }
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      width: "20%",
      height: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#111827",
      border: "white solid 1px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflowY: "hidden",
      overflowX: "hidden",
    },
  };
  //changing the default styles of the modal
  // Modal.defaultStyles.overlay.background = "rgba(0, 0, 0, 0.2)";
  return (
    <>
      {/* <Modal isOpen={true} style={customStyles}> */}
      <ul>
        {data &&
          data.error &&
          Object.values(data.error).map((err) => (
            <li key={err} style={{ color: "red" }}>
              {err}
            </li>
          ))}
      </ul>

      <section className=" bg-gray-50 dark:bg-gray-900 z-10">
        {/* <div className="absolute  transform -translate-x-1/2 left-1/2 z-20   "> */}

        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2 rounded-full"
              src="/mainLogo2.png"
              alt="logo"
            />
            CodeDual
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {!signup ? "Sign in to your account" : "Create an account"}
              </h1>
              <form
                onSubmit={handleSubmit((data) => {
                  formAction({ request: data });
                })}
                method="post"
                action="/login"
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                    })}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="true"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Forgot password?
                  </a>
                </div>
                {!loading ? (
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {!signup ? "Sign in" : "Sign up"}
                  </button>
                ) : (
                  //spinner
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-10 h-10 border-blue-200 border-2 rounded-full"></div>
                      <div className="w-10 h-10 border-blue-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                    </div>
                  </div>
                )}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {signup
                    ? "Already have an account?  "
                    : "Don't have an account?  "}
                  <button
                    onClick={() =>
                      signup ? setSignup(false) : setSignup(true)
                    }
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    {signup ? "Sign in" : "Sign up"}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* </Modal>  */}
    </>
  );
};

export default LoginForm;

export async function formAction({ request }) {
  // console.log("form submitted");

  const data = await request.formData();

  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch(serverUrl + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 400 || response.status === 401 || response.status === 409) {
    return response;
  }

  if (!response.ok) {
    throw json({ msg: 'Can not authenticate the user' }, { status: 500 });
  }

  // access token
  const respData = await response.json();

  const token = respData.token;

  if(token != null){
    // setLoggedIn(true);
    // console.log("logged in");
    saveAuthToken(token);
  }

  // return redirect('/');
}
