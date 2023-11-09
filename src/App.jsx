import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
//ModelTypes

import NotFound from "./pages/NotFound";
import Mahsulotlar from "./components/AdminBlok/Mahsulotlar";

import { useState } from "react";

import { useFetch } from "./hook/useFetch";

function App() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || "",
  );
  console.log(token);

  const url = "http://localhost:1212/api/products";
  const { data } = useFetch(url);
  // eslint-disable-next-line no-unused-vars
  const category = data && data.categories;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        token ?
        <Route
          path="/admin/*"
          element={token ? <Admin /> : <Login data={{ token, setToken }} />}
        >
          ,
          <Route path="Mahsulotlar" element={<Mahsulotlar />} />,
          <Route path="Toifalar" />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
