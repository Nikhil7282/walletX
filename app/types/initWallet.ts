export interface initWalletType {
  operation: WalletOperation | null;
  setOperation: React.Dispatch<React.SetStateAction<WalletOperation | null>>;
  blockChain: blockChain | null;
  setBlockChain: React.Dispatch<React.SetStateAction<blockChain | null>>;
  mnemonic: string | null;
  setMnemonic: React.Dispatch<React.SetStateAction<string | null>>;
  publicKeys: string[];
  setPublicKeys: React.Dispatch<React.SetStateAction<string[]>>;
  pathIndex: number;
  setPathIndex: React.Dispatch<React.SetStateAction<number>>;
}

export enum WalletOperation {
  CREATE = "CREATE",
  IMPORT = "IMPORT",
}

export enum blockChain {
  ETHEREUM = "ETHEREUM",
  SOLANA = "SOLANA",
}
