'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Databáze profilů obsahuje pouze štěňata z Vrhu A (Barbudo de Nieves)
const puppiesData: Record<string, {
  name: string;
  litter: string;
  litterLink: string; 
  born: string;
  sex: string;
  health: string;
  exams: string;
  shows: string;
  description: string;
  mainImage: string;
}> = {
  'ares-barbudo-de-nieves': {
    name: "Ares Barbudo de Nieves",
    litter: "Vrh A (Barbudo de Nieves)",
    litterLink: "/psi/cesky-fousek/etna/vrh-a-fousek",
    born: "2025",
    sex: "Pes",
    health: "V přípravě / štěně",
    exams: "V přípravě",
    shows: "V přípravě",
    description: "Ares je jedním z prvních štěnět z naší chovatelské stanice, které se vydalo na mezinárodní cestu. Našel svůj nový domov v Německu, kde se stane plnohodnotným členem milující rodiny a spolehlivým pomocníkem při myslivosti. Jsme pyšní, že Barbudo de Nieves zanechává svou stopu i za hranicemi a přejeme Aresovi i jeho nové rodině spoustu společných zážitků a úspěchů.",
    mainImage: "/images/Etina_plakatek.webp"
  },
  'aragorn-barbudo-de-nieves': {
    name: "Aragorn Barbudo de Nieves",
    litter: "Vrh A (Barbudo de Nieves)",
    litterLink: "/psi/cesky-fousek/etna/vrh-a-fousek",
    born: "2025",
    sex: "Pes",
    health: "V přípravě / štěně",
    exams: "V přípravě",
    shows: "V přípravě",
    description: "Aragorn Barbudo de Nieves se v novém domově setkal se svým dědečkem Coudym. A setkání to bylo vskutku osudové. Aragorn jako by dědečkovi z oka vypadl – ta podoba je naprosto neuvěřitelná! A nebyla to náhoda. Jsme hrdí, že Barbudo de Nieves nese odkaz Coudyho dál a přejeme Aragornovi a jeho rodině spoustu společných radostí a úspěchů.",
    mainImage: "/images/Etina_plakatek.webp"
  },
  'alfred-barbudo-de-nieves': {
    name: "Alfred Barbudo de Nieves",
    litter: "Vrh A (Barbudo de Nieves)",
    litterLink: "/psi/cesky-fousek/etna/vrh-a-fousek",
    born: "2025",
    sex: "Pes",
    health: "V přípravě / štěně",
    exams: "V přípravě",
    shows: "V přípravě",
    description: "Alfred Barbudo de Nieves mohl do svého nového domova skoro dojít pěšky! Nakonec se stal milovaným členem rodiny u mojí kolegyně z práce, což nám všem udělalo obrovskou radost. Alfred je tak stále nablízku a často k nám chodí na hlídání a mazlení, což si obě strany nesmírně užívají. Jsme vděční, že Barbudo de Nieves zůstává součástí života svých štěňat a přejeme Alfredovi a jeho rodině spoustu společných radostí a úspěchů.",
    mainImage: "/images/Etina_plakatek.webp"
  },
  'aatrox-barbudo-de-nieves': {
    name: "Aatrox Barbudo de Nieves",
    litter: "Vrh A (Barbudo de Nieves)",
    litterLink: "/psi/cesky-fousek/etna/vrh-a-fousek",
    born: "2025",
    sex: "Pes",
    health: "V přípravě / štěně",
    exams: "V přípravě",
    shows: "V přípravě",
    description: "Aatrox, náš malý průzkumník, si své jméno vysloužil neuvěřitelnou náhodou. Cestou na kontrolu den po porodu se nám ho totiž podařilo zapomenout doma! Od té doby mu neřekneme jinak než Kevin. I když se oficiálně jmenuje Aatrox, jeho přezdívka ho provází na každém kroku. Kevin Barbudo de Nieves se v novém domově setkal se svým páníčkem, se kterým dělají první krůčky k loveckému výcviku.",
    mainImage: "/images/Etina_plakatek.webp"
  },
  'art-barbudo-de-nieves': {
    name: "Art Barbudo de Nieves",
    litter: "Vrh A (Barbudo de Nieves)",
    litterLink: "/psi/cesky-fousek/etna/vrh-a-fousek",
    born: "2025",
    sex: "Pes",
    health: "V přípravě / štěně",
    exams: "V přípravě",
    shows: "V přípravě",
    description: "Art, náš temperamentní hoch, se vydal na sever do Jablonce nad Nisou. Našel domov u mimořádně aktivní rodiny, která miluje pohyb v horách stejně jako umění. Protože jeho panička je profesionální fotografka, Art se jistě stane jejím nejčastějším a nejmilejším modelem. Již se těšíme na spoustu krásných fotek, které zachytí jeho radost ze života a společné okamžiky plné dobrodružství.",
    mainImage: "/images/Etina_plakatek.webp"
  },
  'arwen-barbudo-de-nieves': {
    name: "Arwen Barbudo de Nieves",
    litter: "Vrh A (Barbudo de Nieves)",
    litterLink: "/psi/cesky-fousek/etna/vrh-a-fousek",
    born: "2025",
    sex: "Fenka",
    health: "V přípravě / štěně",
    exams: "V přípravě",
    shows: "V přípravě",
    description: "Fenka z prvního vrhu naší chovatelské stanice Barbudo de Nieves po matce Etna od Pálavských vršků.",
    mainImage: "/images/Etina_plakatek.webp"
  },
  'atacama-barbudo-de-nieves': {
    name: "Atacama Barbudo de Nieves",
    litter: "Vrh A (Barbudo de Nieves)",
    litterLink: "/psi/cesky-fousek/etna/vrh-a-fousek",
    born: "2025",
    sex: "Fenka",
    health: "V přípravě / štěně",
    exams: "V přípravě",
    shows: "V přípravě",
    description: "Fenka z prvního vrhu naší chovatelské stanice Barbudo de Nieves po matce Etna od Pálavských vršků.",
    mainImage: "/images/Etina_plakatek.webp"
  },
  'alina-barbudo-de-nieves': {
    name: "Alina Barbudo de Nieves",
    litter: "Vrh A (Barbudo de Nieves)",
    litterLink: "/psi/cesky-fousek/etna/vrh-a-fousek",
    born: "2025",
    sex: "Fenka",
    health: "V přípravě / štěně",
    exams: "V přípravě",
    shows: "V přípravě",
    description: "Fenka z prvního vrhu naší chovatelské stanice Barbudo de Nieves po matce Etna od Pálavských vršků.",
    mainImage: "/images/Etina_plakatek.webp"
  }
};

export default function PuppyDetailPage({ params }: { params: Promise<{ puppySlug: string }> }) {
  const resolvedParams = use(params);
  const puppy = puppiesData[resolvedParams.puppySlug];

  if (!puppy) notFound();

  return (
    <main className="min-h-screen bg-[#121212] text-white py-20 px-4 md:px-8 pt-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-xs uppercase tracking-widest text-[#666] mb-8 space-x-2">
          <Link href="/psi" className="hover:text-[#c5a880] transition-colors">Naše plemena</Link>
          <span>/</span>
          <Link href={puppy.litterLink} className="hover:text-[#c5a880] transition-colors">{puppy.litter}</Link>
          <span>/</span>
          <span className="text-[#c5a880] font-medium">{puppy.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl border border-[#222] bg-[#0a0a0a]">
            <Image src={puppy.mainImage} alt={puppy.name} fill className="object-contain p-2" sizes="(max-width: 768px) 100vw, 50vw" priority />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-serif mb-2 text-white">{puppy.name}</h1>
              <p className="text-sm uppercase tracking-widest text-[#c5a880] font-medium">Odchov CHS Barbudo de Nieves</p>
            </div>
            <p className="text-[#a0a0a0] text-lg leading-relaxed font-light">{puppy.description}</p>
            <div className="border-t border-[#222] pt-6 space-y-4 text-sm">
              {[
                { label: "Pohlaví", val: puppy.sex },
                { label: "Rok narození", val: puppy.born },
                { label: "Zdravotní výsledky", val: puppy.health },
                { label: "Složené zkoušky", val: puppy.exams },
                { label: "Výstavní ocenění", val: puppy.shows },
              ].map((item, i) => (
                <div key={i} className="flex border-b border-[#222]/50 pb-3">
                  <span className="w-36 text-[#666] uppercase tracking-widest text-[10px] font-bold flex-shrink-0">{item.label}</span>
                  <span className="text-white font-light">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}