// app/psi/page.tsx

// Pokud je "components" v kořeni vedle "app", cesta je:
import Dogs from '../../components/Dogs'; 

export default function PsiPage() {
  return (
    <main className="min-h-screen bg-[#121212] pt-28">
      <Dogs />
    </main>
  );
}