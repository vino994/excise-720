import { useState } from "react";

export default function BreadcrumbDropdown({ label, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Text + Arrow */}
      <div
        className="flex items-center gap-1 cursor-pointer text-brand-mid hover:text-brand-mid"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span>{label}</span>
        <span className="text-brand-mid text-xs">▼</span>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute top-5 left-0 bg-white shadow-md rounded-md text-sm z-50 py-2"
        >
          {options.map((item, i) => (
            <p
              key={i}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
