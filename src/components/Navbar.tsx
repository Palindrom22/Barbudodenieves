'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    // Zvětšili jsme z-index a lištu nechali na h-20 (80px), ale logo bude mít prostor
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white z-50 border-b border-[#222]">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* LEVÁ STRANA: LOGO A NÁZEV CHS */}
        <Link href="/" className="flex items-center gap-4 group">
          
          {/* ZVĚTŠENO: w-20 h-20 (80px) a posunuto dolů (translate-y-2) aby logo "vyčnívalo" */}
          <div className="relative w-20 h-20 translate-y-2 flex-shrink-0 drop-shadow-lg">
            <img 
              src="/images/Logo2.png" 
              alt="Logo Barbudo de Nieves"
              className="w-full h-full object-contain" 
            />
          </div>
          
          {/* NÁZEV: Posunuto lehce doprava, aby nevadilo většímu logu */}
          <div className="hidden sm:block text-left pt-2">
            <span className="font-serif text-sm tracking-[0.2em] uppercase block group-hover:text-[#c5a880] transition-colors">
              Barbudo de
            </span>
            <span className="font-serif text-xs tracking-[0.15em] uppercase block text-[#666] group-hover:text-white transition-colors -mt-1">
              Nieves
            </span>
          </div>
        </Link>

        {/* PRAVÁ STRANA: MENU ODKAZY */}
        <div className="flex items-center gap-6 text-xs uppercase tracking-widest font-medium">
          <Link href="/" className="text-[#666] hover:text-white transition-colors py-2">
            Úvod
          </Link>
          <Link href="/psi" className="text-[#666] hover:text-[#c5a880] transition-colors py-2">
            Naši psi
          </Link>
          <Link href="/eshop" className="bg-[#c5a880]/10 text-[#c5a880] border border-[#c5a880]/20 hover:bg-[#c5a880] hover:text-black hover:border-[#c5a880] px-3 py-1.5 rounded-full transition-all duration-300">
            E-shop
          </Link>
        </div>

      </div>
    </nav>
  );
}