import React from "react";
import { Link } from "react-router-dom";
import H1 from "./H1";
import H2 from "./H2";

function Header(props) {
  return (
    <div className="flex justify-between px-5 py-4 text-white md:px-32 shadow-3xl bg-sky-900 ">
      <Link to="/taskPage">
        <div className="flex space-x-3 text-2xl font-bold">
          <div>
            <img
              className="w-8 h-8"
              src="https://codeyogi.io/images/favicon-96.png"
            />
          </div>

          <div className="">Codeyogi TaskApp</div>
        </div>
      </Link>
      <div className="hidden md:block">
        <div className="flex space-x-4 ">
          <Link to="/completedTask">
            <div href="#" className="">
              Completed Task
            </div>
          </Link>

          <Link to="">
            <div>Tasks Left</div>
          </Link>
          <Link to="">
            <div className="text-xl font-medium leading-6 text-yellow-600 hover:text-yellow-400 hover:p-2">
              Urgent Task
            </div>
          </Link>
          <Link to="">
            <div>Need help</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
