import Introduction from "@/components/Introduction/Introduction";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-center min-h-screen p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-6 row-start-2 sm:items-start">
        <Introduction />
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer> */}
    </div>
  );
}
