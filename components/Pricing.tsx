import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-vintage-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-sm shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-3/5 p-12 flex flex-col justify-center space-y-6">
                <h2 className="text-3xl font-serif font-bold text-vintage-900">
                    Investimento no Conhecimento
                </h2>
                <p className="text-vintage-700">
                    Garanta sua vaga na próxima turma. Acesso vitalício ao material e atualizações futuras.
                </p>
                <ul className="space-y-3">
                    {[
                        "Certificado de Conclusão 120h",
                        "Acesso à Ferramenta de Sonhos (IA)",
                        "Material Didático em PDF (Estilo Clássico)",
                        "Mentoria Quinzenal em Grupo",
                        "Comunidade Exclusiva de Analistas"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-vintage-800">
                            <CheckCircle2 size={20} className="text-vintage-600" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="md:w-2/5 bg-vintage-800 p-12 text-vintage-100 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-20"></div>
                <div className="relative z-10">
                    <p className="text-vintage-300 uppercase tracking-widest text-sm font-bold mb-2">Oferta Limitada</p>
                    <div className="text-5xl font-serif font-bold mb-1">R$ 997</div>
                    <p className="text-vintage-400 text-sm mb-8">ou 12x de R$ 99,70</p>
                    <Button size="lg" className="w-full bg-vintage-50 text-vintage-900 hover:bg-white hover:scale-105">
                        Matricular-se
                    </Button>
                    <p className="text-xs text-vintage-400 mt-4">Garantia de 7 dias incondicional</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
