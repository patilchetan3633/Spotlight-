import logo1 from "../assets/Images/planetaria.ecd81ade.svg";
import logo2 from "../assets/Images/airbnb.b4000690.svg";
import logo3 from "../assets/Images/facebook.dd9e7d48.svg";
import logo4 from "../assets/Images/starbucks.4a5bd050.svg";

export default function Sidebar() {
  const jobs = [
    { logo: logo1, name: "Planetaria", role: "CEO", time: "2019 — Present" },
    { logo: logo2, name: "Airbnb", role: "Product Designer", time: "2014 — 2019" },
    { logo: logo3, name: "Facebook", role: "iOS Software Engineer", time: "2011 — 2014" },
    { logo: logo4, name: "Starbucks", role: "Shift Supervisor", time: "2008 — 2011" }
  ];

  return (
    <div className="space-y-8">
      {/* Newsletter */}
      <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          ✉️ Stay up to date
        </h3>

        <p className="text-zinc-400 text-sm mb-4">
          Get notified when I publish something new.
        </p>

        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-zinc-800 px-4 py-2 rounded-md outline-none text-sm text-white placeholder-zinc-500"
          />
          <button className="bg-zinc-700 hover:bg-zinc-600 px-4 rounded-md text-sm transition">
            Join
          </button>
        </div>
      </div>

      {/* Work Section */}
      <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6">
        <h3 className="font-semibold mb-6 flex items-center gap-2">
          💼 Work
        </h3>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Logo */}
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                <img
                  src={job.logo}
                  alt={job.name}
                  className="w-6 h-6 object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <p className="font-medium text-white leading-none">
                  {job.name}
                </p>
                <p className="text-zinc-400 text-sm mt-1">
                  {job.role}
                </p>
              </div>

              {/* Time */}
              <p className="text-zinc-500 text-sm whitespace-nowrap">
                {job.time}
              </p>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <button className="w-full mt-6 bg-zinc-800 hover:bg-zinc-700 py-2.5 rounded-md text-sm font-medium transition">
          Download CV ↓
        </button>
      </div>
    </div>
  );
}
