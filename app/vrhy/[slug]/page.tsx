'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

const littersData: Record<string, {
  title: string;
  date: string;
  father: string;
  mother: string;
  breedSlug: string; 
  breedName: string;
  description: string;
  mainImage: string;
  puppies: { name: string; exams: string; note: string }[];
}> = {
  'vrh-c': {
    title: "Vrh C (CHS Caniley)",
    date: "2022",
    father: "Krycí pes (Doplň přesné jméno otce)", 
    mother: "Amy Lady Caniley",
    breedSlug: "madarsky-ohar",
    breedName: "Maďarský ohař",
    description: "Náš přelomový odchov pod mateřskou stanicí Caniley. Amy se projevila jako úžasná matka a předala štěňatům obrovskou chuť do práce, pevné vystavování a skvělé povahy. Tento vrh se zapsal skvělými pracovními úspěchy.",
    mainImage: "/images/Amy_plakatek.jpg",
    puppies: [
      { name: "Caps Lock Caniley", exams: "ZV, PZ, ZVP, BZ (vše I. cena)", note: "Chovný pes, špičková pracovní všestrannost" },
      { name: "Clemens Hugo Caniley", exams: "ZV, PZ (vše I. cena)", note: "Aktivně využíván v lovecké praxi" },
      { name: "Crazy Boy Caniley", exams: "ZV (I. cena), PZ, ZVP", note: "Pracovně vedený pes" },
      { name: "Cassie Rose Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Coffee Charming Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Cassiopeia Queen Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Caspian Star Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Commander Corki Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Candy Crush Caniley", exams: "—", note: "Rodinný společník" }
    ]
  },
  'vrh-e': {
    title: "Vrh E (CHS Caniley)",
    date: "2023",
    father: "Zahraniční krytí (Doplň přesné jméno otce)",
    mother: "Amy Lady Caniley",
    breedSlug: "madarsky-ohar",
    breedName: "Maďarský ohař",
    description: "Vrh E byl druhým a zároveň posledním odchovem Amy pod stanicí Caniley. Toto spojení přineslo mimořádně úspěšné jedince jak na poli pracovním, tak výstavním. Potomci z tohoto vrhu sbírají tituly po celé Evropě a potvrzují vysokou kvalitu naší chovné linie.",
    mainImage: "/images/Amy_plakatek2.jpg",
    puppies: [
      { name: "Euphoric Edward Pup Caniley", exams: "ZV (vítěz), PZ I.c, CZ Junior CHAMPION, JBIG, BOB, CAJC, CAC", note: "Mimořádně úspěšný výstavní a pracovní pes" },
      { name: "Earth Lela Caniley", exams: "SK, ZV, PZ, BZ, V1, CACIB, BOS", note: "Všestranně vedená fena s vynikajícím exteriérem" },
      { name: "Express Maya Caniley", exams: "ZV I.c, PZ I.c (vítěz zkoušek)", note: "Vynikající pracovní drive a ovladatelnost" },
      { name: "Endless Waiting Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Elliot Houdini Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Emergency Terra Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Exciting Elvis Caniley", exams: "—", note: "Rodinný společník" }
    ]
  }
};

export default function LitterDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const litter = littersData[resolvedParams.slug];

  if (!litter) notFound();

  return (
    <main className="min-h-screen bg-[#121212] text-white py-20 px-4 md:px-8 pt-28">
      <div className="max-w-6xl mx-auto">
        
        {/* DROBEČKOVÁ NAVIGACE */}
        <div className="text-xs uppercase tracking-widest text-[#666] mb-8 space-x-2">
          <Link href="/psi" className="hover:text-[#c5a880] transition-colors">Naše plemena</Link>
          <span>/</span>
          <Link href={`/psi/${litter.breedSlug}`} className="hover:text-[#c5a880] transition-colors">{litter.breedName}</Link>
          <span>/</span>
          <span className="text-[#c5a880] font-medium">{litter.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* PLAKÁTEK */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[450px] md:h-[650px] w-full overflow-hidden rounded-xl shadow-2xl border border-[#222] bg-[#0a0a0a] p-2">
              <Image src={litter.mainImage} alt={litter.title} fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          </div>

          {/* TEXTY */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2 text-white">{litter.title}</h1>
              <p className="text-sm uppercase tracking-widest text-[#c5a880] font-medium">Odchovy pod CHS Caniley</p>
            </div>
            <p className="text-[#a0a0a0] text-lg leading-relaxed font-light">{litter.description}</p>
            <div className="border-t border-[#222] pt-6 space-y-4 text-sm">
              <div className="flex border-b border-[#222]/50 pb-3"><span className="w-32 text-[#666] uppercase tracking-widest text-[10px] font-bold">Rok odchovu</span><span className="text-white font-light">{litter.date}</span></div>
              <div className="flex border-b border-[#222]/50 pb-3"><span className="w-32 text-[#666] uppercase tracking-widest text-[10px] font-bold">Matka</span><span className="text-[#c5a880] font-medium italic">{litter.mother}</span></div>
              <div className="flex pb-3"><span className="w-32 text-[#666] uppercase tracking-widest text-[10px] font-bold">Otec</span><span className="text-white font-light">{litter.father}</span></div>
            </div>
          </div>
        </div>

        {/* TABULKA POTOMKŮ */}
        <div className="mt-16 border-t border-[#222] pt-12">
          <h2 className="text-2xl font-bold font-serif mb-6 uppercase tracking-wider text-[#c5a880]">Potomci z tohoto spojení ({litter.puppies.length} jedinců)</h2>
          <div className="overflow-x-auto rounded-xl border border-[#222]">
            <table className="w-full text-left border-collapse bg-[#161616]">
              <thead>
                <tr className="border-b border-[#222] bg-[#1c1c1c]">
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#666] w-1/4">Jméno jedince</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#666] w-2/4">Zkoušky / Tituly</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#666] w-1/4">Poznámka</th>
                </tr>
              </thead>
              <tbody>
                {litter.puppies.map((puppy, index) => (
                  <tr key={index} className="border-b border-[#222]/50 hover:bg-[#1a1a1a] transition-colors">
                    <td className="p-4 text-sm font-semibold text-white">{puppy.name}</td>
                    <td className="p-4 text-sm text-[#a0a0a0] leading-relaxed">{puppy.exams}</td>
                    <td className="p-4 text-sm text-[#666] italic">{puppy.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}