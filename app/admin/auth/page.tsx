'use client';

import React, { useState } from 'react';

export default function AdminAuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [chiaveMaster, setChiaveMaster] = useState('');
  const [errore, setErrore] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrore('');

    if (!email || !password) {
      setErrore('Inserisci email e password.');
      return;
    }

    if (!isLogin && !chiaveMaster) {
      setErrore('La chiave segreta master è obbligatoria per registrare il Super Admin.');
      return;
    }

    // Reindirizzamento simulato alla dashboard admin delle strutture
    window.location.href = '/(admin)/strutture';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F1EA] px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-wide" style={{ color: '#4A3525' }}>
            Gest<span style={{ color: '#D4AF37' }}>Stay</span>
          </h1>
          <span className="text-xs px-3 py-1 bg-stone-800 text-white rounded-full font-medium mt-2 inline-block">
            Area Super Admin
          </span>
          <p className="text-sm text-gray-600 mt-2">
            {isLogin ? 'Accesso riservato alla proprietà' : 'Prima registrazione Master Admin'}
          </p>
        </div>

        {errore && (
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded">
            {errore}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Email Amministratore</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@geststay.it"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Chiave Segreta Master</label>
              <input
                type="password"
                required
                value={chiaveMaster}
                onChange={(e) => setChiaveMaster(e.target.value)}
                placeholder="Codice autorizzazione titolare"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
              />
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-white font-semibold shadow-md transition opacity-95 hover:opacity-100 text-center"
              style={{ backgroundColor: '#4A3525' }}
            >
              {isLogin ? 'Accedi come Admin' : 'Registra Master Admin'}
            </button>
          </div>

          <div className="text-center mt-4 text-sm">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setErrore('');
              }}
              className="text-[#4A3525] font-semibold hover:underline"
            >
              {isLogin ? 'Prima registrazione ? Clicca qui' : 'Hai già un account? Accedi'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
