export function Stats() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Developers" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b ffrom-blue-950 to-black text-gray-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}