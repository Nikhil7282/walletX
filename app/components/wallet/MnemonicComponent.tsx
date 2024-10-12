import { ChevronDown, ChevronUp, Copy } from "lucide-react";
import React from "react";

interface MnemonicDisplayProps {
  showMnemonic: boolean;
  setShowMnemonic: (value: boolean) => void;
  mnemonicWords: string[];
  copyToClipboard: (content: string) => void;
}

const MnemonicComponent = ({
  setShowMnemonic,
  showMnemonic,
  mnemonicWords,
  copyToClipboard,
}: MnemonicDisplayProps) => {
  return (
    <div className="group flex flex-col items-center gap-4 cursor-pointer rounded-lg border border-primary/10 p-4">
      <div
        className="flex w-full gap-5 items-center"
        onClick={() => setShowMnemonic(!showMnemonic)}
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
          Your Secret Phrase
        </h2>
        <button onClick={() => setShowMnemonic(!showMnemonic)}>
          {showMnemonic ? (
            <ChevronUp className="size-4" />
          ) : (
            <ChevronDown className="size-4" />
          )}
        </button>
      </div>

      {showMnemonic && (
        <div
          className="flex flex-col w-full items-center justify-center"
          onClick={() => copyToClipboard(mnemonicWords.join(" "))}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center w-full items-center mx-auto my-8">
            {mnemonicWords.map((word, index) => (
              <p
                key={index}
                className="md:text-lg bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 rounded-lg p-4"
              >
                {word}
              </p>
            ))}
          </div>
          <div className="text-sm md:text-base text-primary/50 flex w-full gap-2 items-center group-hover:text-primary/80 transition-all duration-300">
            <Copy className="size-4" /> Click Anywhere To Copy
          </div>
        </div>
      )}
    </div>
  );
};

export default MnemonicComponent;
