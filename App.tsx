import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DreamEditor } from './components/DreamEditor';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed w-full z-50 bg-vintage-50/90 backdrop-blur-md border-b border-vintage-200 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="text-2xl font-serif font-bold text-vintage-900 flex items-center gap-2">
                <span className="w-8 h-8 bg-vintage-800 rounded-full flex items-center justify-center text-vintage-100 font-sans text-sm">Ψ</span>
                Psicanálise Ancestral
            </div>
            <div className="hidden md:flex gap-8 text-vintage-800 font-medium">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-vintage-600 transition-colors">Início</button>
                <button onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-vintage-600 transition-colors">Módulos</button>
                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-vintage-600 transition-colors">Preço</button>
            </div>
            <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-vintage-800 text-vintage-100 px-4 py-2 rounded-sm font-serif hover:bg-vintage-700 transition-colors"
            >
                Matrícula
            </button>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        <Hero />
        <Features />
        <DreamEditor />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};

export default App;
