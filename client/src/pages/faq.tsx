import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from "react";
import faqs from "@/data/faqs";
import { useEffect } from "react";


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <Layout>
            <div className="animate-in fade-in duration-1000">
                <section className="px-4 lg:px-8 py-24">
                    <div className="max-w-7xl mx-auto">
                        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 mb-8 group">
                            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" size={20} />
                            Back to Home
                        </Link>

                        <div className="text-center mb-12">
                            <h1 className="font-orbitron text-4xl lg:text-6xl font-extrabold mb-6 text-white">
                                Frequently Asked Questions
                            </h1>
                        </div>

                        <div className="max-w-7xl mx-auto space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="relative group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
                                    <span className="pointer-events-none absolute inset-0 -z-10 rounded-2xl blur-3xl bg-gradient-to-r from-purple-500/30 via-blue-500/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <Collapsible open={openIndex === idx} onOpenChange={(isOpen) => setOpenIndex(isOpen ? idx : null)}>
                                        <div className="p-6 flex items-start justify-between">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                                            </div>

                                            <div className="ml-4">
                                                <CollapsibleTrigger asChild>
                                                    <button className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-gray-300 hover:bg-white/10 transition">
                                                        <ChevronDown className={`h-4 w-4 transition-transform ${openIndex === idx ? "rotate-180" : ""}`} />
                                                    </button>
                                                </CollapsibleTrigger>
                                            </div>
                                        </div>

                                        <CollapsibleContent>
                                            <div className="px-6 pb-6 pt-0 text-gray-300">
                                                {faq.answer}
                                            </div>
                                        </CollapsibleContent>
                                    </Collapsible>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
