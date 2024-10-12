"use client";
import React from "react";
import { useInitWallet } from "../../context/WalletContext";
import { WalletOperation } from "../../types/initWallet";

function Operation() {
  const { setOperation } = useInitWallet();

  return (
    <div className="flex flex-col gap-4 ">
      <button
        className="bg-slate-50 text-[#222222] px-4 py-2 rounded-md"
        onClick={() => {
          setOperation(WalletOperation.CREATE);
        }}
      >
        Create Wallet
      </button>
      <button
        className="bg-zinc-600 text-[#ffffff] px-4 py-2 rounded-md"
        onClick={() => {
          setOperation(WalletOperation.IMPORT);
        }}
      >
        Import Wallet
      </button>
    </div>
  );
}

export default Operation;
