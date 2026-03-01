"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import SectionTag from "@/components/ui/SectionTag";
import PageTransition from "@/components/ui/PageTransition";

const faqs = [
    {
        q: "How do I find the right teacher for my child?",
        a: "You can browse our 'Teachers' page and filter by subject, rating, and experience. Each teacher has a detailed profile with reviews and a 'Book Demo' button to help you make an informed decision."
    },
    {
        q: "Are the teachers verified?",
        a: "Yes, every mentor at 360° Success Squad undergoes a rigorous 4-step verification process, including background checks, academic credential verification, and a live teaching demonstration."
    },
    {
        q: "Can I cancel or reschedule a session?",
        a: "Absolutely. You can reschedule any session up to 24 hours before the start time through your dashboard or by contacting the teacher directly."
    },
    {
        q: "What subjects do you cover?",
        a: "We cover a vast range of subjects from K-12 academics (Math, Science, Languages) to professional skills like Coding, Music, and Digital Arts."
    },
    {
        q: "Is there a free trial available?",
        a: "Most of our teachers offer a free 30-minute demo session. Look for the 'Book Free Demo' badge on teacher profiles."
    }
];

function FAQItem({ faq, isOpen, toggle }) {
    return (
        <div className="border-b border-zinc-100 last:border-0">
            <button
                onClick={toggle}
                className="w-full py-6 flex items-center justify-between text-left hover:text-secondary transition-colors"
            >
                <span className="text-xl font-bold text-primary">{faq.q}</span>
                <div className={`p-1 rounded-full ${isOpen ? "bg-secondary text-white" : "bg-zinc-50 text-zinc-400"} transition-colors`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-zinc-600 leading-relaxed text-lg">
                            {faq.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <PageTransition>
            <div className="pb-24">
                <section className="bg-zinc-50 pt-20 pb-32">
                    <div className="section-container text-center max-w-3xl">
                        <SectionTag>Support Center</SectionTag>
                        <h1 className="text-5xl md:text-6xl mb-8">Got Questions? <span className="text-secondary">We've Got Answers</span></h1>
                        <p className="text-lg text-zinc-600">
                            Everything you need to know about 360° Success Squad, our teachers, and how we help students succeed.
                        </p>
                    </div>
                </section>

                <section className="section-container -mt-16">
                    <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-zinc-200/50 border border-zinc-100">
                        {faqs.map((faq, i) => (
                            <FAQItem
                                key={i}
                                faq={faq}
                                isOpen={openIndex === i}
                                toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
