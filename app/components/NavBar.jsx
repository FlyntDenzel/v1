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
    <nav className="border w-1/5 rounded-md flex flex-col float-left h-screen p-2 gap-2 dark:text-[#f3f0f0] ">
      <section className="flex-col rounded-md h-1/4 items-center flex justify-center">
        <BsPerson
          size={120}
          className="cursor-pointer border p-2 rounded-full border-[#152731ec]"
        />
        <h1 className="text-center">@FlyntDenzel</h1>
      </section>
      <section className="rounded-md h-1/2 flex flex-col items-center justify-evenly p-3 ">
        <Link href={`/`} className="links">
          <BsNewspaper />
          News Feed
        </Link>
        <Link href={`Messages`} className="links">
          {/* <FaFacebookMessenger /> */}
          <BsChatFill />
          Messages
        </Link>
        <Link href={`Friends`} className="links">
          <FaUserGroup />
          Friends
        </Link>
        <Link href={`Profile`} className="links">
          <FaUser />
          Profile
        </Link>
        <Link href={`Settings`} className="links ">
          <FaGear />
          Settings
        </Link>
      </section>
      <section className="p-3 rounded-md flex flex-col mt-2">
        <Link href={``} className="links ">
          <HiLogin />
          LogOut
        </Link>
        <div className="flex flex-1 justify-center mt-2">
          <Toggle />
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
