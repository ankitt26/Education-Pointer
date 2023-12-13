import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export default (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const user_type = props.type;
  const lower_case_user_type = user_type.toLowerCase();
  let other_user_type = "teacher";

  if (user_type === "Teacher") {
    other_user_type = "student";
  }

  const submitdata = (e) => {
    e.preventDefault();
    const userdata = {
      email: email,
      password: password,
    };

    if (user_type === "Student") {
      console.log({ student: true, ...userdata });
    } else {
      console.log({ teacher: true, ...userdata });
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-2 text-2xl text-gray-900 dark:text-white"
        >
          <img className="w-20 h-20 mr-0" src={Logo} alt="logo" />
          <span className="text-xl ml-0 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Ed. Pointer
          </span>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Hello {user_type}!
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitdata}>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@email.com"
                  autoComplete="email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  required
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className=" mt-12 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
              <div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Not a member?{" "}
                  <Link
                    to={`/signup/${lower_case_user_type}`}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    SignUp
                  </Link>
                </p>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Are you a {other_user_type}?{" "}
                  <Link
                    to={`/login/${other_user_type}`}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
