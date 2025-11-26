import React from 'react';
import { Brain, Feather, History, Users } from 'lucide-react';

const modules = [
  {
    icon: <History className="w-8 h-8" />,
    title: "Fundamentos Históricos",
    desc: "As origens da psicanálise na Viena do século XIX e o contexto cultural."
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Teoria do Inconsciente",
    desc: "Estruturas psíquicas: Id, Ego e Superego. Mecanismos de defesa."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Casos Clínicos Clássicos",
    desc: "Estudos aprofundados sobre Dora, O Homem dos Lobos e Pequeno Hans."
  },
  {
    icon: <Feather className="w-8 h-8" />,
    title: "Interpretação de Sonhos",
    desc: "A simbologia onírica e a técnica da associação livre."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="modules" className="py-24 bg-vintage-50 text-vintage-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-vintage-900 mb-6">Módulos do Curso</h2>
            <div className="w-24 h-1 bg-vintage-400 mx-auto mb-6"></div>
            <p className="text-lg text-vintage-700">
                Um currículo desenhado para unir a tradição teórica com a sensibilidade clínica contemporânea.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((mod, idx) => (
                <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-vintage-200 hover:border-vintage-400 hover:shadow-md transition-all group">
                    <div className="text-vintage-600 mb-4 group-hover:text-vintage-800 transition-colors bg-vintage-100 w-16 h-16 rounded-full flex items-center justify-center">
                        {mod.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3">{mod.title}</h3>
                    <p className="text-vintage-600 leading-relaxed text-sm">
                        {mod.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
