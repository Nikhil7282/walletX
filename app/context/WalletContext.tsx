"use client";
import { useContext, useState } from "react";
import { createContext } from "react";
import {
  blockChain,
  initWalletType,
  WalletOperation,
} from "../types/initWallet";

export const walletContext = createContext<initWalletType | null>(null);

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [operation, setOperation] = useState<WalletOperation | null>(null);
  const [blockChain, setBlockChain] = useState<blockChain | null>(null);
  const [mnemonic, setMnemonic] = useState<string | null>(null);
  const [publicKeys, setPublicKeys] = useState<string[]>([]);
  const [pathIndex, setPathIndex] = useState(0);
  return (
    <walletContext.Provider
      value={{
        operation,
        setOperation,
        blockChain,
        setBlockChain,
        mnemonic,
        setMnemonic,
        publicKeys,
        setPublicKeys,
        pathIndex,
        setPathIndex,
      }}
    >
      {children}
    </walletContext.Provider>
  );
};

export default WalletProvider;

export const useInitWallet = () => {
  const context = useContext(walletContext);
  if (context === null) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
