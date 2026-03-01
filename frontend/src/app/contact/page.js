"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import Card from "@/components/ui/Card";

export default function ContactPage() {
    return (
        <div className="pb-24">
            {/* Header */}
            <section className="bg-primary text-white pt-20 pb-32">
                <div className="section-container text-center max-w-3xl">
                    <SectionTag className="bg-white/10 border-white/20 text-accent">Connect With Us</SectionTag>
                    <h1 className="text-5xl text-white mb-6">Let's Start Your <span className="text-accent">Success Journey</span></h1>
                    <p className="text-zinc-400 text-lg">
                        Have questions? Want to book a bulk package? Our team is available 24/7 to assist you and your student.
                    </p>
                </div>
            </section>

            <section className="section-container -mt-16">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Contact Methods */}
                    <div className="space-y-8">
                        {[
                            { icon: Mail, title: "Email Us", val: "contact@successsquad.com", link: "mailto:contact@successsquad.com", color: "text-blue-500" },
                            { icon: MessageCircle, title: "WhatsApp", val: "+91 12345 67890", link: "https://wa.me/911234567890", color: "text-green-500" },
                            { icon: Phone, title: "Call Hub", val: "+91 09876 54321", link: "tel:+910987654321", color: "text-secondary" },
                        ].map((item, i) => (
                            <motion.a
                                key={item.title}
                                href={item.link}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="block"
                            >
                                <Card className="flex items-center gap-6 p-8 hover:border-secondary/20 hover:scale-105 transition-all">
                                    <div className={`w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center ${item.color}`}>
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">{item.title}</p>
                                        <p className="text-lg font-bold text-primary">{item.val}</p>
                                    </div>
                                </Card>
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="p-10 shadow-2xl">
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/20 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/20 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary ml-1">Subject</label>
                                    <select className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/20 transition-all appearance-none">
                                        <option>General Inquiry</option>
                                        <option>Teacher Recruitment</option>
                                        <option>Technical Support</option>
                                        <option>Bulk/School Enrollment</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary ml-1">Your Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="How can we help you?"
                                        className="w-full p-4 bg-zinc-50 rounded-2xl border-none focus:ring-2 focus:ring-secondary/20 transition-all resize-none"
                                    />
                                </div>

                                <button className="btn-primary w-full py-5 text-lg gap-2 mt-4 shadow-secondary/10">
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
