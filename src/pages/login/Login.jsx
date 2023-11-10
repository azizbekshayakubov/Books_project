import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function Login({ data }) {
  // eslint-disable-next-line react/prop-types
  const { token, setToken } = data;
  const userName = useRef("");
  const userParol = useRef("");
  function handelSubmit(e) {
    e.preventDefault();
    let obj = {
      userName: userName.current.value,
      password: userParol.current.value,
    };
    console.log(obj);
    fetch("http://localhost:1212/admin/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setToken(data);
          localStorage.setItem("token", JSON.stringify(data));
        }
      });
  }

  return (
    <>
      <div>
        <div className="flex h-screen items-center justify-center bg-gray-100">
          <div className="w-full max-w-md rounded bg-white p-8 shadow-md">
            <h2 className="mb-4 text-center text-2xl font-semibold">Sign Up</h2>
            <div className="mb-5 w-full rounded  border p-3">
              <img src="" alt="" />
              <h3>Continue with Google</h3>
            </div>
            <div className="mb-5 w-full rounded  border p-3">
              <div className="logo imags d-flex">
                <img src="" alt="" />
                <h3>Continue with Google</h3>
              </div>
            </div>

            <hr />

            <form onSubmit={handelSubmit} action="#" method="POST">
              <div className="my-4">
                <label htmlFor="username" className="block text-gray-600">
                  Username
                </label>
                <input
                  ref={userName}
                  type="text"
                  id="username"
                  name="username"
                  className="w-full rounded border px-4 py-2 focus:border-blue-400 focus:outline-none"
                  placeholder="Your username"
                  required
                />
              </div>
              {/* <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border px-4 py-2 focus:border-blue-400 focus:outline-none"
                  placeholder="Your email"
                  required
                />
              </div> */}

              {/* <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600">
                  Username
                </label>
                <input
                  ref={userName}
                  type="text"
                  id="username"
                  name="username"
                  className="w-full rounded border px-4 py-2 focus:border-blue-400 focus:outline-none"
                  placeholder="Your username"
                  required
                />
              </div> */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">
                  Password
                </label>
                <input
                  ref={userParol}
                  type="password"
                  id="password"
                  name="password"
                  className="w-full rounded border px-4 py-2 focus:border-blue-400 focus:outline-none"
                  placeholder="Your password"
                  required
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700"
                >
                  Button
                </button>
              </div>
            </form>
            <p className="text-center text-sm text-gray-600">
              Already have an account? <a href="#">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
