'use client';
import { use, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
export const dynamic = 'force-dynamic';
const DATA: any = {
  'penezenka-etna': { name: 'Kožená peněženka - Motiv Etna', category: 'Peněženky', price: 800, images: ['/images/Penezenka_skladaci.png'], variants: ['Hnědá'], type: 'buttons' },
  'penezenka-amy': { name: 'Kožená peněženka - Motiv Amy', category: 'Peněženky', price: 1290, images: ['/images/Penezenka_Amy2.png', '/images/Penezenka_Amy3.png'], variants: ['Přírodní', 'Fialová', 'Hnědá', 'Černá', 'Červená', 'Zelená', 'Modrá'], type: 'buttons' },
  'penezenka-alfred': { name: 'Kožená peněženka - Motiv Alfred', category: 'Peněženky', price: 1200, images: ['/images/Penezenka_Alfred.jpeg', '/images/Penezenka_Alfred2.jpeg'], variants: ['Hnědá', 'Černá', 'Žlutá', 'Modrá', 'Červená'], type: 'buttons' },
  'znamka-plemena': { name: 'Psí známka - Výběr plemene', category: 'Psí známky', price: 300, images: ['/images/obojek_znamka.jpeg', '/images/Psi_znamka.png'], variants: ['Český fousek ', 'Bernský honič'], type: 'select', map: { 'Bernský honič': 0, 'Český fousek': 1 } },
  'obojek-kozeny': { name: 'Kožený obojek', category: 'Obojky', price: 650, images: ['/images/Obojek_dobrman.jpeg'], variants: ['S', 'M', 'L'], type: 'buttons' },
  'obojek-barvarsky': { name: 'Barvářský obojek', category: 'Obojky', price: 750, images: ['/images/obojek_znamka.jpeg'], variants: ['Hnědá'], type: 'buttons' }
};

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const p = DATA[slug];
  if (!p) return notFound();

  const [idx, setIdx] = useState(0);
  const [variant, setVariant] = useState(p.variants?.[0]);

  useEffect(() => { setIdx(0); setVariant(p.variants?.[0]); }, [slug]);

  return (
    <main className="min-h-screen bg-[#121212] text-white pt-32 px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <nav className="mb-8 text-sm flex gap-2 text-[#666]">
          <Link href="/eshop" className="hover:text-[#c5a880]">E-shop</Link>
          <span>/</span>
          <Link href={`/eshop?cat=${p.category}`} className="hover:text-[#c5a880]">{p.category}</Link>
          <span>/</span>
          <span className="text-[#c5a880]">{p.name}</span>
        </nav>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative h-[500px] w-full rounded-xl border border-[#222] bg-[#0a0a0a] overflow-hidden">
              <Image src={p.images[idx]} alt={p.name} fill className="object-contain p-4" />
            </div>
            <div className="flex gap-2 mt-4">
              {p.images.map((img: string, i: number) => (
                <button key={i} onClick={() => setIdx(i)} className={`w-20 h-20 border-2 rounded-lg ${idx === i ? 'border-[#c5a880]' : 'border-[#333]'}`}>
                  <Image src={img} width={80} height={80} alt="detail" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl font-serif font-bold">{p.name}</h1>
            <p className="text-3xl text-[#c5a880]">{p.price} Kč</p>
            {p.type === 'select' ? 
              <select onChange={(e) => {setVariant(e.target.value); if(p.map) setIdx(p.map[e.target.value])}} className="w-full bg-[#161616] p-3 rounded-lg border border-[#333]">{p.variants.map((v: string) => <option key={v} value={v}>{v}</option>)}</select>
              : <div className="flex flex-wrap gap-2">{p.variants.map((v: string) => <button key={v} onClick={() => setVariant(v)} className={`px-4 py-2 rounded-lg border ${variant === v ? 'border-[#c5a880] bg-[#c5a880]/20' : 'border-[#333]'}`}>{v}</button>)}</div>
            }
            <Link href={`mailto:tvuj@email.cz?subject=Objednávka: ${p.name} (${variant})`} className="block w-full text-center py-4 bg-[#c5a880] text-black font-bold uppercase rounded-lg">Objednat</Link>
          </div>
        </div>
      </div>
    </main>
  );
}