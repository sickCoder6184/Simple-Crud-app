"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function darkMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
}
function lightMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "light-mode";
}
const NavBar = () => {
  const { data: session,status } = useSession();
  console.log(session);
  const isLoggedIn = session?.user;

  return (
    <nav>
      <div className="flex justify-between items-center p-4 bg-blue-500">
        <Link className="text-3xl font-mono" href="/">
          sickCoder
        </Link>
        <button
          className=" text-white rounded-ss-3xl bg-black p-4"
          onClick={darkMode}
        >
          Lights Off
        </button>

        {!isLoggedIn ? (
          <Link
          href={"/"}
          className="rounded-full bg-red-600 p-4 font-semibold
          text-white"
            onClick={(e) => {
              e.preventDefault();
              signIn("google");
            }}
          >
            Sign In
          </Link>
        ):(
          <Link
        className="rounded-full bg-red-600 p-4 font-semibold
        text-white"
          href="/api/auth/signout"
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign Out
        </Link>
        )}

        

        



        <button
          className=" text-white rounded-se-3xl bg-yellow-400 p-4"
          onClick={lightMode}
        >
          Lights on
        </button>
        <Link
          className=" bg-green-600 text-white rounded-lg p-3 text-2xs border font-extrabold"
          href="/addTopic"
        >
          Add Topic
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
