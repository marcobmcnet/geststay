'use client';

import React, { useState } from 'react';

export default function MyStayCheckInPage() {
  // Stati del form anagrafico ospite
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [cellulare, setCellulare] = useState('');
  const [email, setEmail] = useState('');
  const [targa, setTarga] = useState('');
  
  // Opzione creazione account futuro
  const [creaAccount, setCreaAccount] = useState(false);
  const [password, setPassword] = useState('');
  const [confermaPassword, setConfermaPassword] = useState('');

  // Consensi obbligatori e facoltativi
  const [accettaPrivacy, setAccettaPrivacy] = useState(false);
  const [accettaMarketing, setAccettaMarketing] = useState(false);

  // Gestione errori e invio
  const [errore, setErrore] = useState('');
  const [inviato, setInviato] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrore('');

    // Controllo campi obbligatori principali
    if (!nome || !cognome || !cellulare || !email || !targa) {
      setErrore('Tutti i campi anagrafici e la targa del veicolo sono obbligatori.');
      return;
    }

    // Controllo validità cellulare (solo numeri)
    const soloNumeriRegex = /^[0-9+]+$/;
    if (!soloNumeriRegex.test(cellulare)) {
      setErrore('Il campo cellulare deve contenere solo numeri.');
      return;
    }

    // Controllo password se l'utente sceglie di creare un account
    if (creaAccount) {
      if (!password || password.length < 6) {
        setErrore('Per creare l\'account, inserisci una password di almeno 6 caratteri.');
        return;
      }
      if (password !== confermaPassword) {
        setErrore('Le password inserite non coincidono.');
        return;
      }
    }

    // Controllo accettazione privacy obbligatoria
    if (!accettaPrivacy) {
      setErrore('È necessario accettare l\'informativa sulla privacy per confermare il check-in.');
      return;
    }

    // Invio riuscito con successo
    setInviato(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] flex flex-col justify-between">
      {/* HEADER MY-STAY */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-wide" style={{ color: '#4A3525' }}>
            Gest<span style={{ color: '#D4AF37' }}>Stay</span>
          </span>
          <span className="text-xs px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">
            My-Stay Check-in
          </span>
        </div>
        <span className="text-xs text-gray-500 font-medium">Area Ospiti</span>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <main className="flex-1 p-4 md:p-6 max-w-2xl w-full mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
          
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold" style={{ color: '#4A3525' }}>
              Benvenuto in Area Sosta
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Inserisci i tuoi dati per completare il check-in in pochi secondi via WhatsApp, QR Code o app.
            </p>
          </div>

          {inviato ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h2 className="text-lg font-bold text-green-800">Check-in Inviato con Successo!</h2>
              <p className="text-sm text-green-700">
                I tuoi dati sono stati trasmessi al gestore per la convalida. Riceverai la conferma e il riepilogo del soggiorno direttamente via WhatsApp ed email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {errore && (
                <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded">
                  {errore}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Nome *</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Mario"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Cognome *</label>
                  <input
                    type="text"
                    value={cognome}
                    onChange={(e) => setCognome(e.target.value)}
                    placeholder="Rossi"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Cellulare (WhatsApp) *</label>
                  <input
                    type="text"
                    value={cellulare}
                    onChange={(e) => setCellulare(e.target.value)}
                    placeholder="es. 3331234567"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mario.rossi@email.it"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">Targa Camper / Veicolo *</label>
                <input
                  type="text"
                  value={targa}
                  onChange={(e) => setTarga(e.target.value.toUpperCase())}
                  placeholder="AB123CD"
                  className="w-full p-3 border rounded-lg uppercase tracking-wider font-semibold focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                />
              </div>

              {/* Box Opzione Creazione Account */}
              <div className="p-4 bg-[#F4F1EA] rounded-xl border border-gray-200 space-y-3 mt-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={creaAccount}
                    onChange={(e) => setCreaAccount(e.target.checked)}
                    className="mt-1 rounded text-[#4A3525]"
                  />
                  <div>
                    <span className="font-semibold text-sm" style={{ color: '#4A3525' }}>
                      Crea un account per riutilizzo futuro facilitato
                    </span>
                    <p className="text-xs text-gray-600">
                      Salva i tuoi dati per non doverli reinserire nei prossimi check-in e accedi allo storico soggiorni.
                    </p>
                  </div>
                </label>

                {creaAccount && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Crea Password (min. 6 car.)"
                      className="w-full p-2.5 bg-white border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                    />
                    <input
                      type="password"
                      value={confermaPassword}
                      onChange={(e) => setConfermaPassword(e.target.value)}
                      placeholder="Conferma Password"
                      className="w-full p-2.5 bg-white border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3525]"
                    />
                  </div>
                )}
              </div>

              {/* Box Consensi Privacy e Marketing */}
              <div className="space-y-3 pt-2 text-sm text-gray-700">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={accettaPrivacy}
                    onChange={(e) => setAccettaPrivacy(e.target.checked)}
                    className="mt-1 rounded text-[#4A3525]"
                  />
                  <span className="text-xs leading-relaxed">
                    <strong>Informativa Privacy & Gestione Soggiorno (*):</strong> Autorizzo l&apos;uso dei dati per la gestione del check-in, l&apos;invio di ricevute e avvisi di servizio via WhatsApp ed email (scadenze soggiorno e comunicazioni automatiche o manuali).
                  </span>
                </label>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={accettaMarketing}
                    onChange={(e) => setAccettaMarketing(e.target.checked)}
                    className="mt-1 rounded text-[#4A3525]"
                  />
                  <span className="text-xs leading-relaxed text-gray-600">
                    Acconsento a ricevere comunicazioni promozionali (garantiamo assoluta discrezione, zero spam e invii non aggressivi).
                  </span>
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-white font-semibold shadow-md transition opacity-95 hover:opacity-100 text-center"
                  style={{ backgroundColor: '#4A3525' }}
                >
                  Invia Dati Check-in
                </button>
              </div>

            </form>
          )}

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#4A3525] text-white text-center py-4 text-xs mt-auto">
        <p>GestStay My-Stay — Check-in Digitale Certificato</p>
      </footer>
    </div>
  );
}
