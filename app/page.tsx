import Operation from "./components/initialization/Operation";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Welcome To Web Wallet</h1>
      <h3>Let&apos;s get started</h3>
      <Operation />
    </div>
  );
}
