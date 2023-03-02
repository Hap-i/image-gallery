import React from "react";

function Sidebar() {
  const allFolders = ["All", "Wedding", "Casual", "Studio", "Potrait"];
  return (
    <div
      className="bg-color-3 text-white px-5 mt-12 
    fixed hidden lg:flex lg:flex-col lg:h-[100%] w-[200px]">
      <div className="space-y-2 flex flex-col items-start content-start mt-10 text-xl">
        {allFolders.map((folder, i) => {
          return (
            <div
              key={i}
              className="hover:bg-color-4 w-full p-1 px-4 text-black hover:text-white border rounded-lg border-color-3">
              <button>{folder}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
