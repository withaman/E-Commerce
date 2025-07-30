import React from "react";

function Demo() {
  return (
    <div className="flex flex-col sm:flex-row md:flex-wrap justify-center sm:justify-center gap-3">
      <div className="md:w-[260px] md:h-[500px] bg-red-600 h-[200px] w-[200px]"></div>
      <div className="md:w-[260px] md:h-[500px] bg-orange-600 h-[200px] w-[200px]"></div>
      <div className="md:w-[260px] md:h-[500px] bg-yellow-600 h-[200px] w-[200px]"></div>
      <div className="md:w-[260px] md:h-[500px] bg-green-600 h-[200px] w-[200px]"></div>
    </div>
  );
}

export default Demo;
