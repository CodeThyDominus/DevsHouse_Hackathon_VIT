import React, { useState } from 'react';
import Web3 from 'web3';

import './Swap.css'
function Swap() {
  const [metamaskId, setMetamaskId] = useState('');

  const connectToMetaMask = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Get MetaMask account
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });

        // Set the MetaMask account ID
        if (accounts.length > 0) {
          setMetamaskId(accounts[0]);
        } else {
          setMetamaskId('No MetaMask account connected');
        }
      } else {
        setMetamaskId('MetaMask not installed');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="gap-3 shadow-lg p-2 shadow-black bg-slate-300 rounded-sm" data-aos="fade-left">
      <div className="w-80 flex justify-between ">
        <h1 className="text-2xl font-semibold">Swap</h1>
        <div>
          <span class="material-symbols-outlined text-pink-600">monitoring</span>
          <span class="material-symbols-outlined text-pink-700">settings</span>
        </div>
      </div>
      <div className=" flex justify-between items-center bg-slate-300 p-1 rounded-lg mt-6">
        <div className=" flex w-[2/6] items-center p-2 rounded-lg">
          <select class="form-select" aria-label="Default select example">
            <option value="1">XOR</option>
            <option value="2">PSWAP</option>
            <option selected value="3">ETH</option>
          </select>
        </div>
        <input className="p-1 w-2/6 rounded text-right" placeholder='amount'/>
      </div>
      <div className="text-2xl font-bold flex justify-center bg-slate-400 h-fit w-fit rounded-full m-auto mt-6  mb-6">
        <span class="material-symbols-outlined text-pink-600">swap_vert</span>
      </div>
      <div className=" flex justify-between items-center bg-slate-300 p-1 rounded-lg">
        <div className=" flex w-[2/6] items-center p-2 rounded-lg">
        <select class="form-select" aria-label="Default select example">
            <option value="1">XOR</option>
            <option value="2" selected>PSWAP</option>
            <option value="3">ETH</option>
          </select>
        </div>
        <input className=" p-1 w-2/6 rounded text-right" placeholder='amount'/>
      </div>
      <div className="flex flex-col mt-6">
        <h1 className="text-lg font-semibold">Spillage Tolerance</h1>
        <div className="flex justify-between">



          <div>
            <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">$</span>
              </div>
              <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" />
              <div class="absolute inset-y-0 right-0 flex items-center">
                <label for="currency" class="sr-only">Currency</label>
                <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                  <option>0.25%</option>
                  <option>0.50%</option>
                  <option>0.75%</option>
                </select>
              </div>
            </div>
          </div>




        </div>
      </div>

      <button className="bg-pink-400 p-1 text-center text-xl m-2 text-white mt-6 rounded-lg" onClick={connectToMetaMask}>Connect Account</button>
    </div>
  );
}

export default Swap;