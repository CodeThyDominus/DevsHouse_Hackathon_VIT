import React, { useState, useEffect } from 'react';
import './DashBoard.css'
import { Link } from 'react-router-dom';

const DashBoard = ({ handleIndex }) => {
  const [tokenData, setTokenData] = useState(null);

  useEffect(() => {
    fetchTokenData();
  }, []);

  const fetchTokenData = async () => {
    try {
      const response = await fetch('https://api.dexscreener.io/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8');
      const { pairs } = await response.json();
      //console.log(data.pairs);
      setTokenData(pairs);
    } catch (error) {
      console.error('Error fetching token data:', error);
    }
  };
  console.log(tokenData);
  return (
    <div className='dashboard w-screen  max-h-min'>
      <div className="graph">
        <div className='bg-[#080808] p-3 flex flex-wrap justify-start items-center text-white'>
          {tokenData && tokenData.map((pairs, index) => <div key={index} className='w-2/6 flex flex-wrap'>
            <div data-aos-easing="ease-in-out" data-aos="fade-up" className="card-body background-card rounded-lg p-3 border-white border-2 flex flex-col justify-center items-center m-5 w-3/6">
              <h5 className="card-title">{pairs.dexId}</h5>
              <p className="card-text">{pairs.chainId}</p>
              <p className="card-text">{pairs.baseToken.name}</p>
              <p className="card-text"><span class="material-symbols-outlined">
                currency_exchange
              </span> {pairs.baseToken.symbol}</p>
              <p className="card-text"><span class="material-symbols-outlined">
                attach_money
              </span> {pairs.priceNative}</p>
              <p className="card-text"><span class="material-symbols-outlined">
                universal_currency
              </span>{pairs.priceUsd}</p>
              <div className='flex gap-3 mt-3'>
                <a href={pairs.url} className='bg-pink-600 hover:bg-black text-white p-1 rounded-sm' target='blank'>See in details</a>
                <Link to='/graph' className="border-pink-600 hover:border-white border-2 p-1 text-white rounded-sm" onClick={() => { handleIndex(pairs) }}>Continue</Link>
              </div>

            </div>

          </div>)}
        </div>
      </div>




    </div>
  )
}

export default DashBoard