'use client';

import React, { useState } from 'react';

export default function GestoreAuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  
  // Campi Form
  const [nomeStruttura, setNomeStruttura] = useState('');
  const [nomeGestore, setNomeGestore] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confermaPassword, setConfermaPassword] = useState('');
  const [accettaTermini, setAccettaTermini] = useState(false);

  const [errore, setErrore] = useState('');
  const [successo, setSuccesso] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrore('');

    if (isLogin) {
      // Logica di Login
      if (!email || !password) {
        setErrore('Inserisci email e password per accedere.');
        return;
      }
      // Reindirizzamento simulato alla dashboard del gestore
      window.location.href = '/(gestore)/dashboard';
    } else {
      // Logica di Registrazione
      if (!nomeStruttura || !nomeGestore || !email || !telefono || !password) {
        setErrore('Tutti i campi obbligatori devono essere compilati.');
        return;
      }
      if (password.length < 6) {
        setErrore('La password deve essere di almeno 6 caratteri.');
        return;
      }
      if (password !== confermaPassword) {
        setErrore('Le password inserite non coincidono.');
        return;
      }
      if (!accettaTermini) {
        setErrore('È necessario accettare i termini di servizio B2B.');
        return;
      }

      setSuccesso(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F1EA] px-4 py-8">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-wide" style={{ color: '#4A3525' }}>
            Gest<span style={{ color: '#D4AF37' }}>Stay</span>
          </h1>
          <span className="text-xs px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-medium mt-2 inline-block">
            Area Gestori & Agricamping
          </span>
          <p className="text-sm text-gray-600 mt-2">
            {isLogin ? 'Accedi al pannello di controllo della tua struttura' : 'Registra la tua struttura e inizia la prova'}
          </p>
        </div>

        {errore && (
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded">
            {errore}
          </div>
        )}

        {successo ? (
          <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center space-y-3">
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h2 className="text-lg font-bold text-green-800">Registrazione Avvenuta con Successo!</h2>
            <p className="text-sm text-green-700">
              Il tuo account gestore è stato creato. Puoi ora effettuare il login con le credenziali appena inserite.
            </p>
            <button
              type="button"
              onClick={() => {
                setSuccesso(false);
                setIsLogin(true);
              }}
              className="mt-2 px-6 py-2.5 rounded-lg text-white font-semibold text-sm transition"
              style={{ backgroundColor: '#4A3525' }}
            >
              Vai al Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {!isLogin && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Nome Struttura / Agricamping *</label>
                  <input
                    type="text"
                    value={nomeStruttura}
                    onChange={(e) => setNomeStruttura(e.target.value)}
                    placeholder="es. Agricamping Le Betulle"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Nome del Titolare *</label>
                  <input
                    type="text"
                    value={nomeGestore}
                    onChange={(e) => setNomeGestore(e.target.value)}
                    placeholder="es. Marco Rossi"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Email Aziendale *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="info@struttura.it"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                />
              </div>
              {!isLogin ? (
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Telefono / WhatsApp *</label>
                  <input
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="+39 333 1234567"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Password *</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                  />
                </div>
              )}
            </div>

            {!isLogin && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Password *</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min. 6 caratteri"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Conferma Password *</label>
                    <input
                      type="password"
                      value={confermaPassword}
                      onChange={(e) => setConfermaPassword(e.target.value)}
                      placeholder="Ripeti password"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={accettaTermini}
                      onChange={(e) => setAccettaTermini(e.target.checked)}
                      className="mt-1 rounded text-[#4A3525]"
                    />
                    <span className="text-xs text-gray-700 leading-relaxed">
                      Accetto i <strong>termini di servizio B2B</strong> e l&apos;informativa sulla privacy per la gestione della struttura ricettiva.
                    </span>
                  </label>
                </div>
              </>
            )}

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-white font-semibold shadow-md transition opacity-95 hover:opacity-100 text-center"
                style={{ backgroundColor: '#4A3525' }}
              >
                {isLogin ? 'Accedi al Pannello' : 'Registra la Struttura'}
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
                {isLogin ? 'Non hai un account gestore? Registrati' : 'Hai già un account? Accedi qui'}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
