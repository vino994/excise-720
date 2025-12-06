import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { FaRegQuestionCircle, FaWpforms, FaBusinessTime } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { FaFileWaveform } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function TopNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const tabBase =
    "px-6 py-4 flex items-center gap-2 cursor-pointer text-white whitespace-nowrap transition";

  const isActive = (route) =>
    pathname === route
      ? "bg-[#4499b3] font-semibold border-b-4 border-white"
      : "hover:bg-[#176f8a95]";

  return (
    <div className="w-full shadow sticky top-0 z-50">

      {/* -------------------------------- */}
      {/* 🔵 TOP BAR */}
      {/* -------------------------------- */}
      <div className="bg-brand-dark text-white px-4 md:px-8 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="bg-white px-3 md:px-4 py-2 rounded-md shadow-sm flex items-center">
          <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-1">
            <span className="text-brand-dark tracking-tight font-semibold">
              Excise
            </span>
            <span className="text-transparent bg-clip-text 
              bg-gradient-to-r from-brand-dark via-brand-mid to-brand-light font-bold">
              720
            </span>
          </h1>
        </div>

        {/* RIGHT ICONS - Hidden in mobile */}
        <div className="hidden md:flex items-center gap-4 md:gap-6 text-xl md:text-2xl cursor-pointer">
          <IoMdContact className="hover:text-brand-light transition" />
          <FaRegQuestionCircle className="hover:text-brand-light transition" />
          <span className="hover:text-brand-light transition">⚙️</span>
          <RxExit className="hover:text-brand-light transition" />
        </div>

        {/* HAMBURGER (Mobile) */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* -------------------------------- */}
      {/* 🔵 NAV TABS (Desktop + Tablet) */}
      {/* -------------------------------- */}
      <div className="bg-brand-mid overflow-x-auto hidden md:block">
        <div className="flex justify-center min-w-max">

          <div
            onClick={() => navigate("/s1")}
            className={`${tabBase} ${isActive("/s1")}`}
          >
            <FaWpforms className="text-xl md:text-2xl" /> My Filing
          </div>

          <div
            onClick={() => navigate("/s2")}
            className={`${tabBase} ${isActive("/s2")}`}
          >
            <FaBusinessTime className="text-xl md:text-2xl" /> My Business
          </div>

          <div
            onClick={() => navigate("/add-filing")}
            className={`${tabBase} hover:bg-[#176f8a95]`}
          >
            <FaFileWaveform className="text-xl md:text-2xl" /> Add Filing
          </div>
        </div>
      </div>

      {/* -------------------------------- */}
      {/* 🔵 COLLAPSIBLE MOBILE MENU */}
      {/* -------------------------------- */}
      <div
        className={`md:hidden bg-brand-mid text-white flex flex-col overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        {/* MOBILE ICON ROW */}
        <div className="flex items-center justify-around py-4 text-2xl border-b border-white/30">
          <IoMdContact />
          <FaRegQuestionCircle />
          <span>⚙️</span>
          <RxExit />
        </div>

        {/* MOBILE NAV TABS */}
        <div className="flex flex-col">

          <div
            onClick={() => { navigate("/s1"); setOpen(false); }}
            className={`${tabBase} ${isActive("/s1")}`}
          >
            <FaWpforms className="text-xl" /> My Filing
          </div>

          <div
            onClick={() => { navigate("/s2"); setOpen(false); }}
            className={`${tabBase} ${isActive("/s2")}`}
          >
            <FaBusinessTime className="text-xl" /> My Business
          </div>

          <div
            onClick={() => { navigate("/add-filing"); setOpen(false); }}
            className={`${tabBase} hover:bg-[#176f8a95]`}
          >
            <FaFileWaveform className="text-xl" /> Add Filing
          </div>
        </div>
      </div>
    </div>
  );
}
