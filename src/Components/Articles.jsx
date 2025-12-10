export default function Articles() {
  const data = [
    {
      date: "September 5, 2022",
      title: "Crafting a design system for a multiplanetary future",
      desc: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."
    },
    {
      date: "September 2, 2022",
      title: "Introducing Animaginary: High performance web animations",
      desc: "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."
    },
    {
      date: "July 14, 2022",
      title: "Rewriting the cosmOS kernel in Rust",
      desc: "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week."
    }
  ];

  return (
    <div className="space-y-12">
      {data.map((item, i) => (
        <div
          key={i}
          className="group relative p-6 -ml-6 rounded-2xl transition-all duration-300 hover:bg-zinc-900/60"
        >
          {/* Left Glow Line */}
          <span className="absolute left-0 top-0 h-full w-[2px] bg-transparent group-hover:bg-teal-400/70 transition-all duration-300"></span>

          {/* Date */}
          <p className="text-zinc-500 text-sm flex items-center gap-3">
            <span className="h-4 w-px bg-zinc-700"></span>
            {item.date}
          </p>

          {/* Title */}
          <h2 className="text-2xl font-bold mt-3 text-white  transition-colors">
            {item.title}
          </h2>

          {/* Description */}
          <p className="text-zinc-400 mt-3 leading-relaxed">
            {item.desc}
          </p>

          {/* Read More */}
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-4 text-teal-400 group-hover:text-teal-300 transition-all"
          >
            Read article
            <span className="inline-block transform group-hover:translate-x-1 transition">
              →
            </span>
          </a>
        </div>
      ))}
    </div>
  );
}
