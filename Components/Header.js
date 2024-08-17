import React from "react";
import { MdMenu } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className=" bg-stone-500 text-white">
        <div className="px-14 h-14 flex items-center justify-between">
        <MdMenu size={25}/>
          <div className="flex-grow flex justify-center">
            <h1>LOGO</h1>
          </div>
          <div className="flex justify-end gap-5">
          <IoMdSearch size={25}/>
          <FiUser size={25} />
          <RiShoppingBagLine size={25}/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;