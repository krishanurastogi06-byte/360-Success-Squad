"use client";

import PageTransition from "@/components/ui/PageTransition";
import SectionTag from "@/components/ui/SectionTag";

export default function TermsPage() {
    return (
        <PageTransition>
            <div className="pb-24">
                <section className="bg-zinc-50 pt-20 pb-32">
                    <div className="section-container text-center max-w-3xl">
                        <SectionTag>Legal Hub</SectionTag>
                        <h1 className="text-5xl mb-8">Terms & Conditions</h1>
                        <p className="text-zinc-500">Last Updated: March 1, 2026</p>
                    </div>
                </section>

                <section className="section-container -mt-16">
                    <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-12 shadow-2xl shadow-zinc-200/50 border border-zinc-100 prose prose-zinc lg:prose-xl">
                        <h2 className="text-3xl font-bold mb-6">1. Agreement to Terms</h2>
                        <p className="text-zinc-600 mb-8">
                            By accessing 360° Success Squad, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the platform.
                        </p>

                        <h2 className="text-3xl font-bold mb-6">2. User Responsibilities</h2>
                        <p className="text-zinc-600 mb-8">
                            Users must provide accurate information when creating profiles. Any misuse of the platform, including harassment of teachers or students, will result in immediate termination of the account.
                        </p>

                        <h2 className="text-3xl font-bold mb-6">3. Payments & Refunds</h2>
                        <p className="text-zinc-600 mb-8">
                            Payments are handled directly between teachers and students unless specified otherwise. We are not responsible for financial disputes between parties, though we provide mediation support.
                        </p>

                        <h2 className="text-3xl font-bold mb-6">4. Limitation of Liability</h2>
                        <p className="text-zinc-600">
                            360° Success Squad acts as a bridge between educators and learners. We are not liable for any outcomes arising from the teaching sessions.
                        </p>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
