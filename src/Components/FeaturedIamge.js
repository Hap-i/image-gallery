import React from "react";

function FeaturedIamge() {
  const featuredImages = [
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
    "https://ik.imagekit.io/hapi/Potrait/photo-1596378232746-1dfcefb7bcf1.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1583397758707-927fca9208a9.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1571366992791-2ad2078656cb.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1612681051163-6c1ad652d143.avif",
    "https://ik.imagekit.io/hapi/Potrait/photo-1607346256330-dee7af15f7c5.avif",
  ];
  return (
    <div className="mb-10">
      <div className="text-center text-4xl mb-10">Featured Images</div>
      <div className="w-full h-[200px] bg-black grid grid-rows-1 grid-flow-col overflow-hidden">
        {featuredImages.map((imageUrl, i) => {
          return (
            <div
              key={i}
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
              className="w-[150px] md:w-[200px] bg-cover bg-no-repeat bg-center relative"></div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedIamge;
