import Link from "next/link";
import React from "react";
import NavbarClient from "./NavbarClient";
import { auth } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 bg-white py-3 flex justify-between items-center">
      <Link href="/">
        <p className="text-xl font-mono">StartHub</p>
      </Link>
      <NavbarClient session={session} />
    </header>
  );
};

export default Navbar;
