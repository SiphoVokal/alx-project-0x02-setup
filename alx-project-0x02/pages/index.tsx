import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-5xl font-bold">Welcome</h1>
      </main>
    </div>
  );
}
