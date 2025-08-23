import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Hero() {
  const texts = ["Where innovation meets code...", "Empowering ideas through coding..."];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0); // which string
  const [subIndex, setSubIndex] = useState(0); // which char
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      // pause before deleting
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setCurrentText(texts[index].substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  // Function to handle opening the Linktree URL
  const handleJoinUsClick = () => {
    window.open("https://linktr.ee/viksha.rvu?utm_source=linktree_profile_share&ltsid=ae6875c8-8b12-40eb-b704-d43efd0e19e9", "_blank");
  };

  return (
    <section
      id="home"
      className="px-20 lg:px-8 py-32 relative overflow-hidden flex items-center justify-center text-center"
    >
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Heading */}
        {/* <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 font-['Orbitron'] 
           bg-gradient-to-b from-cyan-500 to-gray-200 bg-clip-text text-transparent"> */}
           <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 font-['Orbitron'] 
           text-white-500">
          VIKSHA CODING CLUB
          <br />
          {/* <span className="text-transparent bg-clip-text text-3xl bg-gradient-to-r from-[rgb(70,197,212)] via-[rgb(70,197,212)] to-[rgb(70,197,212)] font-mono"> */}
            <span className="text-white-500 bg-clip-text text-3xl  font-mono">
            {currentText}
          </span>
          <span className="animate-pulse text-4xl text-[rgb(70,197,212)]">|</span>
        </h1>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/projects">
            <Button className="bg-gradient-to-r from-sky-900 via-cyan-800 to-teal-900 hover:from-sky-800 hover:via-cyan-700 hover:to-teal-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-white shadow-md shadow-cyan-900/40">
              Explore Projects
            </Button>
          </Link>

          {/* Updated Join Us button with onClick handler */}
          <Button
            onClick={handleJoinUsClick}
            className="bg-[rgba(0,40,60,0.7)] border border-[rgba(70,197,212,0.5)] 
                     text-[rgba(70,197,212,0.9)] 
                     hover:bg-[rgba(0,60,90,0.9)] 
                     px-8 py-4 rounded-xl font-semibold 
                     transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Us
          </Button>
        </div>
      </div>
    </section>
  );
}