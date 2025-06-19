import Divider from "@/components/Divider/Divider";
import Introduction from "@/components/Introduction/Introduction";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";

export default function Home() {
  return (
    <main className="flex flex-col gap-10  items-center px-4">
      <Introduction />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
    </main>
  );
}
