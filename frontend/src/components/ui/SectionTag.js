import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionTag({ children, className }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-soft border border-accent/20 text-secondary text-sm font-bold uppercase tracking-wider mb-6",
                className
            )}
        >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            {children}
        </motion.div>
    );
}
