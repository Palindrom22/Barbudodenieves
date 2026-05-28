import Image from 'next/image';
import Link from 'next/link';

const breedsData = [
  {
    slug: 'madarsky-ohar',
    breedName: "Maďarský krátkosrstý ohař",
    subTitle: "Vizsla (RVP)",
    description: "Elegantní, energické a vysoce inteligentní lovecké plemeno s neutuchající chutí do práce a hlubokou oddaností své rodině. Zakladatelka našeho chovu.",
    image: "/images/Amy.jpg",
  },
  {
    slug: 'cesky-fousek',
    breedName: "Český fousek",
    subTitle: "Tradiční národní plemeno",
    description: "Hrubosrstý ohař s typickým vousem, rozvážnou povahou, vynikající ovladatelností a vrozenou vášní pro práci v revíru, na poli i ve vodě.",
    image: "/images/Etna.jpg",
  }
];

export default function Dogs() {
  return (
    <section className="w-full bg-[#121212] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Hlavní nadpis sekce */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 uppercase tracking-wider">
            Plemena, kterým jsme propadli
          </h2>
          <div className="w-24 h-1 bg-[#c5a880] mx-auto"></div>
        </div>

        {/* Karty plemen */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {breedsData.map((breed) => (
            <div 
              key={breed.slug}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#222] shadow-xl hover:border-[#333] transition-all duration-300 flex flex-col group"
            >
              {/* Obrázek s jemným zoom efektem */}
              <div className="relative h-80 w-full overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={breed.image}
                  alt={breed.breedName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Textový obsah karty */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#c5a880] font-medium block">
                    {breed.subTitle}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#c5a880] transition-colors">
                    {breed.breedName}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed font-light">
                    {breed.description}
                  </p>
                </div>

                {/* Tlačítko pro vstup do plemene */}
                <div className="pt-6">
                  <Link 
                    href={`/psi/${breed.slug}`}
                    className="inline-block w-full text-center bg-transparent border border-[#333] text-white text-xs uppercase tracking-wider py-3 px-6 rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-semibold"
                  >
                    Prohlédnout psy a vrhy
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}