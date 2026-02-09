import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Featured from "./components/Featured";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Featured />
      <Newsletter />
      <Footer />
    </div>
  );
}
