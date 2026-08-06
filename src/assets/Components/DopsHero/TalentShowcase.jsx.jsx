import {
  ArrowUp,
  Paperclip,
  Mic,
} from "lucide-react";
import ParticleGlobe from "./ParticleGlobe";
import ChatInput from "./ChatInput";

export default function TalentShowcase() {
  return (
    <div className="w-full h-full bg-[#f4f4f2]">
      <div className="w-full h-full bg-white border-l border-[#e5e5e5] flex flex-col">

        {/* Top Bar */}
        <div className="h-14 border-b border-[#e5e5e5] flex items-center justify-between px-6 shrink-0">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          <div className="font-medium text-gray-800">
            ChatAGI
          </div>

          <span className="text-sm text-gray-500">
            AGI Preview
          </span>
        </div>

        {/* Body */}
        <div className="relative flex-1 overflow-hidden">

          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)]" />

          {/* Globe */}
          <div className="absolute inset-0 flex flex-col items-center">

            {/* Globe */}
            <div className="w-full h-[58%] mt-12">
              <ParticleGlobe />
            </div>

            {/* Heading */}
            <div className="-mt-14 text-center px-6">
              <h2 className="text-[38px] font-medium tracking-[-0.04em] text-[#111827]">
                Ask anything here{" "}
                
              </h2>
            </div>

          </div>

          {/* Chat Input */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] z-20 flex justify-center">
  <ChatInput />
</div>

        </div>

      </div>
    </div>
  );
}