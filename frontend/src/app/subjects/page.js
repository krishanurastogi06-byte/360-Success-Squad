"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Calculator, Atom, Code, Globe,
    Languages, Microscope, Music
} from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import Card from "@/components/ui/Card";
import PageTransition from "@/components/ui/PageTransition";

const subjects = [
    { name: "Mathematics", icon: Calculator, color: "bg-blue-500", desc: "Algebra, Calculus, Geometry" },
    { name: "Physics", icon: Atom, color: "bg-purple-500", desc: "Mechanics, Quantum, Thermodynamics" },
    { name: "Computer Science", icon: Code, color: "bg-green-500", desc: "Coding, AI, Data Science" },
    { name: "History", icon: Globe, color: "bg-amber-500", desc: "Modern, Ancient, World War" },
    { name: "English", icon: Languages, color: "bg-pink-500", desc: "Grammar, Literature, Writing" }, // Renamed from Languages to match Teachers
    { name: "Chemistry", icon: Microscope, color: "bg-emerald-500", desc: "Organic, Inorganic, Analytics" },
    { name: "Music", icon: Music, color: "bg-rose-500", desc: "Theory, Piano, Guitar" },
];

export default function SubjectsPage() {
    return (
        <PageTransition>
            <div className="pb-24">
                <section className="bg-primary text-white py-24 text-center">
                    <div className="section-container max-w-3xl">
                        <SectionTag className="bg-white/10 border-white/20 text-accent">Knowledge Hub</SectionTag>
                        <h1 className="text-5xl text-white mb-6">Explore Our <span className="text-accent">Subjects</span></h1>
                        <p className="text-zinc-400 text-lg">
                            Choose from a wide range of academic and creative fields. Our experts cover everything from fundamental school subjects to advanced professional skills.
                        </p>
                    </div>
                </section>

                <section className="section-container -mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {subjects.map((sub, i) => (
                            <Link
                                href={`/teachers?subject=${sub.name}`}
                                key={sub.name}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ y: -10 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="h-full"
                                >
                                    <Card className="h-full flex flex-col items-center text-center p-8 group hover:border-secondary/20 transition-all">
                                        <div className={`w-16 h-16 ${sub.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-12 transition-transform`}>
                                            <sub.icon size={32} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{sub.name}</h3>
                                        <p className="text-zinc-500 text-sm mb-6 flex-grow">{sub.desc}</p>
                                        <div className="w-full pt-6 border-t border-zinc-100 flex justify-center gap-4 text-zinc-400 text-xs font-bold uppercase tracking-widest group-hover:text-secondary transition-colors">
                                            Find Teachers
                                        </div>
                                    </Card>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
