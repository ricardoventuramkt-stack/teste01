import React, { useState, useRef } from 'react';
import { Button } from './Button';
import { editImageWithGemini } from '../services/geminiService';
import { Upload, Wand2, RefreshCcw, Image as ImageIcon } from 'lucide-react';

export const DreamEditor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResultImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!image || !prompt) return;

    setLoading(true);
    setResultImage(null);
    try {
      const enhancedPrompt = `Edit this image to reflect a vintage psychoanalytic dreamscape context: ${prompt}. Keep the style sepia, grainy, and mysterious like an early 20th century photograph.`;
      const generated = await editImageWithGemini(image, enhancedPrompt);
      setResultImage(generated);
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao processar sua imagem. Verifique a API Key.');
    } finally {
      setLoading(false);
    }
  };

  const predefinedPrompts = [
    "Adicione uma aura surrealista",
    "Transforme em uma fotografia de 1920",
    "Remova o fundo e coloque um gabinete de Freud",
    "Adicione símbolos de relógios derretendo"
  ];

  return (
    <section className="py-24 bg-vintage-900 text-vintage-100 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
             backgroundImage: `radial-gradient(#855331 1px, transparent 1px)`,
             backgroundSize: '30px 30px'
        }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/2 space-y-6">
                <div className="inline-block bg-vintage-800 px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-sm border border-vintage-600">
                    Laboratório Onírico (BETA)
                </div>
                <h2 className="text-4xl font-serif font-bold text-vintage-50">
                    Visualize o Inconsciente
                </h2>
                <p className="text-vintage-200 text-lg leading-relaxed">
                    Utilize nossa ferramenta exclusiva baseada em IA (Gemini 2.5) para reinterpretar imagens pessoais sob uma ótica psicanalítica. Carregue uma foto e peça para "Adicionar um filtro retrô" ou "Criar uma atmosfera de sonho".
                </p>
                
                <div className="space-y-4 pt-4">
                    <label className="block text-sm font-medium text-vintage-300">1. Carregue sua imagem base</label>
                    <div 
                        className="border-2 border-dashed border-vintage-600 hover:border-vintage-400 rounded-sm p-8 text-center cursor-pointer transition-colors bg-vintage-950/50"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            ref={fileInputRef}
                            onChange={handleFileChange} 
                        />
                        {image ? (
                            <div className="flex items-center justify-center gap-2 text-green-400">
                                <ImageIcon size={20} />
                                <span>Imagem carregada! Clique para trocar.</span>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-2 text-vintage-400">
                                <Upload size={32} />
                                <span>Clique para fazer upload (JPG, PNG)</span>
                            </div>
                        )}
                    </div>

                    <label className="block text-sm font-medium text-vintage-300">2. Descreva a transformação</label>
                    <div className="flex flex-col gap-2">
                         <input 
                            type="text" 
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Ex: Transforme em uma pintura a óleo antiga..."
                            className="w-full bg-vintage-950 border border-vintage-700 rounded-sm px-4 py-3 text-vintage-100 focus:outline-none focus:border-vintage-400"
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {predefinedPrompts.map((p, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => setPrompt(p)}
                                    className="text-xs bg-vintage-800 hover:bg-vintage-700 px-2 py-1 rounded-sm text-vintage-300 transition-colors"
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Button 
                        onClick={handleGenerate} 
                        disabled={!image || !prompt || loading}
                        className="w-full mt-4"
                        variant="primary"
                    >
                        {loading ? (
                            <>
                                <RefreshCcw className="animate-spin" size={20} />
                                Processando Sonho...
                            </>
                        ) : (
                            <>
                                <Wand2 size={20} />
                                Gerar Interpretação
                            </>
                        )}
                    </Button>
                </div>
            </div>

            <div className="lg:w-1/2 w-full flex flex-col items-center gap-4">
                 {/* Results Display */}
                 <div className="relative w-full aspect-square max-w-md bg-vintage-950 rounded-sm shadow-2xl border-4 border-vintage-800 p-2 overflow-hidden">
                    {resultImage ? (
                        <img src={resultImage} alt="Resultado Onírico" className="w-full h-full object-cover sepia animate-in fade-in duration-1000" />
                    ) : image ? (
                        <img src={image} alt="Original" className="w-full h-full object-cover opacity-50 grayscale" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-vintage-700 bg-vintage-900/50">
                            <span className="font-serif italic text-xl">A imagem aparecerá aqui...</span>
                        </div>
                    )}
                    
                    {loading && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20">
                            <div className="text-center">
                                <div className="animate-spin w-12 h-12 border-4 border-vintage-400 border-t-transparent rounded-full mx-auto mb-4"></div>
                                <p className="text-vintage-200 font-serif animate-pulse">Consultando o oráculo digital...</p>
                            </div>
                        </div>
                    )}
                 </div>
                 {resultImage && (
                    <p className="text-vintage-400 text-sm italic text-center max-w-md">
                        "Onde estava o Id, ali estará o Ego." - A interpretação da máquina sobre seu desejo.
                    </p>
                 )}
            </div>

        </div>
      </div>
    </section>
  );
};
