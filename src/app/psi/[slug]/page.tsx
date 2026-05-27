'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Databáze plemen, která pod sebe sdružuje konkrétní psy a jejich vrhy
const breedsData: Record<string, {
  name: string;
  subTitle: string;
  description: string;
  dogs: {
    slug: string;
    name: string;
    role: string;
    image: string;
    shortDesc: string;
  }[];
  litters?: {
    slug: string;
    name: string;
    date: string;
    image: string;
  }[];
}> = {
  'madarsky-ohar': {
    name: "Maďarský krátkosrstý ohař",
    subTitle: "Vizsla (RVP)",
    description: "Elegantní lovecký pes s aristokratickým vzhledem a neúnavným pracovním drivem. Naše chovná linie staví na pevných vlohách, vynikajícím exteriéru a typické přátelské povaze.",
    dogs: [
      {
        slug: 'amy',
        name: "Amy Lady Caniley",
        role: "Zakladatelka chovu",
        image: "/images/amy.jpg",
        shortDesc: "Srdce naší chovatelské stanice. Neúnavná pracovní fena s bohatou loveckou praxí a úžasná matka našich vrhů C a E."
      }
    ],
    litters: [
      { slug: 'vrh-c', name: "Vrh C (CHS Caniley)", date: "2022", image: "/images/Amy_plakatek.jpg" },
      { slug: 'vrh-e', name: "Vrh E (CHS Caniley)", date: "2023", image: "/images/Amy_plakatek2.jpg" }
    ]
  },
  'cesky-fousek': {
    name: "Český fousek",
    subTitle: "Tradiční národní plemeno",
    description: "Náš hrdý hrubosrstý ohař. Vyniká svou všestranností, nesmírnou věrností, skvělou ovladatelností a rozvážnou povahou při práci v lese i na vodě.",
    dogs: [
      {
        slug: 'etna',
        name: "Etna od Pálavských vršků",
        role: "Mladá chovná fena",
        image: "/images/etna.jpg",
        shortDesc: "Naše druhá fenka s obrovským potenciálem. Mladá, klidná, perfektně ovladatelná a nesmírně učenlivá parťačka, která u nás zakládá linii fousků."
      }
    ],
    litters: [
      { slug: 'vrh-a-fousek', name: "Vrh A (Barbudo de Nieves)", date: "2026", image: "/images/etna.jpg" }
    ]
  }
};

export default function BreedPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const breed = breedsData[resolvedParams.slug];

  if (!breed) notFound();

  return (
    <main className="min-h-screen bg-[#121212] text-white py-20 px-4 md:px-8 pt-28">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* DROBEČKOVÁ NAVIGACE */}
        <div className="text-xs uppercase tracking-widest text-[#666] space-x-2">
          <Link href="/psi" className="hover:text-[#c5a880] transition-colors">Naše plemena</Link>
          <span>/</span>
          <span className="text-[#c5a880] font-medium">{breed.name}</span>
        </div>

        {/* HLAVIČKA PLEMENE */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <span className="text-xs uppercase tracking-widest text-[#c5a880] font-medium">{breed.subTitle}</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">{breed.name}</h1>
          <p className="text-[#a0a0a0] text-lg font-light leading-relaxed">{breed.description}</p>
          <div className="w-16 h-0.5 bg-[#c5a880] mx-auto pt-2"></div>
        </div>

        {/* JEDINCI V DANÉM PLEMENI */}
        <div className="space-y-8 pt-8">
          <h2 className="text-xl md:text-2xl font-serif uppercase tracking-widest text-[#c5a880] border-b border-[#222] pb-4">
            Jedinci v naší stanici
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {breed.dogs.map((dog) => (
              <div key={dog.slug} className="bg-[#161616] border border-[#222] rounded-xl overflow-hidden flex flex-col sm:flex-row p-4 gap-6 hover:border-[#333] transition-all">
                <div className="relative w-full sm:w-44 h-44 flex-shrink-0 rounded-lg overflow-hidden bg-[#0a0a0a]">
                  <Image src={dog.image} alt={dog.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-between py-2 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider bg-[#c5a880]/10 text-[#c5a880] px-2 py-0.5 rounded-md font-medium">
                      {dog.role}
                    </span>
                    <h3 className="text-xl font-bold font-serif text-white pt-1">{dog.name}</h3>
                    <p className="text-xs text-[#a0a0a0] font-light leading-relaxed">{dog.shortDesc}</p>
                  </div>
                  <Link 
                    href={`/psi/${resolvedParams.slug}/${dog.slug}`} 
                    className="inline-block text-xs uppercase tracking-wider text-[#c5a880] hover:text-white font-semibold transition-colors"
                  >
                    Zobrazit celý profil a galerii &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ODCHOVANÉ VRHY PLEMENE */}
        {breed.litters && breed.litters.length > 0 && (
          <div className="space-y-8 pt-12">
            <h2 className="text-xl md:text-2xl font-serif uppercase tracking-widest text-[#c5a880] border-b border-[#222] pb-4">
              Odchované vrhy plemene
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {breed.litters.map((litter) => (
                <Link 
                  key={litter.slug} 
                  href={`/psi/${resolvedParams.slug}/${litter.slug === 'vrh-a-fousek' ? 'etna' : 'amy'}/${litter.slug}`} 
                  className="group bg-[#161616] border border-[#222] rounded-xl p-3 flex flex-col gap-3 hover:border-[#c5a880]/40 transition-all"
                >
                  <div className="relative h-40 w-full rounded-lg overflow-hidden bg-[#0a0a0a]">
                    <Image src={litter.image} alt={litter.name} fill className="object-contain p-1 group-hover:scale-102 transition-transform" />
                  </div>
                  <div className="text-center pb-1">
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#c5a880] transition-colors">{litter.name}</h4>
                    <p className="text-[11px] text-[#666] uppercase tracking-wider mt-0.5">Rok {litter.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}