import { motion } from "framer-motion";

const SECTION_IN_VIEW = { once: true, amount: 0.25 };

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={SECTION_IN_VIEW}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export { SECTION_IN_VIEW , Section };