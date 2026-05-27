'use client';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const PRODUCTS = [
  { slug: 'penezenka-etna', name: 'Kožená peněženka - Motiv Etna', category: 'Peněženky', price: 800, colors: ['Hnědá'], image: '/images/Penezenka_skladaci.png' },
  { slug: 'penezenka-amy', name: 'Kožená peněženka - Motiv Amy', category: 'Peněženky', price: 1290, colors: ['Přírodní', 'Fialová', 'Hnědá', 'Černá', 'Červená', 'Zelená', 'Modrá'], image: '/images/Penezenka_Amy2.png' },
  { slug: 'penezenka-alfred', name: 'Kožená peněženka - Motiv Alfred', category: 'Peněženky', price: 1200, colors: ['Hnědá', 'Černá', 'Žlutá', 'Modrá', 'Červená'], image: '/images/Penezenka_Alfred.jpeg' },
  { slug: 'znamka-plemena', name: 'Psí známka - Výběr plemene', category: 'Psí známky', price: 300, colors: [], image: '/images/obojek_znamka.jpeg' },
  { slug: 'obojek-kozeny', name: 'Kožený obojek', category: 'Obojky', price: 650, colors: ['Hnědá'], image: '/images/Obojek_dobrman.jpeg' },
  { slug: 'obojek-barvarsky', name: 'Barvářský obojek', category: 'Obojky', price: 750, colors: ['Hnědá'], image: '/images/obojek_znamka.jpeg' },
  { slug: 'voditko-kozene', name: 'Přepínací kožené vodítko', category: 'Vodítka', price: 1100, colors: ['Hnědá'], image: '/images/obojek_znamka.jpeg' },
];

function EshopContent() {
  const searchParams = useSearchParams();
  const [cat, setCat] = useState(searchParams.get('cat') || 'vse');
  const [color, setColor] = useState('vse');
  const [maxPrice, setMaxPrice] = useState(4000);

  const allAvailableColors = Array.from(new Set(PRODUCTS.flatMap(p => p.colors || []))).filter(Boolean);

  // ZDE JE OPRAVA FILTRACE
  const filtered = PRODUCTS.filter(p => {
    const matchCat = cat === 'vse' || p.category === cat;
    const matchColor = color === 'vse' || (p.colors && p.colors.includes(color));
    const matchPrice = p.price <= maxPrice; // Nyní správně porovnává cenu produktu s nastaveným limitem
    return matchCat && matchColor && matchPrice;
  });

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <aside className="w-full lg:w-64 h-fit bg-[#161616] p-6 rounded-xl border border-[#222] space-y-6">
        <div>
          <label className="text-xs uppercase text-[#666] mb-2 block">Kategorie</label>
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="w-full bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
            <option value="vse">Všechny</option>
            <option value="Peněženky">Peněženky</option>
            <option value="Psí známky">Psí známky</option>
            <option value="Obojky">Obojky</option>
          </select>
        </div>
        <div>
          <label className="text-xs uppercase text-[#666] mb-2 block">Barva</label>
          <select value={color} onChange={(e) => setColor(e.target.value)} className="w-full bg-[#0a0a0a] p-3 rounded-lg border border-[#333]">
            <option value="vse">Všechny</option>
            {allAvailableColors.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs uppercase text-[#666] mb-2 block">Cena do: {maxPrice} Kč</label>
          {/* Ujisti se, že input má správný typ a event */}
          <input 
            type="range" 
            min="0" 
            max="2000" 
            step="100" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(Number(e.target.value))} 
            className="w-full accent-[#c5a880]" 
          />
        </div>
      </aside>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map(p => (
            <div key={p.slug} className="bg-[#161616] border border-[#222] rounded-xl overflow-hidden">
              <div className="relative h-64 w-full"><Image src={p.image} alt={p.name} fill className="object-cover" /></div>
              <div className="p-5">
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-[#c5a880] mb-4">{p.price} Kč</p>
                <Link href={`/eshop/${p.slug}`} className="block text-center py-2 bg-[#222] hover:bg-[#c5a880] rounded">Detail</Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Žádné produkty neodpovídají filtrům.</p>
        )}
      </div>
    </div>
  );
}

export default function EshopPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-10">Internetový obchod</h1>
        <Suspense fallback={<div>Načítání...</div>}>
          <EshopContent />
        </Suspense>
      </div>
    </main>
  );
}