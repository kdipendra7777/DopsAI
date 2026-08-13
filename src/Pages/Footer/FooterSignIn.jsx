import { Mail, Download } from "lucide-react";

export default function FooterSignIn() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-[#111111] p-8">
      {/* Google Button */}
      <button className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-zinc-700 transition-all duration-300 hover:border-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="h-5 w-5"
        >
          <path
            fill="#FFC107"
            d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
          />
          <path
            fill="#FF3D00"
            d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
          />
          <path
            fill="#4CAF50"
            d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2c-2.1 1.6-4.7 2.4-7.3 2.4-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.6 39.5 16.2 44 24 44z"
          />
          <path
            fill="#1976D2"
            d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.4 5.6-6.7 7.2l6.2 5.2C39 36.8 44 31 44 24c0-1.3-.1-2.4-.4-3.5z"
          />
        </svg>

        <span className="font-medium text-white">
          Continue with Google
        </span>
      </button>

      {/* Divider */}
      <div className="my-6 flex items-center">
        <div className="h-px flex-1 bg-zinc-800" />
        <span className="mx-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
          OR
        </span>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      {/* Email */}
      <button className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-white font-medium text-black transition hover:bg-zinc-200">
        <Mail size={18} />
        Continue with Email
      </button>

      {/* Terms */}
      <p className="mt-6 text-center text-sm leading-6 text-zinc-500">
        By continuing, you agree to the{" "}
        <a href="#" className="text-white hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="text-white hover:underline">
          Terms of Service
        </a>
        .
      </p>

      {/* Download */}
      <button className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-zinc-700 text-white transition hover:border-white">
        <Download size={18} />
        Download Desktop App
      </button>
    </div>
  );
}