import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {

  const checkNetwork = async () => {
    try {
      if (window.ethereum.networkVersion !== '80001') {
        alert("Please connect to Polygon Mumbai Testnet!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkNetwork();
  }, []);

  return (
    <div className='relative sm:-8 p-4 bg-[#ffffff] min-h-screen flex flex-row'>
      <div className='sm:flex hidden mr-10 relative'>
        
        <Sidebar />
      </div>

      <div className='flex-1 max-sm:w-full max-w-[1280] mx-auto sm:pr-5'>
        <Navbar />
        <h2 className='text-4xl font-bold text-[#306FDB]'>Active Fundraisers</h2>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App