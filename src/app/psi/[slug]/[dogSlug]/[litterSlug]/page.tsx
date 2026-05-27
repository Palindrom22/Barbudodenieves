'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const littersData: Record<string, {
  title: string;
  date: string;
  father: string;
  mother: string;
  motherSlug: string;
  breedSlug: string;
  breedName: string;
  description: string;
  mainImage: string;
  puppies: { name: string; exams: string; note: string; slug?: string }[];
}> = {
  'vrh-c': {
    title: "Vrh C (2022)",
    date: "2022",
    father: "Krycí pes", 
    mother: "Amy Lady Caniley",
    motherSlug: "amy",
    breedSlug: "madarsky-ohar",
    breedName: "Maďarský ohař",
    description: "Náš přelomový odchov pod mateřskou stanicí Caniley.",
    mainImage: "/images/Amy_plakatek.jpg",
    puppies: [
      { name: "Caps Lock Caniley", exams: "ZV, PZ, ZVP, BZ", note: "Chovný pes" },
      { name: "Clemens Hugo Caniley", exams: "ZV, PZ", note: "Lovecká praxe" },
      { name: "Crazy Boy Caniley", exams: "ZV, PZ, ZVP", note: "Chovný pes" },
      { name: "Cassie Rose Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Coffee Charming Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Cassiopeia Queen Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Caspian Star Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Commander Corki Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Candy Crush Caniley", exams: "—", note: "Rodinný společník" }
    ]
  },
  'vrh-e': {
    title: "Vrh E (2023)",
    date: "2023",
    father: "Zahraniční krytí",
    mother: "Amy Lady Caniley",
    motherSlug: "amy",
    breedSlug: "madarsky-ohar",
    breedName: "Maďarský ohař",
    description: "Úspěšný vrh E, potomci sbírají tituly po Evropě.",
    mainImage: "/images/Amy_plakatek2.jpg",
    puppies: [
      { name: "Euphoric Edward Pup Caniley", exams: "ZV, PZ, CZ Junior šampion krásy", note: "Úspěný na poli výstavním i pracovním"},
      { name: "Earth Lela Caniley", exams: "SK, ZV, PZ, BZ", note: "Krásna a šikovná po mamince"},
      { name: "Express Maya Caniley", exams: "ZV, PZ", note: "Výborná ovladatelnost" },
      { name: "Endless Waiting Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Elliot Houdini Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Emergency Terra Caniley", exams: "—", note: "Rodinný společník" },
      { name: "Exciting Elvis Caniley", exams: "—", note: "Rodinný společník" }
    ]
  },
  'vrh-a-fousek': {
    title: "Vrh A (Barbudo de Nieves)",
    date: "2025",
    father: "Krycí pes",
    mother: "Etna od Pálavských vršků",
    motherSlug: "etna",
    breedSlug: "cesky-fousek",
    breedName: "Český fousek",
    description: "První vrh českého fouska pod naší stanicí.",
    mainImage: "/images/Etina_plakatek.webp",
    puppies: [
      { name: "Ares Barbudo de Nieves", exams: "—", note: "Pes", slug: "ares-barbudo-de-nieves" },
      { name: "Aragorn Barbudo de Nieves", exams: "—", note: "Pes", slug: "aragorn-barbudo-de-nieves" },
      { name: "Alfred Barbudo de Nieves", exams: "—", note: "Pes", slug: "alfred-barbudo-de-nieves" },
      { name: "Aatrox Barbudo de Nieves", exams: "—", note: "Pes", slug: "aatrox-barbudo-de-nieves" },
      { name: "Art Barbudo de Nieves", exams: "—", note: "Pes", slug: "art-barbudo-de-nieves" },
      { name: "Arwen Barbudo de Nieves", exams: "—", note: "Fenka", slug: "arwen-barbudo-de-nieves" },
      { name: "Atacama Barbudo de Nieves", exams: "—", note: "Fenka", slug: "atacama-barbudo-de-nieves" },
      { name: "Alina Barbudo de Nieves", exams: "—", note: "Fenka", slug: "alina-barbudo-de-nieves" }
    ]
  }
};

export default function LitterDetailPage({ params }: { params: Promise<{ slug: string; dogSlug: string; litterSlug: string }> }) {
  const resolvedParams = use(params);
  const litter = littersData[resolvedParams.litterSlug];

  if (!litter) notFound();

  return (
    <main className="min-h-screen bg-[#121212] text-white py-20 px-4 md:px-8 pt-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-[#666] mb-8 space-x-2">
          <Link href="/psi" className="hover:text-[#c5a880] transition-colors">Naše plemena</Link>
          <span>/</span>
          <Link href={`/psi/${litter.breedSlug}`} className="hover:text-[#c5a880] transition-colors">{litter.breedName}</Link>
          <span>/</span>
          <span className="text-[#c5a880] font-medium">{litter.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2">
            <div className="relative h-[450px] md:h-[650px] w-full overflow-hidden rounded-xl shadow-2xl border border-[#222] bg-[#0a0a0a] p-2">
              <Image src={litter.mainImage} alt={litter.title} fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2 text-white">{litter.title}</h1>
            </div>
            <p className="text-[#a0a0a0] text-lg leading-relaxed font-light">{litter.description}</p>
          </div>
        </div>

        <div className="mt-16 border-t border-[#222] pt-12">
          <h2 className="text-2xl font-bold font-serif mb-6 uppercase tracking-wider text-[#c5a880]">Potomci z tohoto spojení</h2>
          <div className="overflow-x-auto rounded-xl border border-[#222]">
            <table className="w-full text-left border-collapse bg-[#161616]">
              <thead>
                <tr className="border-b border-[#222] bg-[#1c1c1c]">
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#666]">Jméno jedince</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#666]">Zkoušky</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-[#666]">Poznámka</th>
                </tr>
              </thead>
              <tbody>
                {litter.puppies.map((puppy, index) => (
                  <tr key={index} className="border-b border-[#222]/50 hover:bg-[#1a1a1a] transition-colors">
                    <td className="p-4 text-sm font-semibold text-white">
                      {puppy.slug ? (
                        <Link href={`/stenata/${puppy.slug}`} className="text-[#c5a880] hover:underline transition-all">
                          {puppy.name} &rarr;
                        </Link>
                      ) : (
                        puppy.name
                      )}
                    </td>
                    <td className="p-4 text-sm text-[#a0a0a0]">{puppy.exams}</td>
                    <td className="p-4 text-sm text-[#666]">{puppy.note}</td>
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