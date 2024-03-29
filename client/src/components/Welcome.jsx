import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./index";
const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const connectWallet = () => {};
  const handleSubmit = () => {};
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-start justify-between px-4 py-12 mf:flex-row md:p-20">
        <div className="flex flex-col items-start justify-start flex-1 mf:mr-10">
          <h1 className="py-1 text-3xl text-black sm:text-5xl text-gradient">
            Send Crypto <br /> across the world
          </h1>
          <p className="w-11/12 mt-5 text-base font-light text-left text-white md:w-9/12">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            SendCrypt.
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white">Connect Wallet</p>
          </button>
          <div className="grid w-full grid-cols-2 mt-10 sm:grid-cols-3">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start flex-1 w-full mt-10 mf:mt-0">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex flex-col justify-between w-full h-full">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-sm font-light text-white">0x...</p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col items-center justify-start blue-glassmorphism w-full p-5 sm:w-96 ">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={() => {}}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={() => {}}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
