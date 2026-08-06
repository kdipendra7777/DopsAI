

export default function NavDropdown({ title, children }) {
  return (
    <div className="relative group flex h-full items-center">

      {/* Trigger */}
      <button
        className="
          group
          relative
          flex
          items-center
          gap-1
          text-[14px]
          font-normal
          tracking-[-0.01em]
          text-[#6f7684]
          transition-all
          duration-200
          hover:text-[#111827]
        "
      >
        <span>{title}</span>

        {/* <ChevronDown
          size={14}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:rotate-180"
        /> */}

        {/* Underline */}
        <span
          className="
            absolute
            -bottom-[26px]
            left-0
            h-[1.5px]
            w-0
            rounded-full
            bg-[#111827]
            transition-all
            duration-300
            group-hover:w-full
          "
        />
      </button>

      {/* Hover Bridge */}
      <div className="absolute left-0 top-full h-6 w-full" />

      {/* Dropdown */}
      <div
        className="
          absolute
          left-0
          top-[calc(100%+24px)]
          invisible
          z-50
          translate-y-2
          opacity-0
          transition-all
          duration-300
          ease-out
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <div
          className="
            w-[820px]
            overflow-hidden
            rounded-[24px]
            border
            border-[#ececec]
            bg-white
            shadow-[0_30px_80px_rgba(15,23,42,0.08)]
          "
        >
          {children}
        </div>
      </div>

    </div>
  );
}