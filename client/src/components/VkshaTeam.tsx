import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import GrpPic from "./GrpPic.jpeg";

export default function VkshaTeam() {
  return (
    <section className="px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side → Image with hover zoom */}
          <div className="relative rounded-3xl h-96 w-full flex items-center justify-center overflow-hidden group shadow-[0_0_40px_15px_rgba(56,189,248,0.35)]">
  <img
    src={GrpPic}
    alt="Viksha Team"
    className="object-cover h-full w-full transform transition-transform duration-500 ease-in-out group-hover:scale-105"
  />
</div>


          {/* Right side → Text content */}
          <div>
            <h2 className="text-3xl text-white-500 lg:text-4xl font-bold mb-6">
              The Viksha Team
            </h2>
            <p className="text-white-300 text-lg leading-relaxed mb-8">
              Our passionate team of developers, designers, and innovators work
              together to create an environment where coding enthusiasts can
              thrive. We believe in learning through practice, collaboration,
              and real-world project development.
            </p>

            {/* Navigation button → goes to /team */}
            <Link href="/team">
              <Button
                className="bg-gradient-to-r from-sky-900 via-cyan-800 to-teal-900 hover:from-sky-800 hover:via-cyan-700 hover:to-teal-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-white shadow-md shadow-cyan-900/40">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
