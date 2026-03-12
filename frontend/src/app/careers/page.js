"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe, Zap, CheckCircle, ArrowRight } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import PageTransition from "@/components/ui/PageTransition";
import Card from "@/components/ui/Card";

export default function CareersPage() {
    return (
        <PageTransition>
            <div className="pb-24">
                {/* Hero */}
                <section className="bg-primary text-white pt-24 pb-48">
                    <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionTag className="bg-white/10 border-white/20 text-accent">Join the Squad</SectionTag>
                            <h1 className="text-5xl lg:text-7xl text-white mb-8 leading-tight">Inspire the Next <span className="text-accent">Generation</span></h1>
                            <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                                Join India's most elite educators. Teach what you love, on your own schedule, and earn what you deserve.
                            </p>
                            <button
                                onClick={() => document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' })}
                                className="btn-secondary px-10 gap-2"
                            >
                                Apply Now <ArrowRight size={20} />
                            </button>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full" />
                            <Card className="bg-white/5 border-white/10 backdrop-blur-xl p-8 relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-6">Why Teach With Us?</h3>
                                <div className="space-y-6">
                                    {[
                                        { icon: Zap, title: "Instant Payouts", desc: "Get paid immediately after every session." },
                                        { icon: Globe, title: "Global Reach", desc: "Teach students from over 20+ countries." },
                                        { icon: Briefcase, title: "Flextime", desc: "You control your availability and rates." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary shrink-0">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white">{item.title}</h4>
                                                <p className="text-zinc-500 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="section-container -mt-24 mb-24">
                    <div className="bg-white rounded-[40px] p-12 shadow-2xl border border-zinc-100">
                        <h2 className="text-4xl text-center mb-16">The 4-Step <span className="text-secondary">Application Process</span></h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Submit Application", desc: "Tell us about your expertise and experience." },
                                { step: "02", title: "Document Review", desc: "We verify your credentials and background." },
                                { step: "03", title: "Teaching Demo", desc: "Show off your teaching skills in a live session." },
                                { step: "04", title: "Onboarding", desc: "Set up your profile and start getting students." }
                            ].map((item, i) => (
                                <div key={i} className="relative group text-center lg:text-left">
                                    <span className="text-8xl font-black text-zinc-50 absolute -top-10 -left-4 group-hover:text-secondary/10 transition-colors">{item.step}</span>
                                    <div className="relative z-10 pt-8">
                                        <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                                        <p className="text-zinc-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Application Form */}
                <section id="apply-form" className="section-container py-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <SectionTag>Application Form</SectionTag>
                            <h2 className="text-4xl md:text-5xl mt-4">Ready to <span className="text-secondary">Join Us?</span></h2>
                            <p className="text-zinc-500 mt-4 text-lg">Fill out the details below and our talent acquisition team will reach out to you within 48 hours.</p>
                        </div>

                        <Card className="p-8 md:p-12 shadow-2xl">
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                {/* Personal Information */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-100 pb-4">
                                        <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm">1</span>
                                        Personal Information
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                                            <input type="text" placeholder="Dr. John Smith" className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/20 transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Email Address</label>
                                            <input type="email" placeholder="john@university.edu" className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/20 transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Phone Number</label>
                                            <input type="tel" placeholder="+91 00000 00000" className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/20 transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Current Occupation</label>
                                            <input type="text" placeholder="Full-time Professor" className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/20 transition-all" />
                                        </div>
                                    </div>
                                </div>

                                {/* Expertise */}
                                <div className="space-y-6 pt-6">
                                    <h3 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-100 pb-4">
                                        <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm">2</span>
                                        Teaching Expertise
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Primary Subject</label>
                                            <select className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/20 transition-all appearance-none">
                                                <option>Select Subject</option>
                                                <option>Mathematics</option>
                                                <option>Physics</option>
                                                <option>Chemistry</option>
                                                <option>Computer Science</option>
                                                <option>Biology</option>
                                                <option>Others</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Years of Experience</label>
                                            <select className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/20 transition-all appearance-none">
                                                <option>Less than 1 Year</option>
                                                <option>1-3 Years</option>
                                                <option>3-5 Years</option>
                                                <option>5-10 Years</option>
                                                <option>10+ Years</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary ml-1">Cloud Folder Link (Certificates, Experience & Proofs)</label>
                                        <input type="url" placeholder="https://drive.google.com/drive/folders/..." className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/20 transition-all" />
                                        <p className="text-xs text-zinc-400 ml-1">Please upload your degrees, certificates, and work experience proofs into a single Drive/Dropbox folder and paste the link here. Ensure it is accessible to our team.</p>
                                    </div>
                                </div>

                                {/* Additional */}
                                <div className="space-y-6 pt-6">
                                    <h3 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-100 pb-4">
                                        <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-sm">3</span>
                                        Final Details
                                    </h3>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary ml-1">Why do you want to join 360° Success Squad?</label>
                                        <textarea rows={4} placeholder="Your teaching philosophy and motivation..." className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none" />
                                    </div>
                                    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3 text-amber-800 text-sm">
                                        <CheckCircle className="shrink-0 mt-0.5" size={18} />
                                        <p>By submitting this form, you agree to our recruitment terms and consent to a background check if shortlisted.</p>
                                    </div>
                                </div>

                                <button className="btn-primary w-full py-5 text-xl gap-2 mt-4 shadow-secondary/10">
                                    Submit Application <CheckCircle size={24} />
                                </button>
                            </form>
                        </Card>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
