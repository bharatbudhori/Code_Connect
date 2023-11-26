/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, redirect,json, useActionData} from "react-router-dom";
import { useEffect, useState } from "react";
import { saveAuthToken } from "../utlis/loginUtils";
import { serverUrl } from "../constants";

let mode = 'login';
function LoginForm() {
  const [signup, setSignup] = useState(false);
  const data = useActionData();

  useEffect(() => {
 signup ? mode = 'signup' : mode = 'login';
  }, [signup]);
  return (
    <>
         <ul>
          {data &&
            data.error &&
            Object.values(data.error).map((err) => (
              <li key={err} style={{ color: 'red' }}>
                {err}
              </li>
            ))}
        </ul>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            CodeDual
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {!signup ? "Sign in to your account" : "Create an account"}
              </h1>
              <Form
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
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
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
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
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {!signup ? "Sign in" : "Sign up"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {signup ? "Already have an account?  " : "Don't have an account?  "}
                  <a
                    onClick={() => signup? setSignup(false) : setSignup(true)}
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    {signup ? "Sign in" : "Sign up"}
                  </a>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
export async function formAction({ request }) {
  console.log("form submitted");

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

  saveAuthToken(token);

  return redirect('/');
}
