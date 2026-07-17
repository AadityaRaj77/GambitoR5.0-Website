"use client";
import Image from "next/image";
import { useState } from "react";
import "./Res.css";
import Logo from "./assets/Navbar/logo.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "../https/api";
import { useRouter } from "next/navigation";
import { deleteUserFailure, deleteUserStart, deleteUserSuccess } from "@/redux/user/userSlice";
import Animations from "./assets/AnimatedButton";

interface UserState {
  currentUser: any;
  loading: boolean;
  error: boolean | string;
}
interface RootState {
  user: UserState;
}

interface abc {
  text: string;
  ico: string;
  path: string;
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => Promise<void> | void;
}

function Buttons({ text, ico, path, onClick }: abc) {
  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (onClick) {
      onClick(e); // Call the onClick function if provided
    }
  };
  return (
    <li
      key={text}
      className="w-[231px] h-[56px] py-[16px] pl-[28px] rounded-[12px] hover:bg-white text-white hover:text-[#222934]"
      onClick={handleClick}
    >
      {/* <i className={`${ico}`}></i> */}
      <Link href={path} className="py-4 pl-3 cursor-pointer">
        {text}
      </Link>
    </li>
  );
}

export default function Navbar() {
  let backgroundImageStyle = {
    backgroundImage: `url("popbg.svg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div>
      <div className="bg-transparent backdrop-blur-md h-[10vh] w-[100%] flex justify-between z-20 items-center fixed top-0 p-2">
        <div>
          <a href="/">
            <Image src={Logo} alt="Logo" className="h-12" />
          </a>
        </div>
      </div>
    </div>
  );
}
