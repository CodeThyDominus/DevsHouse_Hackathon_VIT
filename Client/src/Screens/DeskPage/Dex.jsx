import React from "react";

import Swap from "../../Components/Swap/Swap.jsx";
function Dex() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080808]">
      <ul className="flex flex-col h-[27rem] justify-between mt-10 w-44 ml-4 ">
        <li className="hover:bg-pink-200 h-11 flex items-center rounded-md">
          <a href="" className="text-xl text-gray-500 font-semibold hover:text-pink-600 ml-9 h-11 flex items-center w-44 ">
            <span class="material-symbols-outlined">swap_vert</span>Swap
          </a>
        </li>
        <li className="hover:bg-pink-200 h-11 flex items-center rounded-md">
          <a href="" className="text-xl text-gray-500 font-semibold hover:text-pink-600 ml-9 h-11 flex items-center  w-44">
            <span class="material-symbols-outlined">humidity_high</span>Pool
          </a>
        </li>
        <li className="hover:bg-pink-200 h-11 flex items-center rounded-md">
          <a href="" className="text-xl text-gray-500 font-semibold hover:text-pink-600 ml-9 h-11 flex items-center  w-44">
            <span class="material-symbols-outlined">open_with</span>Bridge
          </a>
        </li>
        <li className="hover:bg-pink-200 h-11 flex items-center rounded-md">
          <a href="" className="text-xl text-gray-500 font-semibold hover:text-pink-600 ml-9 h-11 flex items-center  w-44">
            <span class="material-symbols-outlined">
              account_balance_wallet
            </span>
            Account
          </a>
        </li>
        <li className="hover:bg-pink-200 h-11 flex items-center rounded-md">
          <a href="" className="text-xl text-gray-500 font-semibold hover:text-pink-600 ml-9 h-11 flex items-center  w-44">
            <span class="material-symbols-outlined">award_star</span>Rewards
          </a>
        </li>
        <li className="hover:bg-pink-200 h-11 flex items-center rounded-md">

          <a href="" className="text-xl text-gray-500 font-semibold ml-9 h-11 flex items-center  hover:text-pink-600  w-44">
            <span class="material-symbols-outlined">token</span>Tokens
          </a>
        </li>
      </ul>
      <div className="absolute right-[10rem] bottom-20"> <Swap /></div>
    </div>
  );
}

export default Dex;