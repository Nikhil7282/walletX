"use client";
import SolanaWallet from "../components/wallet/SolanaWallet";
import WalletComponent from "../components/wallet/WalletComponent";

const Wallet = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-10 items-center justify-center p-10">
      <WalletComponent />
      <SolanaWallet />
    </div>
  );
};

export default Wallet;
