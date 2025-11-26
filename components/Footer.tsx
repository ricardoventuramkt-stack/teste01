import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-vintage-950 text-vintage-400 py-12 border-t border-vintage-900">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-serif text-2xl text-vintage-200 mb-4">Psicanálise Ancestral</h3>
        <p className="mb-8 max-w-lg mx-auto text-sm">
            "Não somos apenas o que pensamos ser. Somos mais; somos também, o que lembramos e aquilo de que nos esquecemos."
        </p>
        <div className="flex justify-center gap-8 text-sm uppercase tracking-widest mb-8">
            <a href="#" className="hover:text-vintage-200 transition-colors">Termos</a>
            <a href="#" className="hover:text-vintage-200 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-vintage-200 transition-colors">Contato</a>
        </div>
        <p className="text-xs opacity-50">&copy; 2025 Instituto de Estudos Psicanalíticos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
