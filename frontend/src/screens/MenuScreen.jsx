import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import MenuSection from "../components/MenuSection";
import bgimg from "../assets/bg-img.jpg"; 
import { useGetAllMenuQuery } from "../slices/menuApiSice";
import Footer from "../components/Footer";

function MenuScreen() {
  const [selected, setSelected] = useState("");

  const { data: menu } = useGetAllMenuQuery();

  useEffect(() => {
    if (menu) {
      setSelected(menu[0]);
    }
  }, [menu]);

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <Header active={'Menu'}/>
        <main className="text-center  backdrop-blur-sm bg-black/60 min-h-screen px-4 py-8">
          <h1 className="text-white text-4xl font-bold">MENU</h1>
          <p className="text-gray-400 mt-2 max-w-md mx-auto">
            Please take a look at our menu featuring food, drinks, and brunch.
          </p>
          <Tabs selected={selected} setSelected={setSelected} menu={menu} />
          {selected && <MenuSection selected={selected} />}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MenuScreen;
