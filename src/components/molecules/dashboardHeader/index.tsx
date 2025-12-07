"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaUserCircle,
  FaChevronDown,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import SignOutButton from "@/components/SignOutButton";

import Logo from "@/components/atoms/logo";
import Button from "@/components/atoms/button";
import DashboardHeaderLink from "@/components/atoms/dashboardHeaderLink";

interface DashboardHeaderProps {
  userName?: string;
}

export default function DashboardHeader({ userName }: DashboardHeaderProps) {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);



  

  return (
    <header className="z-1 flex flex-none items-center">
      <div className="w-full px-4 lg:px-8 bg-white">
        <div className="flex justify-between py-4">
          {/* Left Section */}
          <div className="flex items-center">
            <Link href="/">
              <Logo size="lg" />
            </Link>
          </div>
          {/* END Left Section */}

          {/* Right Section */}
          <div className="flex items-center gap-1 lg:gap-5">
            <div className="hidden items-center gap-2 lg:flex">
              <DashboardHeaderLink href="/dashboard" text="Agendamentos" />
              <DashboardHeaderLink
                href="/dashboard/categories"
                text="Categorias"
              />
            </div>

            {/* User Dropdown */}
            <div className="relative inline-block">
              <button
                type="button"
                className="group flex items-center justify-between rounded-md px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-(--third-color)"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <span className="text-gray-900 font-semibold me-2">Olá, {userName}</span>
                <FaChevronDown />
              </button>

              {userDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 origin-top-right rounded-sm bg-white shadow-xl ring-1 ring-slate-900/5"
                  role="menu"
                >
                  <div className="divide-y divide-slate-100 rounded-sm">
                    <div className="space-y-1 p-2">
                      <button
                        role="menuitem"
                        className="group flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm hover:bg-slate-100"
                      >
                        <FaUser className="size-4 text-slate-300" />
                        <span>Perfil</span>
                      </button>
                    </div>

                    <div className="space-y-1 p-2">
                      <SignOutButton />
                      

          
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* END User Dropdown */}

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="group flex items-center justify-between gap-2 rounded-md px-2.5 py-2 text-sm font-semibold text-slate-900 hover:bg-indigo-100"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <FaBars />
              </button>
            </div>
          </div>
          {/* END Right Section */}
        </div>

        {/* Mobile Navigation */}
        {mobileNavOpen && (
          <nav className="flex flex-col py-4 lg:hidden">
            <Button variant="white" to="/dashboard" className="w-full justify-start">
              Agendamentos
            </Button>

            <hr className="h-5 border-0" />

            <Button variant="white" to="/dashboard/categories" className="w-full justify-start">
              Categorias
            </Button>

            <hr className="h-5 border-0" />
          </nav>
        )}
        {/* END Mobile Navigation */}
      </div>
    </header>
  );
}
