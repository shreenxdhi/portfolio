'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TermIcon, CornerDownLeft } from 'lucide-react';
import { handleMailTo } from '../utils/email';

const HELP_TEXT = `Available Commands:
  help           - Show this help menu
  whoami         - Print candidate summary & specialization
  ls             - List directory contents & projects
  cat resume.txt - View printable resume summary
  projects       - Display all 6 hardware & system projects
  matrix         - Toggle matrix digital rain effect
  sudo hire      - Execute fast-track recruitment flow
  clear          - Clear terminal screen
  exit           - Close terminal shell`;

export default function TerminalOverlay({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Shreenidhi V RTL Hardware Terminal v2.4 [x86_64-verilog-linux]' },
    { type: 'system', text: 'Type "help" for available commands or "sudo hire" for instant contact.\n' },
  ]);
  const [isMatrix, setIsMatrix] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Keydown listener for ~ (tilde/backtick)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'user', text: `shreenidhi@rtl-node:~$ ${trimmed}` }];
    const cmd = trimmed.toLowerCase();

    switch (cmd) {
      case 'help':
        newHistory.push({ type: 'output', text: HELP_TEXT });
        break;
      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `Shreenidhi V — Electronics & Communication Engineering Student
Specialization: RTL Design, Functional Verification, SystemVerilog, Sky130 ASIC Flow.
Location: Bengaluru, India | Target: Hardware Engineer / RTL Verification Role.`,
        });
        break;
      case 'ls':
        newHistory.push({
          type: 'output',
          text: `drwxr-xr-x  qvision_qr_decoder/
drwxr-xr-x  sobel_image_accelerator/
drwxr-xr-x  uart_controller/
drwxr-xr-x  axi4_dma_controller/
-rw-r--r--  resume.txt
-rw-r--r--  caffeine_fsm.v`,
        });
        break;
      case 'cat resume.txt':
      case 'cat resume':
      case 'resume':
        newHistory.push({
          type: 'output',
          text: `=== SHREENIDHI V — RESUME SUMMARY ===
Education: B.E. ECE @ Bengaluru Institute of Technology
Skills: Verilog, SystemVerilog, Sky130 PDK, Yosys, OpenROAD, Vivado, AXI4, FPGA, Python.
Projects: QVision QR Engine, Sobel Accelerator (33MHz), UART IP, AXI4 DMA.
Contact: shreenidhiv17@gmail.com | github.com/shreenxdhi`,
        });
        break;
      case 'projects':
        newHistory.push({
          type: 'output',
          text: `01. QVision — Hardware QR Decoder (Verilog, Spartan-3, Sky130, VGA 60Hz)
02. Streaming Image Processing Accelerator (Sobel, Sky130 HD, 33.3MHz)
03. Full-Duplex UART Controller (115,200 Baud, Vivado, Basys3)
04. Dual-Channel AXI4 DMA Controller (SystemVerilog AXI4)`,
        });
        break;
      case 'matrix':
        setIsMatrix(!isMatrix);
        newHistory.push({ type: 'output', text: `Matrix digital rain effect ${!isMatrix ? 'enabled [ACTIVE]' : 'disabled [INACTIVE]'}.` });
        break;
      case 'sudo hire':
      case 'sudo hire --fast':
        newHistory.push({
          type: 'output',
          text: `[SUCCESS] Access Granted! Redirecting email client to shreenidhiv17@gmail.com...`,
        });
        handleMailTo(null, 'RTL Design Recruitment');
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        onClose();
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `command not found: "${trimmed}". Type "help" for command list.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
          className={`relative w-full max-w-3xl h-[480px] bg-[#02170f] border border-white/20 rounded-md shadow-2xl overflow-hidden flex flex-col font-mono z-10 ${
            isMatrix ? 'text-[#00FF66] border-[#00FF66]/50' : 'text-[#2DD4BF]'
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-black/70 border-b border-white/15 text-xs text-[#CBD5E1]">
            <div className="flex items-center gap-2">
              <TermIcon size={14} className="text-[#2DD4BF]" />
              <span className="font-bold text-[#FFFFFF]">shreenidhi@rtl-node:~</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[0.65rem] text-[#94A3B8]">Press [~] or ESC to exit</span>
              <button onClick={onClose} className="text-[#94A3B8] hover:text-white border-none bg-transparent cursor-pointer">
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs leading-relaxed font-mono">
            {history.map((item, idx) => (
              <div key={idx} className={`whitespace-pre-wrap ${item.type === 'error' ? 'text-red-400' : item.type === 'user' ? 'text-[#FFFFFF] font-bold' : ''}`}>
                {item.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Prompt Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(input);
            }}
            className="flex items-center gap-2 p-3 bg-black/80 border-t border-white/15 text-xs"
          >
            <span className="text-[#2DD4BF] font-bold">shreenidhi@rtl-node:~$</span>
            <input
              type="text"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type help, cat resume, sudo hire..."
              className="flex-1 bg-transparent text-[#FFFFFF] outline-none font-mono"
            />
            <button type="submit" className="text-[#2DD4BF] bg-transparent border-none cursor-pointer">
              <CornerDownLeft size={14} />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
