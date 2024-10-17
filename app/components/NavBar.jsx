import Image from "next/image";
import Toggle from "./Toggle";
import Link from "next/link";
import {
  FaMessage,
  FaGear,
  FaUser,
  FaUserGroup,
  FaFacebookMessenger,
} from "react-icons/fa6";
import { HiChat, HiLogin } from "react-icons/hi";
import { BsChatFill, BsNewspaper, BsPerson, BsDoorOpen } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="w-1/5 border border-blue-300 rounded-md flex flex-col float-left h-screen p-2 gap-2">
      <section className="flex-col rounded-md h-1/4 items-center flex justify-center">
        <BsPerson
          size={120}
          className="border p-2 rounded-full border-blue-50"
        />
        <h1 className="text-center">@FlyntDenzel</h1>
      </section>
      <section className="border border-green-500 rounded-md h-1/2 flex flex-col items-center justify-evenly p-3">
        <Link href={``} className="links">
          <BsNewspaper />
          News Feed
        </Link>
        <Link href={``} className="links">
          {/* <FaFacebookMessenger /> */}
          <BsChatFill />
          Messages
        </Link>
        <Link href={``} className="links">
          <FaUserGroup />
          Friends
        </Link>
        <Link href={`signup`} className="links">
          <FaUser />
          Profile
        </Link>
        <Link href={``} className="links ">
          <FaGear />
          Settings
        </Link>
      </section>
      <section className="border p-3 rounded-md flex flex-col mt-2">
        <Link href={``} className="links ">
          <HiLogin />
          LogOut
        </Link>
        <Link href={``} className="links ">
          <FaGear />
          Toggle
        </Link>
      </section>
    </nav>
  );
};

export default NavBar;
