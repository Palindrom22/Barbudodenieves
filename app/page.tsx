'use client';

import Link from 'next/link';

export default function IntroGatewayPage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black font-sans select-none">
      
      {/* LOGO */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <h1 className="text-white font-serif tracking-[0.3em] uppercase text-xl md:text-2xl opacity-80">
          Barbudo de Nieves
        </h1>
      </div>

      <div className="flex flex-col md:flex-row w-full h-full relative">
        
        {/* LEVÁ STRANA: CHOVATELSKÁ STANICE */}
        <Link 
          href="/psi" 
          className="group relative w-full md:w-[55%] h-1/2 md:h-full flex items-center justify-center transition-all duration-700 ease-in-out [clip-path:polygon(0_0,_100%_0,_90%_100%,_0_100%)] z-10 hover:z-20"
        >
          <div 
            className="absolute inset-0 bg-[#161616] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-50"
            style={{ backgroundImage: "url('/images/Amy.jpg')" }} 
          />
          <div className="relative z-20 p-6 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase tracking-wider">Chovatelská stanice</h2>
          </div>
        </Link>

        {/* STŘEDOVÝ PŘECHOD (Méně průhledný pruh) */}
        <div className="absolute inset-0 z-15 pointer-events-none bg-gradient-to-r from-black/60 via-black/10 to-black/60" />

        {/* PRAVÁ STRANA: E-SHOP */}
        <Link 
          href="/eshop" 
          className="group relative w-full md:w-[55%] h-1/2 md:h-full flex items-center justify-center transition-all duration-700 ease-in-out [clip-path:polygon(10%_0,_100%_0,_100%_100%,_0_100%)] z-10 hover:z-20 md:-ml-[10%]"
        >
          <div 
            className="absolute inset-0 bg-[#1c1c1c] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-50"
            style={{ backgroundImage: "url('/images/obojek_znamka.jpeg')" }} 
          />
          <div className="relative z-20 p-6 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white uppercase tracking-wider">Internetový obchod</h2>
          </div>
        </Link>
      </div>
    </main>
  );
}