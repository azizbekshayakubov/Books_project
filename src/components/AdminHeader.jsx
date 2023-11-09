/* eslint-disable no-unused-vars */
import React from "react";
import { IconProfile, Iconsearch } from "../assets/style/adminimage/IconAdmin";
import Mahsulotlar from "./AdminBlok/Mahsulotlar";
function AdminHeader() {
  return (
    <>
      <div className=" bg-[#050e11]  ">
        <div className="mx-auto w-[1340px]  text-white">
          <div className="flex items-center justify-between">
            <nav className="flex items-center ">
              <div className="flex h-[70px] w-[220px] items-center justify-center gap-2  ">
                <h3 className="font-sail text-[22px] font-normal ">
                  <span className="text-blue-800">Books </span>List
                </h3>
              </div>

              <form className="relative">
                <span className="absolute right-5 top-3 ">
                  <Iconsearch />
                </span>
                <input
                  className=" h-[40px]  w-[400px] rounded-[7px] p-2"
                  placeholder="User"
                  type="text"
                />
              </form>
            </nav>
            <div className=" flex h-[70px] w-[220px] items-center  justify-center gap-2">
              <span className="flex h-[35px] w-[35px] items-center justify-center rounded-[50px] bg-[#fff]">
                <IconProfile />
              </span>
              <h4 className="font-Montserrat pl-[5px] text-[22px] font-semibold">
                Bek
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;
