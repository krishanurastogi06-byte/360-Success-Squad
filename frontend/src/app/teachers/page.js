"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Star, Clock, BookOpen, X } from "lucide-react";
import TeacherCard from "@/components/teachers/TeacherCard";
import SectionTag from "@/components/ui/SectionTag";
import PageTransition from "@/components/ui/PageTransition";
import { cn } from "@/lib/utils";

import { teachersData } from "@/data/data";

const allTeachers = Object.values(teachersData).map(t => ({
    ...t,
    experienceLabel: t.experience,
    experience: parseInt(t.experience) || 0
}));

const allSubjects = Array.from(new Set(allTeachers.flatMap(t => t.subjects))).sort();

function TeachersContent() {
    const searchParams = useSearchParams();
    const [searchTerm, setSearchTerm] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState("All");
    const [sortBy, setSortBy] = useState("Default"); // Default, Rating, Experience

    useEffect(() => {
        const subject = searchParams.get("subject");
        if (subject && allSubjects.includes(subject)) {
            setSelectedSubject(subject);
            setShowFilters(true); // Open filters to show the active choice
        }
    }, [searchParams]);

    const filteredTeachers = useMemo(() => {
        let result = allTeachers.filter(t =>
            t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            t.subjects.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
        );

        if (selectedSubject !== "All") {
            result = result.filter(t => t.subjects.includes(selectedSubject));
        }

        if (sortBy === "Rating") {
            result = [...result].sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "Experience") {
            result = [...result].sort((a, b) => b.experience - a.experience);
        }

        return result;
    }, [searchTerm, selectedSubject, sortBy]);

    return (
        <PageTransition>
            <div className="pb-24">
                {/* Header & Search */}
                <section className="bg-zinc-50 pt-20 pb-32">
                    <div className="section-container flex flex-col items-center">
                        <SectionTag>Expert Directory</SectionTag>
                        <h1 className="text-5xl mb-12 text-center">Find Your Perfect <span className="text-secondary">Mentor</span></h1>

                        <div className="w-full max-w-2xl relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-secondary mb-2 transition-colors" size={24} />
                            <input
                                type="text"
                                placeholder="Search by name or subject (e.g. Physics)..."
                                className="w-full pl-16 pr-6 py-6 bg-white rounded-3xl shadow-xl shadow-zinc-200/50 border-none focus:ring-2 focus:ring-secondary/20 transition-all text-lg"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </section>

                <section className="section-container -mt-12">
                    <div className="flex flex-col gap-6 mb-12">
                        <div className="flex items-center justify-between">
                            <p className="text-zinc-500 font-medium">Showing {filteredTeachers.length} educators</p>
                            <div className="flex items-center gap-3">
                                {(selectedSubject !== "All" || sortBy !== "Default" || searchTerm !== "") && (
                                    <button
                                        onClick={() => {
                                            setSearchTerm("");
                                            setSelectedSubject("All");
                                            setSortBy("Default");
                                        }}
                                        className="flex items-center gap-2 text-sm font-bold text-secondary bg-secondary/10 px-6 py-3 rounded-2xl hover:bg-secondary hover:text-white transition-all shadow-sm shadow-secondary/5"
                                    >
                                        <X size={16} /> Reset Filters
                                    </button>
                                )}
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className={cn(
                                        "flex items-center gap-2 font-bold px-6 py-3 rounded-2xl transition-all border",
                                        showFilters ? "bg-primary text-white border-primary" : "bg-white text-primary border-zinc-100 shadow-sm hover:border-secondary/20"
                                    )}
                                >
                                    <SlidersHorizontal size={20} />
                                    {showFilters ? "Hide Filters" : "Filters"}
                                </button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {showFilters && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-white px-8 pb-8 rounded-[32px] shadow-xl border border-zinc-100 overflow-hidden"
                                >
                                    <div className="grid md:grid-cols-2 gap-10">
                                        {/* Subject Filter */}
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-primary font-bold">
                                                <BookOpen size={18} className="text-secondary" />
                                                Filter by Subject
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                <button
                                                    onClick={() => setSelectedSubject("All")}
                                                    className={cn(
                                                        "px-4 py-2 rounded-xl text-sm font-medium transition-all border",
                                                        selectedSubject === "All" ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20" : "bg-zinc-50 text-zinc-600 border-zinc-50 hover:bg-zinc-100"
                                                    )}
                                                >
                                                    All Subjects
                                                </button>
                                                {allSubjects.map(sub => (
                                                    <button
                                                        key={sub}
                                                        onClick={() => setSelectedSubject(sub)}
                                                        className={cn(
                                                            "px-4 py-2 rounded-xl text-sm font-medium transition-all border",
                                                            selectedSubject === sub ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20" : "bg-zinc-50 text-zinc-600 border-zinc-50 hover:bg-zinc-100"
                                                        )}
                                                    >
                                                        {sub}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Sort Options */}
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-primary font-bold">
                                                <Star size={18} className="text-secondary" />
                                                Sort Educators
                                            </div>
                                            <div className="grid grid-cols-3 gap-3">
                                                {[
                                                    { id: "Default", icon: Clock, label: "Default" },
                                                    { id: "Rating", icon: Star, label: "Top Rated" },
                                                    { id: "Experience", icon: Clock, label: "Experience" }
                                                ].map(option => (
                                                    <button
                                                        key={option.id}
                                                        onClick={() => setSortBy(option.id)}
                                                        className={cn(
                                                            "flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all",
                                                            sortBy === option.id ? "bg-amber-50 border-secondary text-secondary" : "bg-white border-zinc-100 text-zinc-500 hover:border-zinc-200"
                                                        )}
                                                    >
                                                        <option.icon size={20} />
                                                        <span className="text-xs font-bold uppercase tracking-wider">{option.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {(selectedSubject !== "All" || sortBy !== "Default") && (
                                        <div className="mt-8 pt-6 border-t border-zinc-100 flex justify-end">
                                            <button
                                                onClick={() => {
                                                    setSelectedSubject("All");
                                                    setSortBy("Default");
                                                }}
                                                className="text-sm font-bold text-zinc-400 hover:text-secondary flex items-center gap-1 transition-colors"
                                            >
                                                <X size={14} /> Reset all filters
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                        <AnimatePresence>
                            {filteredTeachers.map((teacher) => (
                                <motion.div
                                    key={teacher.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <TeacherCard
                                        noAnimate
                                        teacher={{
                                            ...teacher,
                                            experience: teacher.experienceLabel
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {filteredTeachers.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-20 bg-white rounded-3xl border border-dashed border-zinc-200"
                            >
                                <h3 className="text-2xl font-bold mb-2 text-primary">No teachers found</h3>
                                <p className="text-zinc-500">Try changing your filters or searching with different keywords.</p>
                                <button
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedSubject("All");
                                        setSortBy("Default");
                                    }}
                                    className="mt-6 text-secondary font-bold hover:underline"
                                >
                                    Clear all search and filters
                                </button>
                            </motion.div>
                        )}
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}

export default function TeachersPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div>
            </div>
        }>
            <TeachersContent />
        </Suspense>
    );
}

