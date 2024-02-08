import React from "react";

export default function Avatar({ userId, username }) {
  const colorsArray = [
    "bg-blue-200",
    "bg-red-200",
    "bg-yellow-200",
    "bg-teal-200",
    "bg-orange-200",
    "bg-violet-200",
  ];
  const userIdBase10 = parseInt(userId, 16);
  const colorIndex = userIdBase10 % colorsArray.length;
  return (
    <>
      <div
        className={`h-8 flex items-center aspect-square ${colorsArray[colorIndex]} uppercase rounded-full`}
      >
        <div className="text-center font-medium w-full">{username[0]}</div>
      </div>
    </>
  );
}
