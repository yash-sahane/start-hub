"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavbarClient = ({ session }: { session: any }) => {
  return (
    <div className="flex gap-4 items-center font-semibold font-mono">
      {session ? (
        <>
          <Link href={"/startup/create"}>Create</Link>
          <div className="flex gap-2">
            <button
              className="text-[#EF4444] cursor-pointer"
              onClick={() => signOut({ redirectTo: "/" })}
            >
              Logout
            </button>
            <img
              src={session.user.image}
              alt="profileImage"
              width={25}
              height={25}
              className="rounded-full"
            />
          </div>
        </>
      ) : (
        <button onClick={() => signIn("github")} className="cursor-pointer">
          Login
        </button>
      )}
    </div>
  );
};

export default NavbarClient;
