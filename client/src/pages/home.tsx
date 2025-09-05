import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import VkshaTeam from "@/components/VkshaTeam";
import Timeline from "@/components/Timeline";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Rocket, Users } from "lucide-react";

// Import animation JSON
import animationData from "@/RobotSaludando.json";

export default function Home() {
  return (
    <Layout>
      <div className="animate-in fade-in duration-1000">
        <Hero />

       {/* Viksha Story Section */}
<section className="px-4 lg:px-8 pt-0 pb-16">   {/* reduced top padding */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left side - Text (shifted slightly right) */}
    <div className="pl-10 md:pl-20">   {/* bumped right a little more */}
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
        The Viksha Story
      </h2>
      <p className="text-gray-300 text-lg mb-6 text-justify">
        Viksha Coding Club is more than just a community – it’s a hub of innovation, 
        collaboration, and creativity. From groundbreaking projects to engaging 
        events, we empower students to learn, build, and grow together.
      </p>

      <Link href="/about">
        <Button className="bg-gradient-to-r from-[rgb(70,197,212)] to-[rgb(0,150,180)] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform">
          Know More
        </Button>
      </Link>
    </div>

    {/* Right side - Lottie Animation */}
    <div className="flex justify-center">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        className="w-full max-w-md rounded-2xl " 
      />
    </div>
  </div>
</section>


        <Timeline />
        <br />
        <br />
        <VkshaTeam />

        

      </div>
    </Layout>
  );
}