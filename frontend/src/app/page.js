"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, CheckCircle2, Search, BookOpen } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import TeacherCard from "@/components/teachers/TeacherCard";
import PageTransition from "@/components/ui/PageTransition";

import { teachersData } from "@/data/data";

const featuredTeachers = Object.values(teachersData).slice(0, 3).map(t => ({
  ...t,
  experience: t.experience
}));

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col gap-24 pb-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative pt-10 lg:pt-20">
          <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionTag>Unlock Your Potential</SectionTag>
              <h1 className="text-5xl lg:text-7xl mb-8 leading-[1.1]">
                Elevate Your Learning with <span className="text-secondary">Expert Mentors</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-10 max-w-lg leading-relaxed">
                Connect with top-tier educators worldwide. Personalized one-on-one sessions tailored to your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/teachers" className="btn-primary gap-2">
                  Find a Teacher <ArrowRight size={20} />
                </Link>
                <Link href="/subjects" className="btn-secondary gap-2">
                  Browse Subjects <BookOpen size={20} />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-12 mt-16 pt-12 border-t border-zinc-200">
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mt-1">Verified Tutors</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">10k+</p>
                  <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mt-1">Active Students</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">4.9/5</p>
                  <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest mt-1">Avgerage Rating</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                {/* Background Shapes */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="relative h-full w-full rounded-3xl overflow-hidden border-8 border-white shadow-2xl z-10">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                    alt="Learning together"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Float Cards */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-10 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    <Star fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Top Verified</p>
                    <p className="text-xs text-zinc-500">Expert Teachers Only</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -right-10 glass p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Users fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Live 1:1</p>
                    <p className="text-xs text-zinc-500">Interactive Sessions</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Teachers Section */}
        <section className="bg-zinc-50 py-24">
          <div className="section-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <SectionTag>Our Elite Educators</SectionTag>
                <h2 className="text-4xl md:text-5xl">Learn from the <span className="text-secondary">Very Best</span></h2>
              </div>
              <Link href="/teachers" className="btn-secondary">
                Meet All Teachers
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTeachers.map((teacher, i) => (
                <motion.div
                  key={teacher.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <TeacherCard teacher={teacher} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="h-64 relative rounded-3xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=400" alt="Student" fill className="object-cover" /></div>
                  <div className="h-48 relative rounded-3xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=400" alt="College" fill className="object-cover" /></div>
                </div>
                <div className="space-y-4">
                  <div className="h-48 relative rounded-3xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400" alt="Teacher" fill className="object-cover" /></div>
                  <div className="h-64 relative rounded-3xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400" alt="Online Study" fill className="object-cover" /></div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionTag>Why Choose Us</SectionTag>
              <h2 className="text-4xl md:text-5xl mb-12 leading-tight">Expertise You Can <span className="text-secondary">Trust</span></h2>

              <div className="space-y-8">
                {[
                  { title: "Personalized Roadmap", desc: "Every student gets a custom learning path based on their goals." },
                  { title: "24/7 Support", desc: "Our squad is always here to help you through difficult concepts." },
                  { title: "Top-Tier Teachers", desc: "We only hire 1% of applicants who pass our rigorous verification." }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center text-secondary shrink-0">
                      <CheckCircle2 size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href="/about" className="btn-primary mt-12">
                Learn More About Us.
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
