"use client";

import PageTransition from "@/components/ui/PageTransition";
import SectionTag from "@/components/ui/SectionTag";

export default function PrivacyPage() {
    return (
        <PageTransition>
            <div className="pb-24">
                <section className="bg-zinc-50 pt-20 pb-32">
                    <div className="section-container text-center max-w-3xl">
                        <SectionTag>Legal Hub</SectionTag>
                        <h1 className="text-5xl mb-8">Privacy Policy</h1>
                        <p className="text-zinc-500">Last Updated: March 1, 2026</p>
                    </div>
                </section>

                <section className="section-container -mt-16">
                    <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-12 shadow-2xl shadow-zinc-200/50 border border-zinc-100 prose prose-zinc lg:prose-xl">
                        <h2 className="text-3xl font-bold mb-6">1. Information We Collect</h2>
                        <p className="text-zinc-600 mb-8">
                            We collect information that you provide directly to us when you create an account, browse teacher profiles, or contact us. This includes your name, email address, and any messages sent through our platform.
                        </p>

                        <h2 className="text-3xl font-bold mb-6">2. How We Use Your Data</h2>
                        <p className="text-zinc-600 mb-8">
                            Your data is used to facilitate the connection between students and teachers, improve our platform features, and ensure the security of our community. We do not sell your personal data to third parties.
                        </p>

                        <h2 className="text-3xl font-bold mb-6">3. Data Security</h2>
                        <p className="text-zinc-600 mb-8">
                            We implement industry-standard security measures to protect your information. All communications between your browser and our servers are encrypted via SSL.
                        </p>

                        <h2 className="text-3xl font-bold mb-6">4. Your Rights</h2>
                        <p className="text-zinc-600">
                            You have the right to access, update, or delete your personal information at any time by contacting our support team at privacy@successsquad.com.
                        </p>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
