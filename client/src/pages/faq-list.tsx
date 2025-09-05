import Layout from "@/components/Layout";
import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import faqs from "@/data/faqs";

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Layout>
      <div className="animate-in fade-in duration-1000">
        <section className="px-4 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto text-center mb-8">
            <h1 className="font-orbitron text-3xl lg:text-5xl font-extrabold text-white">Frequently Asked Questions</h1>
          </div>

          <div className="max-w-7xl mx-auto space-y-4">
            {faqs.map((f, idx) => (
              <div key={idx} className="relative group rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-[#0f172a]/80 to-[#1e293b]/70 border border-white/10 hover:scale-105 transition-all duration-400 shadow-lg">
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl blur-3xl bg-gradient-to-r from-purple-500/30 via-blue-500/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <Collapsible open={openIndex === idx} onOpenChange={(isOpen) => setOpenIndex(isOpen ? idx : null)}>
                  <div className="p-6 flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{f.question}</h3>
                    </div>

                    <div className="ml-4 flex items-start">
                      <CollapsibleTrigger asChild>
                        <button className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 transition">
                          <ChevronDown className={`h-4 w-4 transition-transform ${openIndex === idx ? "rotate-180" : ""}`} />
                        </button>
                      </CollapsibleTrigger>
                    </div>
                  </div>

                  <CollapsibleContent>
                    <div className="px-6 pb-6 pt-0 text-gray-300">
                      {f.answer}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
