"use client";

import React from "react";
import { FiUser, FiCalendar, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto p-6 mt-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-tr from-blue-400 to-blue-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-2">
              <FiUser size={24} className="mr-2" />
              <h2 className="text-xl font-semibold">Usuários</h2>
            </div>
            <p className="text-2xl font-bold">24</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-tr from-green-400 to-green-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-2">
              <FiCalendar size={24} className="mr-2" />
              <h2 className="text-xl font-semibold">Agendamentos</h2>
            </div>
            <p className="text-2xl font-bold">12</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-tr from-yellow-400 to-yellow-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-2">
              <FiCheckCircle size={24} className="mr-2" />
              <h2 className="text-xl font-semibold">Confirmados</h2>
            </div>
            <p className="text-2xl font-bold">8</p>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-tr from-red-400 to-red-600 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-2">
              <FiAlertCircle size={24} className="mr-2" />
              <h2 className="text-xl font-semibold">Pendentes</h2>
            </div>
            <p className="text-2xl font-bold">4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
