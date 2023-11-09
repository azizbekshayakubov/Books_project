/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center">
      <h3 className="mb-10 mt-9 text-3xl font-semibold"> Sahifa topilmadi</h3>
      <Link className="rounded border bg-teal-600 px-12 py-2 text-xl">
        Bosh sahifa
      </Link>
    </div>
  );
}

export default NotFound;
