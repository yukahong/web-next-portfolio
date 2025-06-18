import Divider from "@/components/Divider/Divider";
import Introduction from "@/components/Introduction/Introduction";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-10  items-center px-4">
      <Introduction />
      <Divider />
      <About />
      <Divider />
      <Projects />
    </main>
  );
}
