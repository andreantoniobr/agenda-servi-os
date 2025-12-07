"use client";

import React from "react";
import { FiCalendar, FiClock, FiCheckCircle } from "react-icons/fi";

export default function AgendamentosPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 to-orange-50 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Meus Agendamentos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemplo de Card de Agendamento */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow transform hover:scale-105">
          <div className="flex items-center mb-2 text-orange-500">
            <FiCalendar className="mr-2" /> <span className="font-semibold">Serviço de Limpeza</span>
          </div>
          <div className="flex items-center mb-1 text-gray-600">
            <FiClock className="mr-2" /> <span>10:00 - 11:00</span>
          </div>
          <div className="flex items-center text-green-500">
            <FiCheckCircle className="mr-2" /> <span>Confirmado</span>
          </div>
        </div>

        {/* Você pode duplicar cards para mais exemplos */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow transform hover:scale-105">
          <div className="flex items-center mb-2 text-orange-500">
            <FiCalendar className="mr-2" /> <span>Serviço de Jardinagem</span>
          </div>
          <div className="flex items-center mb-1 text-gray-600">
            <FiClock className="mr-2" /> <span>14:00 - 15:30</span>
          </div>
          <div className="flex items-center text-yellow-500">
            <FiCheckCircle className="mr-2" /> <span>Pendente</span>
          </div>
        </div>
      </div>
    </div>
  );
}
