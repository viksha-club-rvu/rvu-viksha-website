import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import VkshaTeam from "@/components/VkshaTeam";
import Timeline from "@/components/Timeline";
export default function Home() {
  return (
    <Layout>
      <div className="animate-in fade-in duration-1000">
        <Hero />
         <Timeline />
         <br/>
         <br/>
        <VkshaTeam />
      </div>
    </Layout>
  );
}
