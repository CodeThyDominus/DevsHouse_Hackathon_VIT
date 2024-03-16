import React from "react";

function Swap() {
  return (
    <div className="gap-3 shadow-lg p-2 shadow-black">
      <div className="w-80 flex justify-between ">
        <h1 className="text-2xl font-semibold">Swap</h1>
        <div>
          <span class="material-symbols-outlined text-pink-600">monitoring</span>
          <span class="material-symbols-outlined text-pink-700">settings</span>
        </div>
      </div>
      <div className=" flex justify-between items-center bg-slate-300 p-1 rounded-lg mt-6">
        <div className="bg-pink-100 flex w-16 items-center p-2 rounded-lg">
          <h1 className="font-bold">XOR</h1>
          <span class="material-symbols-outlined text-pink-700">expand_more</span>
        </div>
        <span className="text-lg font-bold">0.00</span>
      </div>
      <div className="text-2xl font-bold flex justify-center bg-slate-400 h-fit w-fit rounded-full m-auto mt-6  mb-6">
        <span class="material-symbols-outlined text-pink-600">swap_vert</span>
      </div>
      <div className=" flex justify-between items-center bg-slate-300 p-1 rounded-lg">
        <div className="bg-pink-100 flex w-20 items-center p-2 rounded-lg">
          <h1 className="font-bold">PSWAP</h1>
          <span class="material-symbols-outlined text-pink-700">expand_more</span>
        </div>
        <span className="text-lg font-bold">0.00</span>
      </div>
      <div className="flex flex-col mt-6">
        <h1 className="text-lg font-semibold">Spillage Tolerance</h1>
        <div className="flex justify-between">
            <h3 className="font-semibold">0.1%</h3>
            <h3 className="font-semibold">0.5%</h3>
            <h3 className="font-semibold">1%</h3>
            <h3 className="font-semibold">1.5%</h3>
        </div>
      </div>
      
        <h1 className="bg-pink-400 p-1 text-center text-xl m-2 text-white mt-6 rounded-lg">Connect Account</h1>
    
    </div>
  );
}

export default Swap;