import React from "react";
import { useNavigate } from "react-router-dom";
import { RiContactsLine } from "react-icons/ri";
import { BsMap } from "react-icons/bs";

function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col text-xl h-full w-100 justify-start gap-4 ">
      <p
        className="h-10 flex items-center justify-start gap-2 cursor-pointer hover:text-[#3b4bd5]"
        onClick={() => {
          navigate("/contact");
        }}
      >
        <RiContactsLine />
        Contacts
      </p>
      <p
        className="h-10 flex items-center justify-start gap-2 cursor-pointer hover:text-[#3b4bd5]"
        onClick={() => {
          navigate("/map");
        }}
      >
        <BsMap /> Maps
      </p>
    </div>
  );
}

export default SideBar;
