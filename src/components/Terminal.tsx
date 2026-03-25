import { motion } from "motion/react";
import { Terminal as TerminalIcon, Circle } from "lucide-react";

interface TerminalProps {
  lines: string[];
  title?: string;
}

export const Terminal = ({ lines, title = "test_execution.log" }: TerminalProps) => {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-[#ddd6fe] bg-[#faf5ff] shadow-xl shadow-primary/10 font-mono text-sm">
      <div className="bg-[#f0e8fb] px-4 py-2 flex items-center justify-between border-b border-[#ddd6fe]">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-primary" />
          <span className="text-[#9068b8] text-xs">{title}</span>
        </div>
        <div className="flex gap-1.5">
          <Circle className="w-2.5 h-2.5 fill-[#ddd6fe] text-transparent" />
          <Circle className="w-2.5 h-2.5 fill-[#ddd6fe] text-transparent" />
          <Circle className="w-2.5 h-2.5 fill-[#ddd6fe] text-transparent" />
        </div>
      </div>
      <div className="p-4 space-y-1">
        {lines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="flex gap-3"
          >
            <span className="text-[#c4b5fd] select-none">{idx + 1}</span>
            <span className={line.includes('✓') || line.includes('PASS') ? 'text-primary font-bold' : line.includes('FAIL') ? 'text-error' : 'text-[#4a2d80]'}>
              {line}
            </span>
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
        />
      </div>
    </div>
  );
};
