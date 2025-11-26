import React from 'react';
import { Button } from './Button';
import { BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-vintage-100 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Texture/Overlay */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png")`,
        }}></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-center md:text-left space-y-6">
                <div className="inline-block border-b-2 border-vintage-500 pb-1 mb-2">
                    <span className="text-vintage-600 uppercase tracking-widest text-sm font-bold">Turma 2025 Aberta</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif text-vintage-900 leading-tight">
                    Aprofunde-se no <span className="italic text-vintage-700">Inconsciente</span>
                </h1>
                <p className="text-xl text-vintage-700 font-light leading-relaxed max-w-lg mx-auto md:mx-0">
                    Uma jornada completa pelos fundamentos da psicanálise clássica, de Freud a Lacan. Redescubra a alma humana através dos tempos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                    <Button size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                        Inscreva-se Agora
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}>
                        <BookOpen size={20} />
                        Ver Conteúdo
                    </Button>
                </div>
            </div>
            
            <div className="md:w-1/2 relative">
                <div className="relative z-10 p-4 bg-white/50 backdrop-blur-sm shadow-2xl rounded-sm transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="https://picsum.photos/600/800?grayscale" 
                        alt="Retrato Psicanálise" 
                        className="w-full h-auto rounded-sm sepia brightness-90 contrast-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-vintage-900/80 text-vintage-100 p-4 text-center font-serif italic">
                        "O sonho é a estrada real para o inconsciente."
                    </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-vintage-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-vintage-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
            </div>
        </div>
    </div>
  );
};
