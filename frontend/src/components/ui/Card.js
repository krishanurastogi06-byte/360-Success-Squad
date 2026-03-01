import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SharedCard({ children, className, noAnimate = false, ...props }) {
    return (
        <motion.div
            layout={props.layout}
            initial={noAnimate ? false : { opacity: 0, y: 20 }}
            whileInView={noAnimate ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "bg-white rounded-3xl p-6 shadow-xl shadow-zinc-200/50 border border-zinc-100 card-hover",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
