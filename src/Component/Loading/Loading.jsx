import React from "react";

function Loading() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-20 h-20 border-8 border-t-8 border-t-[#004d4d] border-gray-200 rounded-full animate-spin"></div>
      </div>
    </>
  );
}

export default Loading;
