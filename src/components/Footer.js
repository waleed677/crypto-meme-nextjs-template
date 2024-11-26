import React from 'react'
import { FaTelegram, FaTimes } from 'react-icons/fa' // Importing icons from react-icons

const Footer = () => {
  return (
    <div className="bg-black text-white p-6 text-center">
      <p className="text-lg md:text-xl font-semibold">© COPYRIGHT PONDX</p>
      <div className="max-w-xl mx-auto">
        <p className="text-sm md:text-sm mt-2 text-center">
          Pondx is a meme coin with no intrinsic value or financial expectations—purely for fun! Connect your wallet at app.uniswap.org using Metamask, paste the $PONDX address, and swap your SOLANA for Pondx.
        </p>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#" className="text-white hover:text-gray-400 transition">
          <FaTimes size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-400 transition">
          <FaTelegram size={24} />
        </a>
      </div>
    </div>
  )
}

export default Footer