export function Cyber() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-950 to-black relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="container mx-auto px-6 relative text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text mb-6">
          Ready to Start Your Project?
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Let's work together to bring your vision to life. Contact us today for a free consultation.
        </p>

        {/* Cyber Button */}
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Contact Us Now
        </button>
      </div>
    </section>
  );
}

export default Cyber;
