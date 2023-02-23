import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function GalleryImg() {
  const images = [
    "https://ik.imagekit.io/hapi/Potrait/photo-1612681051163-6c1ad652d143.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1607346256330-dee7af15f7c5.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1571366992791-2ad2078656cb.avif",
    "https://ik.imagekit.io/hapi/All/photo-1577561535348-f9db0abab970.avif",
    "https://ik.imagekit.io/hapi/All/photo-1598089841712-8269414886e8.avif",
    "https://ik.imagekit.io/hapi/All/photo-1616605586215-199845790f43.avif",
    "https://ik.imagekit.io/hapi/All/photo-1609351231656-9285d74d363d.avif",
    "https://ik.imagekit.io/hapi/All/photo-1604807110053-614d8b181259.avif",
    "https://ik.imagekit.io/hapi/All/photo-1614951649373-32cc2e957fdd.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1551854716-8b811be39e7e.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1587271339318-2e78fdf79586.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1542042161784-26ab9e041e89.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1630526720753-aa4e71acf67d.avif",
    "https://ik.imagekit.io/hapi/Wedding/photo-1611106211090-8f3c79eb8552.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1583397758920-86c1cb75b8fe.avif",
  ];
  return (
    <div className="pt-28 lg:ml-[200px] lg:px-20">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images.map((img, i) => {
            return (
              <div key={i} className="m-2">
                <img src={img} alt="" className="w-[100%]" />
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default GalleryImg;
