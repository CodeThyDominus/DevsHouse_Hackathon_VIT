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
    <div className="gap-3 shadow-lg p-2 shadow-black bg-slate-300 rounded-sm">
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
          <span class="material-symbols-outlined text-pink-600">expand_more</span>
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
      
        <button className="bg-pink-400 p-1 text-center text-xl m-2 text-white mt-6 rounded-lg" onClick={connectToMetaMask}>Connect Account</button>
    
    </div>
  );
}

export default Swap;