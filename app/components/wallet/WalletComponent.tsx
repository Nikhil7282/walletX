import { useState } from "react";
import { generateMnemonic } from "bip39";
import MnemonicComponent from "./MnemonicComponent";
import { copyToClipboard } from "../../utils/helpers";

function WalletComponent() {
  const [showMnemonic, setShowMnemonic] = useState(false);
  const [mnemonic, setMnemonic] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={() => setMnemonic(generateMnemonic())}
        className="bg-slate-50 text-[#222222] px-4 py-2 rounded-md hover:bg-slate-200 transition-colors"
      >
        Create Seed Phrase
      </button>
      {mnemonic && (
        <MnemonicComponent
          showMnemonic={showMnemonic}
          setShowMnemonic={setShowMnemonic}
          mnemonicWords={mnemonic.split(" ")}
          copyToClipboard={copyToClipboard}
        />
      )}
    </div>
  );
}

export default WalletComponent;
