/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";

import { CrossBtn } from "../../../assets/style/imgs/icons/icons";
import { useFetch } from "../../../hook/useFetch";

function ProductAdd({ setOpenProductAdd }) {
  const name = useRef();
  const category = useRef();
  const weight = useRef();
  const warranty = useRef();
  const size = useRef();
  const capacity = useRef();
  const body = useRef();
  const cost = useRef();
  const newCost = useRef();

  const [img, setImg] = useState("");
  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };

  const [isNew, setIsNew] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const cheekNew = () => {
    setIsNew(!isNew);
  };
  const cheekActive = () => {
    setIsActive(!isActive);
  };

  const handlePost = (e) => {
    e.preventDefault();
    setOpenProductAdd(false);

    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
    );

    var formdata = new FormData();
    formdata.append("name", name.current.value);
    formdata.append("category", category.current.value);
    formdata.append("weight", weight.current.value);
    formdata.append("images", img);
    formdata.append("isActive", isActive);
    formdata.append("warranty", warranty.current.value);
    formdata.append("size", size.current.value);
    formdata.append("capacity", capacity.current.value);
    formdata.append("body", body.current.value);
    formdata.append("cost", cost.current.value);
    formdata.append("newCost", newCost.current.value);
    formdata.append("discount", newCost.current.value ? true : false);
    formdata.append("new", isNew);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:1212/admin/products/1", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const url = "http://localhost:1212/api/products";
  const { data, loader, error } = useFetch(url);
  const categories = data && data.categories;

  return (
    <>
      <div
        className="font-Montserrat     fox  fixed
    left-[700px] top-20 flex w-[400px] rounded-lg  border bg-white p-6 shadow-2xl shadow-black "
      >
        <div className="content">
          <div className="content_header flex justify-around">
            <div className="">
              <h3>Create a book </h3>
            </div>

            <div onClick={() => setOpenProductAdd(false)}>
              <CrossBtn />
            </div>
          </div>
          <div className="product_add mx-20">
            <form className="flex" onSubmit={handlePost}>
              <div className="mt-5">
                <div>
                  <label className="mt-4 block" htmlFor="Tovarnomi">
                    Title
                  </label>
                  <input
                    className="w-full rounded border px-4 py-2 focus:border-blue-400 focus:outline-none"
                    ref={name}
                    required
                    type="text"
                    placeholder="Enter your title"
                    id="Tovarnomi"
                  />
                  <label className="mt-4 block" htmlFor="Narxi">
                    Author
                  </label>
                  <input
                    className="w-full rounded border px-4 py-2 focus:border-blue-400 focus:outline-none"
                    ref={cost}
                    required
                    type="text"
                    id="Narxi"
                    placeholder="Enter your author"
                  />
                  <label className="mt-4 block" htmlFor="Yuklama">
                    Cover
                  </label>
                  <input
                    className="w-full rounded border px-4 py-2 focus:border-blue-400 focus:outline-none"
                    ref={weight}
                    required
                    type="text"
                    id="Yuklama"
                    placeholder="Enter your cover"
                  />
                </div>
                <div>
                  <label className="mt-8 block " htmlFor="Razmeri">
                    Razmeri
                  </label>
                  <input
                    className="w-full rounded border px-4 py-2 focus:border-blue-400 focus:outline-none"
                    ref={size}
                    required
                    type="text"
                    id="Razmeri"
                    placeholder="masalan: 200 x 140 x 40"
                  />
                  <label
                    className="mt-4 block
            "
                    htmlFor="Kafolat"
                  >
                    Kafolat
                  </label>
                  <input
                    className="w-full rounded border px-4 py-2 focus:border-blue-400 focus:outline-none"
                    ref={warranty}
                    required
                    type="text"
                    placeholder="masalan: 1 yil"
                    id="Kafolat"
                  />
                </div>
                <div>
                  <button className="mt-[45px] h-[45px] w-[220px] rounded bg-[#01384D] text-white">
                    Qoshish
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductAdd;
