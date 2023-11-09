/* eslint-disable no-unused-vars */
import AdminHeader from "../../components/AdminHeader";

import Mahsulotlar from "../../components/AdminBlok/Mahsulotlar";

function Admin() {
  return (
    <>
      <div className=" mx-auto  bg-gray-500 ">
        <AdminHeader />

        <div className="mx-auto mb-3 w-[1340px]">
          <Mahsulotlar />
        </div>
      </div>
    </>
  );
}

export default Admin;
