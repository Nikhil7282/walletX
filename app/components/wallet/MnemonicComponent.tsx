import { ChevronDown, ChevronUp, ClipboardCheck, Copy } from "lucide-react";
import React, { useState } from "react";

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
  const [copied, setCopied] = useState(false);
  return (
    <div className="group flex flex-col items-center gap-4 cursor-pointer rounded-lg border border-primary/10 p-4">
      <div
        className="flex w-full gap-5 items-center"
        onClick={() => setShowMnemonic(!showMnemonic)}
      >
        <p className="text-xl md:text-xl font-bold tracking-tighter">
          Your Secret Phrase
        </p>
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
          onClick={() => {
            copyToClipboard(mnemonicWords.join(" "));
            setCopied(true);
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center w-full items-center mx-auto mt-2 mb-4">
            {mnemonicWords.map((word, index) => (
              <p
                key={index}
                className="md:text-lg bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 rounded-lg border border-zinc-400 px-4 py-2"
              >
                {word}
              </p>
            ))}
          </div>
          <div className="text-sm md:text-base text-primary/50 flex w-full gap-2 items-center group-hover:text-primary/80 transition-all duration-300">
            {!copied ? (
              <>
                <Copy className="size-4" /> Click Anywhere To Copy
              </>
            ) : (
              <>
                <ClipboardCheck className="size-4" /> Copied
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MnemonicComponent;
