import { Keypair } from "@solana/web3.js";
import { useInitWallet } from "../../context/WalletContext";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";

function SolanaWallet() {
  const { mnemonic, pathIndex, publicKeys, setPublicKeys } = useInitWallet();

  const addSolanaAccount = () => {
    const seedPhrase = mnemonicToSeed(mnemonic ? mnemonic : "");
    const path = `m/44'/501'/${pathIndex}'/0'`;
    const derivedSeed = derivePath(path, seedPhrase.toString()).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keyPair = Keypair.fromSecretKey(secret).publicKey.toBase58();
    setPublicKeys([...publicKeys, keyPair]);
  };
  return (
    <div>
      <button onClick={addSolanaAccount}>Add Solana</button>
      <div>
        {" "}
        {publicKeys.map((p) => (
          <div key={p}>{p}</div>
        ))}
      </div>
    </div>
  );
}

export default SolanaWallet;
