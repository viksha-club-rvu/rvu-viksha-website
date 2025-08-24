import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Code } from "lucide-react";

export default function Team() {
  type Member = {
    name: string;
    role: string;
    img: string;
    details: string;
  };

  // Dummy data for 2022–2025
  const teamData: Record<string, Member[]> = {
    "2023": [
      { name: "Rama", role: "Chief Advisor", img: "https://media.wired.com/photos/59270140f3e2356fd800b27f/191:100/w_1280,c_limit/CAHP.jpg?mbid=social_retweet", details: "Directs the club in all aspects." },
      { name: "Shama", role: "President", img: "https://i.redd.it/a165wzt085zb1.jpg", details: "Leads the club in 2025." },
      { name: "Bama", role: "Vice President", img: "https://m.media-amazon.com/images/I/71JpPdKSEAL._UY1100_.jpg", details: "Coordinates operations." },
      { name: "Tina", role: "Technical Head", img: "https://cdn.mos.cms.futurecdn.net/Hu8Ht2LFZTdwdMvKnp9ZnA.jpg", details: "Heads the technical team." },
      { name: "Mama", role: "Head of Design", img: "https://comicbook.com/wp-content/uploads/sites/4/2025/05/hulk-mcu.jpg?w=1024", details: "Handles UI/UX design." },
      { name: "Gama", role: "Head of Event Management and social Media", img: "https://sm.mashable.com/mashable_sea/feature/t/the-thanos/the-thanos-snap-for-real-lets-remove-humans-from-half-of-ear_bq2q.jpg", details: "Handles offline activities and social media." },
    ],
    "2024": [
      { name: "Doraemon", role: "Chief Advisor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64geEJbm35BfvD3LhFEVocNi6VK_6eGT2_Q&s", details: "Directs the club in all aspects." },
      { name: "Shivashi", role: "President", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFk2rhSvKmAri2KHVVwatRv6cTIKP9BsVWYQ&s", details: "Leads the club in 2025." },
      { name: "Nobita", role: "Vice President", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-KvuTJ_RMfnFpLwId44NCDBrzkuAMl-C9Q&s", details: "Coordinates operations." },
      { name: "Shizuka", role: "Technical Head", img: "https://i.pinimg.com/474x/bc/0c/fc/bc0cfcaca278b49919e50069f1216acb.jpg", details: "Heads the technical team." },
      { name: "Gian", role: "Head of Design", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xPYeKxSiTPh3tgtwEmO9AWvxs9oXuSvrmA&s", details: "Handles UI/UX design." },
      { name: "Sunio", role: "Head of Event Management and social Media", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffEzh-ZlIHiOE4c5zwIXwGLyBt9xGrDJPXQ&s", details: "Handles offline activities and social media." },
    ],
    "2025": [
      { name: "Lohith", role: "Chief Advisor", img: "https://media.wired.com/photos/59270140f3e2356fd800b27f/191:100/w_1280,c_limit/CAHP.jpg?mbid=social_retweet", details: "Directs the club in all aspects." },
      { name: "Keshav", role: "President", img: "https://i.redd.it/a165wzt085zb1.jpg", details: "Leads the club in 2025." },
      { name: "Aditya", role: "Vice President", img: "https://m.media-amazon.com/images/I/71JpPdKSEAL._UY1100_.jpg", details: "Coordinates operations." },
      { name: "Aditi", role: "Technical Head", img: "https://cdn.mos.cms.futurecdn.net/Hu8Ht2LFZTdwdMvKnp9ZnA.jpg", details: "Heads the technical team." },
      { name: "Ashutosh", role: "Head of Design", img: "https://comicbook.com/wp-content/uploads/sites/4/2025/05/hulk-mcu.jpg?w=1024", details: "Handles UI/UX design." },
      { name: "Deepak", role: "Head of Event Management and social Media", img: "https://sm.mashable.com/mashable_sea/feature/t/the-thanos/the-thanos-snap-for-real-lets-remove-humans-from-half-of-ear_bq2q.jpg", details: "Handles offline activities and social media." },
    ],
  };
     
  const [location] = useLocation();
  const [year, setYear] = useState("2025");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  // Sync ?year= from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const yearParam = params.get("year");
    if (yearParam && teamData[yearParam]) {
      setYear(yearParam);
    }
  }, [location]);

  return (
    <Layout>
      <br/>
      <br/>
      <div className="text-white">
        {/* Header */}
        <section className="w-full py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
             <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white-500 bg-clip-text  mb-6">
              The Core Team
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-blue-100">
              Every club is powered by its people—these are ours
            </p>
          </div>

          {/* Year Buttons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-14">
            {Object.keys(teamData).map((yr) => (
              <button
                key={yr}
                onClick={() => {
                  setYear(yr);
                  setFlippedIndex(null);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold transition-all backdrop-blur-md shadow-md text-sm sm:text-base ${
                  year === yr
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-blue-900/40"
                    : "bg-white/10 text-blue-100 hover:bg-white/20"
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-8 lg:px-16">
            {teamData[year].map((member, index) => (
              <div
                key={index}
                className="relative w-full h-72 sm:h-80 cursor-pointer"
                onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
              >
                <div
                  className="relative w-full h-full transition-transform duration-500"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedIndex === index ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex flex-col justify-end p-3 sm:p-4 text-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-40 sm:h-48 object-cover rounded-lg mb-2 sm:mb-3 shadow-md"
                    />
                    <h3 className="text-lg sm:text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-blue-200">{member.role}</p>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-[#0a1324]/90 backdrop-blur-md border border-white/20 shadow-inner flex items-center justify-center p-4 sm:p-6 text-center"
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                  >
                    <p className="text-sm sm:text-base text-white">{member.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}