"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, GraduationCap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

export default function TeacherCard({ teacher, noAnimate = false }) {
    return (
        <Card noAnimate={noAnimate} className="p-0 overflow-hidden group">
            <div className="relative h-64 w-full bg-zinc-100">
                <Image
                    src={teacher.image || "/next.svg"} // Placeholder or teacher image
                    alt={teacher.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="text-secondary fill-secondary" size={14} />
                    <span className="text-sm font-bold text-primary">{teacher.rating}</span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center gap-2 text-secondary mb-2">
                    <GraduationCap size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">{teacher.experience} Experience</span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors line-clamp-1">
                    {teacher.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                    {teacher.subjects?.slice(0, 3).map((sub) => (
                        <span key={sub} className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-xs font-medium">
                            {sub}
                        </span>
                    ))}
                </div>

                <Link
                    href={`/teachers/${teacher.id}`}
                    className="flex items-center justify-between w-full p-4 border border-zinc-100 rounded-2xl group/link hover:bg-primary hover:text-white transition-all duration-300"
                >
                    <span className="font-bold">View Profile</span>
                    <ArrowUpRight className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
            </div>
        </Card>
    );
}
