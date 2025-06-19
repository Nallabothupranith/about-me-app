import { Hero } from "@/components/hero";

const Page = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-8 sm:py-16">
        <Hero />
      </section>
    </main>
  );
};
export default Page;
