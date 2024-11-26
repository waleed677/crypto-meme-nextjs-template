import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-gray-900 px-8 py-4"> {/* Added px-8 for horizontal padding */}
      <div className="text-pink-400 text-3xl font-bold">POND⛧X</div>
      <div className="flex space-x-6">
        <a href="#home" className="text-white hover:text-pink-400">HOME</a>
        <a href="#about" className="text-white hover:text-pink-400">About</a>
        <a href="#bridge" className="text-white hover:text-pink-400">Bridge</a>
        <a href="#tokenomics" className="text-white hover:text-pink-400">Tokenomics</a>
        <a href="#roadmap" className="text-white hover:text-pink-400">Roadmap</a>
      </div>
      <button className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200">
        Connect Wallet
      </button>
    </div>
  )
}

export default Navbar