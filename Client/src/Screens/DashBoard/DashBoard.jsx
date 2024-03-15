import React, { useState, useEffect } from 'react';
import './DashBoard.css'
import { Link } from 'react-router-dom';

const DashBoard = ({handleIndex}) => {
  const [tokenData, setTokenData] = useState(null);

  useEffect(() => {
    fetchTokenData();
  }, []);

  const fetchTokenData = async () => {
    try {
      const response = await fetch('https://api.dexscreener.io/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8');
      const {pairs} = await response.json();
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
      <div>
       {tokenData && tokenData.map((pairs,index)=><div key={index} className='flex flex-col'><Link to='/graph' onClick={()=>{handleIndex(pairs)}}>{pairs.dexId}</Link></div>)};
      </div>
      </div>

    </div>
  )
}

export default DashBoard