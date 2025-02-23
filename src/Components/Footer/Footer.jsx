import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <nav className=" border-gray-200  bg-white fixed bottom-0 left-0 right-0 text-center shadow z-50  text-white">
      <div className="row justify-around">
        <div>
          <h1 className=" text-black text-2xl">
            Developer : <span className=" text-emerald-300 text-2xl">Mazen Mohamed</span>
          </h1>
        </div>

        <div>
          <h1 className=" text-emerald-500 text-2xl">
            My accounts :{" "}
            <Link to={"https://www.linkedin.com/in/mazen-mohamed-0a973b340/"}>
              LinkedIn |
            </Link>{" "}
             <Link to={"https://github.com/Eng-Mazen22"}>GitHub</Link>{" "}
          </h1>
        </div>
      </div>
    </nav>
  );
}
