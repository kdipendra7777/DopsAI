import { ArrowUp, Mic, Paperclip } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="w-full max-w-3xl">
      <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_15px_50px_rgba(0,0,0,0.12)]">

        {/* Attachment */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-700">
          <Paperclip size={18} />
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="Ask ChatAGI anything..."
          className="flex-1 bg-transparent text-[15px] text-gray-800 placeholder:text-gray-400 outline-none"
        />

        {/* Mic */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-700">
          <Mic size={18} />
        </button>

        {/* Send */}
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-105 hover:bg-neutral-800 active:scale-95">
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>

      </div>
    </div>
  );
}