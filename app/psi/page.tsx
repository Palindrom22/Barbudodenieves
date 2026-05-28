import Dogs from '../../components/Dogs';

export default function PsiPage() {
  return (
    <main className="min-h-screen bg-[#121212] pt-28">
      {/* Načte karty psů stejně jako na úvodní straně */}
      <Dogs />
    </main>
  );
}