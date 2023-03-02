import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function HomeGallery() {
  const TABS = {
    ALL: "All",
    WEDDING: "Wedding",
    POTRAIT: "Potraits",
  };
  const [currentTab, setcurrentTab] = useState(TABS.ALL);
  const [tabContent, settabContent] = useState([]);
  const allData = [
    "https://ik.imagekit.io/hapi/All/photo-1577561535348-f9db0abab970.avif",
    "https://ik.imagekit.io/hapi/All/photo-1598089841712-8269414886e8.avif",
    "https://ik.imagekit.io/hapi/All/photo-1616605586215-199845790f43.avif",
    "https://ik.imagekit.io/hapi/All/photo-1609351231656-9285d74d363d.avif",
    "https://ik.imagekit.io/hapi/All/photo-1604807110053-614d8b181259.avif",
    "https://ik.imagekit.io/hapi/All/photo-1614951649373-32cc2e957fdd.avif",
  ];
  const WeddingData = [
    "https://ik.imagekit.io/hapi/Wedding/photo-1551854716-8b811be39e7e.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1587271339318-2e78fdf79586.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1542042161784-26ab9e041e89.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1630526720753-aa4e71acf67d.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1611106211090-8f3c79eb8552.avif",
  ];
  const potraitData = [
    "https://ik.imagekit.io/hapi/Potrait/photo-1583397758920-86c1cb75b8fe.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1596378232746-1dfcefb7bcf1.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1583397758707-927fca9208a9.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1571366992791-2ad2078656cb.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1612681051163-6c1ad652d143.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1607346256330-dee7af15f7c5.avif",
  ];

  useEffect(() => {
    if (currentTab === TABS.ALL) {
      settabContent(allData);
    } else if (currentTab === TABS.WEDDING) {
      settabContent(WeddingData);
    } else if (currentTab === TABS.POTRAIT) {
      settabContent(potraitData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]);

  const changeCurrentTab = (tab) => {
    return () => {
      setcurrentTab(tab);
    };
  };

  return (
    <div id="Home-Gallery" className="my-10">
      <div className="text-center text-4xl my-10">Latest Works</div>
      <div className="flex justify-center space-x-10">
        <div
          onClick={changeCurrentTab("All")}
          className={
            currentTab === TABS.ALL
              ? "underline underline-offset-[15px] cursor-pointer"
              : "cursor-pointer"
          }>
          ALL
        </div>
        <div
          onClick={changeCurrentTab("Wedding")}
          className={
            currentTab === TABS.WEDDING
              ? "underline underline-offset-[15px] cursor-pointer"
              : "cursor-pointer"
          }>
          WEDDING
        </div>
        <div
          onClick={changeCurrentTab("Potraits")}
          className={
            currentTab === TABS.POTRAIT
              ? "underline underline-offset-[15px] cursor-pointer"
              : "cursor-pointer"
          }>
          POTRAITS
        </div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 text-center w-full h-screen md:p-14 p-5">
          {tabContent.map((imgurl, i) => {
            return (
              <div
                key={i}
                style={{
                  backgroundImage: `url(${imgurl})`,
                }}
                className="w-full h-full md:h-full bg-cover bg-center relative"></div>
            );
          })}
        </div>
      </div>
      <div className="text-center">
        <Link to="/gallery">
          <button className="bg-color-3 border-color-3 text-black border rounded-xl p-3 hover:opacity-90">
            Explore Gallery
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeGallery;
