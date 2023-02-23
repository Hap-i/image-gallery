import React from "react";

function Sidebar() {
  const allFolders = ["All", "Wedding", "Casual", "Studio", "Potrait"];
  return (
    <div
      className="bg-slate-600 text-white px-5 mt-28 
    fixed hidden lg:flex lg:flex-col lg:h-[100%] w-[200px]">
      {allFolders.map((folder, i) => {
        return (
          <div key={i}>
            <button>{folder}</button>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
