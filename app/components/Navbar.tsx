"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link href="/">Agenda Serviços</Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/dashboard" className="hover:text-yellow-300 transition-colors">Dashboard</Link>
            <Link href="/agendamentos" className="hover:text-yellow-300 transition-colors">Agendamentos</Link>
            <Link href="/login" className="hover:text-yellow-300 transition-colors">Login</Link>
            <Link href="/cadastro" className="hover:text-yellow-300 transition-colors">Cadastro</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-500 to-indigo-500 px-4 pt-2 pb-4 space-y-2">
          <Link href="/dashboard" className="block text-white hover:text-yellow-300">Dashboard</Link>
          <Link href="/agendamentos" className="block text-white hover:text-yellow-300">Agendamentos</Link>
          <Link href="/login" className="block text-white hover:text-yellow-300">Login</Link>
          <Link href="/cadastro" className="block text-white hover:text-yellow-300">Cadastro</Link>
        </div>
      )}
    </nav>
  );
}
