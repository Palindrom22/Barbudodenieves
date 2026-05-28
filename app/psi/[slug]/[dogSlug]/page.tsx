'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
export const dynamic = 'force-dynamic';
const dogsDetailedData: Record<string, {
  name: string;
  breed: string;
  breedSlug: string;
  born: string;
  father?: string;  // Přidáno
  mother?: string;  // Přidáno
  health: string;
  exams: string;
  shows: string;
  description: string;
  mainImage: string;
  gallery: string[];
  litters?: { name: string; slug: string }[];
}> = {
  amy: {
    name: "Amy Lady Caniley",
    breed: "Maďarský krátkosrstý ohař",
    breedSlug: "madarsky-ohar",
    born: "26. 1. 2019",
    father: "Gyoztes Feketicsi Vada'sz",
    mother: "Cailey Princess Coco Lotte",
    health: "DKK A/A, DLK 0/0",
    exams: "ZV I.C, PZ I.C, ZVP I.c, LZ I.c, VZ I.c",
    shows: "CZ šampion krásy, Klubová výstava Zákupy 2021 - V2/16 r.CAC, Klubová výstava Zákupy 2022 - V1/15 CAC",
    description: "Amy je srdcem naší stanice a fena, která u nás všechno odstartovala. Původně jsme si ji pořídili jako parťáka na běhání a výlety, ale její přirozený talent nás rychle přesvědčil, že v ní dřímá mnohem víc. Právě díky ní jsme objevili svět lovecké kynologie a propadli mu natolik, že vznikla naše vlastní chovatelská stanice. Je to přesně ta úžasná, bláznivá a neúnavná 'maďarka', jakou si milovník ohařů představuje. I když své první dva vrhy odchovala ještě pod svou rodnou stanicí Caniley, pro nás je to právě ona, kdo položil základy Barbudo de Nieves.\n\nPráce a povaha: Jejím největším živlem je pole. Právě tam vyniká její chuť do práce, rychlost a systematické hledání. Jakmile ale sundá pracovní obojek, stává se z ní ten největší rodinný mazel, který nejšťastněji odpočívá v těsné blízkosti své smečky.",
    mainImage: "/images/amy.jpg",
    gallery: [
      "/images/amy.jpg", 
      "/images/amy_gal_1.jpg",
      "/images/amy_gal_2.jpg",
      "/images/amy_gal_3.jpg",
      "/images/amy_gal_4.jpg",
      "/images/amy_gal_5.jpg"
    ],
    litters: [
      { name: "Vrh C (2022)", slug: "vrh-c" },
      { name: "Vrh E (2023)", slug: "vrh-e" },
    ]
  },
  etna: {
    name: "Etna od Pálavských vršků",
    breed: "Český fousek",
    breedSlug: "cesky-fousek",
    born: "2022",
    health: "Všechna vyšetření v pořádku",
    exams: "ZV, PZ, VP (vše I. cena)",
    shows: "Výborná",
    description: "Etna je mladá, nadějná fena českého fouska. Je nesmírně ovladatelná a klidná, což ji předurčuje pro precizní práci v revíru.",
    mainImage: "/images/etna.jpg",
    gallery: ["/images/etna.jpg"],
    litters: [{ name: "Vrh A Barbudo de Nieves (2026)", slug: "vrh-a-fousek" }]
  }
};

export default function DogDetailPage({ params }: { params: Promise<{ slug: string; dogSlug: string }> }) {
  const resolvedParams = use(params);
  const dog = dogsDetailedData[resolvedParams.dogSlug];
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!dog) notFound();

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % dog.gallery.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + dog.gallery.length) % dog.gallery.length);

  return (
    <main className="min-h-screen bg-[#121212] text-white py-20 px-4 md:px-8 pt-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-[#666] mb-8 space-x-2">
          <Link href="/psi" className="hover:text-[#c5a880] transition-colors">Naše plemena</Link>
          <span>/</span>
          <Link href={`/psi/${dog.breedSlug}`} className="hover:text-[#c5a880] transition-colors">{dog.breed}</Link>
          <span>/</span>
          <span className="text-[#c5a880] font-medium">{dog.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="relative h-[400px] md:h-[550px] w-full overflow-hidden rounded-xl shadow-2xl border border-[#222] bg-[#0a0a0a] p-4 group">
              <Image src={dog.gallery[currentSlide]} alt={dog.name} fill className="object-contain transition-all duration-500" priority />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-2 text-white">{dog.name}</h1>
              <p className="text-base uppercase tracking-[0.2em] text-[#c5a880] italic font-medium">{dog.breed}</p>
            </div>
            
            <p className="text-[#a0a0a0] text-lg leading-relaxed font-light whitespace-pre-line">{dog.description}</p>
            
            <div className="border-t border-[#222] pt-8 space-y-4">
              {[
                { label: "Narození", val: dog.born },
                { label: "Otec", val: dog.father },
                { label: "Matka", val: dog.mother },
                { label: "Zdraví", val: dog.health },
                { label: "Zkoušky", val: dog.exams },
                { label: "Výstavy", val: dog.shows }
              ].filter(item => item.val).map((item, i) => (
                <div key={i} className="flex border-b border-[#222]/50 pb-3 text-sm">
                  <span className="w-32 text-[#666] uppercase tracking-widest text-[10px] font-bold flex-shrink-0">{item.label}</span>
                  <span className="text-white font-light">{item.val}</span>
                </div>
              ))}
            </div>
            
            {dog.litters && (
              <div className="pt-4">
                <h3 className="text-sm uppercase tracking-widest text-[#c5a880] mb-4 font-bold">Odchované vrhy feny</h3>
                <div className="flex flex-wrap gap-3">
                  {dog.litters.map((litter, i) => (
                    <Link key={i} href={`/psi/${resolvedParams.slug}/${resolvedParams.dogSlug}/${litter.slug}`} className="px-4 py-2 border border-[#333] rounded-full text-xs hover:bg-[#c5a880] hover:text-black hover:border-[#c5a880] transition-all duration-300 uppercase tracking-wider">
                      {litter.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}