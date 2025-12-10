import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Gallery from "./Components/Gallery";
import Articles from "./Components/Articles";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto px-4 bg-zinc-950 text-zinc-200">
      <Navbar />
      <Hero />
      <Gallery />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <Articles />
        </div>
        <Sidebar />
      </div>

      <Footer />
    </div>
  );
}