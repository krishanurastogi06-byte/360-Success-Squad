"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Star, GraduationCap, MapPin, Mail, Phone, WhatsApp,
    MessageSquare, Calendar, ShieldCheck, ChevronRight,
    User, Award, BookOpen, Quote
} from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import Card from "@/components/ui/Card";

// Mock data mapping
const teachersData = {
    "1": {
        id: 1,
        name: "Dr. Sarah Johnson",
        subjects: ["Mathematics", "Advanced Physics", "Statistics"],
        rating: 4.9,
        reviewsCount: 124,
        experience: "10+ Years",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
        about: "I am a dedicated educator with over a decade of experience in teaching complex mathematical and physical concepts. My approach focuses on conceptual clarity and real-world application, helping students excel in both school exams and competitive entrance tests.",
        qualifications: ["PhD in Applied Mathematics", "MSc in Physics"],
        availability: "Mon/Wed/Fri (4 PM - 8 PM)",
        price: "$45/hr"
    }
};

export default function TeacherProfilePage({ params }) {
    const { id } = use(params);
    const teacher = teachersData[id] || teachersData["1"]; // Default to first for demo

    return (
        <div className="pb-24 bg-zinc-50/50">
            {/* Profile Header */}
            <section className="bg-white border-b border-zinc-100 pt-10 pb-20">
                <div className="section-container">
                    <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <Image src={teacher.image} alt={teacher.name} fill className="object-cover" />
                        </motion.div>

                        {/* Main Info */}
                        <div className="flex-grow text-center lg:text-left">
                            <SectionTag className="mb-4">Verified Professional</SectionTag>
                            <h1 className="text-5xl mb-4">{teacher.name}</h1>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-zinc-500 mb-8">
                                <span className="flex items-center gap-1.5 font-bold text-secondary">
                                    <Star size={20} className="fill-secondary" /> {teacher.rating} ({teacher.reviewsCount} Reviews)
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <GraduationCap size={20} /> {teacher.experience}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin size={20} /> Remote / Online
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                                <button className="btn-primary px-10 gap-2">
                                    <Calendar size={20} /> Book a Free Demo
                                </button>
                                <Link href="/contact" className="btn-secondary px-8 border-none shadow-none bg-zinc-100 text-primary hover:bg-zinc-200">
                                    Message Teacher
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-container pt-16">
                <div className="grid lg:grid-cols-3 gap-12 items-start">

                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* About */}
                        <div className="space-y-6">
                            <h2 className="text-3xl flex items-center gap-3">
                                <User className="text-secondary" /> About Me
                            </h2>
                            <p className="text-lg text-zinc-600 leading-relaxed italic">
                                <Quote size={24} className="inline-block text-zinc-300 mr-2 -mt-2" />
                                {teacher.about}
                            </p>
                        </div>

                        {/* Subjects */}
                        <div className="space-y-6">
                            <h2 className="text-3xl flex items-center gap-3">
                                <BookOpen className="text-secondary" /> Subjects Taught
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {teacher.subjects.map(s => (
                                    <span key={s} className="px-6 py-3 bg-white rounded-2xl border border-zinc-100 shadow-sm text-primary font-bold">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Qualifications */}
                        <div className="space-y-6">
                            <h2 className="text-3xl flex items-center gap-3">
                                <Award className="text-secondary" /> Qualifications
                            </h2>
                            <ul className="space-y-4">
                                {teacher.qualifications.map(q => (
                                    <li key={q} className="flex items-center gap-3 text-zinc-700">
                                        <ShieldCheck className="text-green-500" /> {q}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Cards */}
                    <aside className="space-y-8">
                        {/* Quick Actions Card */}
                        <Card className="p-8 sticky top-24">
                            <h3 className="text-2xl mb-6">Course Insights</h3>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center py-4 border-b border-zinc-50">
                                    <span className="text-zinc-500">Hourly Rate</span>
                                    <span className="text-2xl font-bold text-secondary">{teacher.price}</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-zinc-50">
                                    <span className="text-zinc-500">Response Time</span>
                                    <span className="font-bold">Under 2 hours</span>
                                </div>
                                <div className="flex justify-between items-center py-4">
                                    <span className="text-zinc-500">Availability</span>
                                    <span className="font-bold text-right text-sm">{teacher.availability}</span>
                                </div>
                            </div>

                            <div className="mt-8 space-y-4">
                                <Link href="#" className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-[#25D366]/10 text-[#25D366] font-bold hover:bg-[#25D366] hover:text-white transition-colors">
                                    <Phone size={20} /> WhatsApp Mentor
                                </Link>
                                <Link href={`mailto:contact@successsquad.com?subject=Inquiry for ${teacher.name}`} className="flex items-center justify-center gap-2 w-full p-4 rounded-2xl bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-colors">
                                    <Mail size={20} /> Send an Email
                                </Link>
                            </div>
                        </Card>
                    </aside>
                </div>
            </section>
        </div>
    );
}
