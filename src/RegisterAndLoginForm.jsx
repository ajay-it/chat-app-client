import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  const [isRegisterOrLogin, setIsRegisterOrLogin] = useState("register");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const url = isRegisterOrLogin === "register" ? "register" : "login";
    const { data } = await axios.post(url, { username, password });
    setLoggedInUsername(username);
    setId(data.id);
  };
  return (
    <>
      <div className="bg-blue-50 h-screen flex flex-col justify-center items-center">
        <form className="w-64 mx-auto" onSubmit={handleSubmit}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
            className="block w-full rounded p-2 mb-2 border"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="block w-full rounded p-2 mb-2 border"
          />
          <button
            className="bg-blue-500 text-white block w-full rounded p-2"
            type="submit"
          >
            {isRegisterOrLogin === "register" ? "Register" : "Login"}
          </button>
        </form>
        <div className="text-center, mt-2">
          {isRegisterOrLogin === "register" && (
            <div>
              Already a member?{" "}
              <button onClick={() => setIsRegisterOrLogin("login")}>
                Login here
              </button>
            </div>
          )}
          {isRegisterOrLogin === "login" && (
            <div>
              Don't have an account?{" "}
              <button onClick={() => setIsRegisterOrLogin("register")}>
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
