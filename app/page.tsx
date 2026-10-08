import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] flex flex-col justify-between text-[#4A3525]">
      
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-wide">
            Gest<span className="text-[#D4AF37]">Stay</span>
          </span>
          <span className="text-xs px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">
            SaaS Agricamping
          </span>
        </div>
        <span className="text-xs text-gray-500 font-medium">Live on Vercel</span>
      </header>

      {/* CONTENUTO CENTRALE */}
      <div className="flex-1 p-6 max-w-md w-full mx-auto flex flex-col justify-center space-y-6">
        
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Benvenuto in GestStay</h1>
          <p className="text-sm text-gray-600">Seleziona l'area di accesso per testare la piattaforma:</p>
        </div>

        <div className="space-y-4">
          {/* Pulsante Area Ospite / My-Stay */}
          <Link 
            href="/autocertificazione" 
            className="block p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-[#4A3525] transition group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold group-hover:text-amber-700">1. Area My-Stay (Ospite)</h2>
                <p className="text-xs text-gray-500">Check-in rapido, targa e consensi privacy.</p>
              </div>
              <span className="text-xl font-bold">&rarr;</span>
            </div>
          </Link>

          {/* Pulsante Area Gestore */}
          <Link 
            href="/dashboard" 
            className="block p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-[#4A3525] transition group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold group-hover:text-amber-700">2. Area Gestore (Agricamping)</h2>
                <p className="text-xs text-gray-500">Gestione piazzole, arrivi e controlli.</p>
              </div>
              <span className="text-xl font-bold">&rarr;</span>
            </div>
          </Link>

          {/* Pulsante Area Super Admin */}
          <Link 
            href="/admin" 
            className="block p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-[#4A3525] transition group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold group-hover:text-amber-700">3. Area Super Admin</h2>
                <p className="text-xs text-gray-500">Controllo globale delle strutture attive.</p>
              </div>
              <span className="text-xl font-bold">&rarr;</span>
            </div>
          </Link>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="bg-[#4A3525] text-white text-center py-4 text-xs">
        <p>GestStay Production by Bmc Net Environment — Sviluppato per Mobile & Web</p>
      </footer>

    </main>
  );
}
