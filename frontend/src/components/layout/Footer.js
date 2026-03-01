import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block bg-white p-2 rounded-lg">
                            <Image src="/logo.svg" alt="360° Success Squad" width={150} height={40} className="object-contain" />
                        </Link>
                        <p className="text-zinc-400 leading-relaxed">
                            Empowering students through personalized education and expert mentorship.
                            Join our community of learners today.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Our Teachers", href: "/teachers" },
                                { name: "Available Subjects", href: "/subjects" },
                                { name: "Contact Us", href: "/contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-zinc-400 hover:text-accent transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Support</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li><Link href="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
                            <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/careers" className="hover:text-accent transition-colors">Become a Teacher</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-zinc-400">
                                <MapPin className="text-secondary shrink-0" size={20} />
                                <span>123 Knowledge Park, EdTech City, 56789</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400">
                                <Phone className="text-secondary shrink-0" size={20} />
                                <span>+91 12345 67890</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-400">
                                <Mail className="text-secondary shrink-0" size={20} />
                                <span>contact@successsquad.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-zinc-500 text-sm">
                    <p>© {new Date().getFullYear()} 360° Success Squad. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
