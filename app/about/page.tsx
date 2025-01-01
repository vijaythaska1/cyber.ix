import { About } from "@/components/sections/about";

export default function AboutPage() {
  return (
    <main className="pt-">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-blue-950 to-black relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

        <div className="container mx-auto px-6 relative">
          <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            About Cyber.ix
          </h1>
          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12">
            At Cyber.ix, we redefine technology innovation. Our mission is to create cutting-edge solutions that empower businesses to achieve their goals and embrace the future of digital transformation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <About />
    </main>
  );
}
