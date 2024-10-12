import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallet",
  description: "Wallet description",
  openGraph: {
    title: "Wallet",
    description: "Wallet description",
    siteName: "Web Wallet",
  },
};

const WalletLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default WalletLayout;
