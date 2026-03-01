"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTag from "@/components/ui/SectionTag";
import { Target, Heart, Award, ShieldCheck } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";

export default function AboutPage() {
    return (
        <PageTransition>
            <div className="pb-24">
                {/* Header */}
                <section className="bg-zinc-50 pt-20 pb-32">
                    <div className="section-container text-center max-w-3xl">
                        <SectionTag>Our Story</SectionTag>
                        <h1 className="text-5xl md:text-6xl mb-8 leading-tight">We're on a Mission to <span className="text-secondary">Transform Learning</span></h1>
                        <p className="text-lg text-zinc-600">
                            Founded with the vision of making premium education accessible to everyone, 360° Success Squad brings together the best minds in teaching to help students reach their full potential.
                        </p>
                    </div>
                </section>

                {/* Identity */}
                <section className="section-container -mt-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
                                alt="Our workspace"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <div className="space-y-8">
                            <h2 className="text-4xl">What Defines Us</h2>
                            <p className="text-zinc-600 text-lg">
                                At 360° Success Squad, we don't just teach subjects; we build confidence. Our holistic approach ensures that every student receives not just academic guidance, but also the mentorship needed to navigate their future careers.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Target, title: "Focused Growth", desc: "Results-driven strategies for every student." },
                                    { icon: Heart, title: "Passion First", desc: "Teachers who love what they do." },
                                    { icon: Award, title: "Elite Quality", desc: "Rigorous standards for all our tutors." },
                                    { icon: ShieldCheck, title: "Trusted Platform", desc: "Safe and secure learning environment." },
                                ].map((item, i) => (
                                    <div key={item.title} className="p-6 bg-white rounded-2xl border border-zinc-100 shadow-sm transition-hover hover:border-secondary/20">
                                        <item.icon className="text-secondary mb-4" size={32} />
                                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                        <p className="text-zinc-500 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
