import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Music, Zap, Sparkles, Star, ChevronRight, Shield, Heart, Mail, X, Loader2, ArrowRight } from 'lucide-react';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    const savedEmail = localStorage.getItem('lumina_email');
    if (savedEmail) {
      navigate('/app');
    } else {
      setShowEmailModal(true);
    }
  };

  const handleSaveEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    setIsLoading(true);
    
    // Simulate a small delay for premium feel
    setTimeout(() => {
      localStorage.setItem('lumina_email', email);
      setIsLoading(false);
      setShowEmailModal(false);
      navigate('/app');
    }, 800);
  };

  const features = [
    {
      icon: BookOpen,
      title: "Bíblia Imersiva",
      desc: "Leitura fluida, marcações inteligentes e acompanhamento de progresso.",
      color: "text-orange"
    },
    {
      icon: Sparkles,
      title: "Orações via IA",
      desc: "Orações personalizadas baseadas no seu estado emocional atual.",
      color: "text-gold"
    },
    {
      icon: Music,
      title: "Louvor & Adoração",
      desc: "Player integrado com sugestões musicais para elevar sua alma.",
      color: "text-rose-500"
    },
    {
      icon: Zap,
      title: "Jornadas Espirituais",
      desc: "Desafios diários de 7 a 30 dias para fortalecer sua fé.",
      color: "text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-paper dark:bg-black text-ink dark:text-white font-sans selection:bg-gold/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-center backdrop-blur-sm bg-paper/50 dark:bg-black/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-gold to-orange rounded-lg shadow-lg"></div>
          <span className="font-serif font-bold text-xl tracking-tight">Lumina</span>
        </div>
        <button 
          onClick={handleStart}
          className="px-5 py-2.5 rounded-full bg-ink dark:bg-white text-white dark:text-ink font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg"
        >
          Entrar
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-gold/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-orange/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 mb-6">
            <Star size={12} className="text-gold fill-gold" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-subtle">Sua jornada diária</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-black leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-ink to-stone-600 dark:from-white dark:to-stone-400">
            Paz para a alma,<br />
            Luz para o caminho.
          </h1>
          
          <p className="text-lg md:text-xl text-subtle max-w-xl mx-auto mb-10 leading-relaxed">
            Um companheiro espiritual completo. Medite na Bíblia, receba orações personalizadas e encontre propósito diário com o poder da tecnologia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleStart}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold to-orange text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Começar Agora <ChevronRight size={20} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-surface dark:bg-stone-900 text-ink dark:text-white rounded-2xl font-bold text-lg shadow-md border border-stone-100 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800 transition-all">
              Saber mais
            </button>
          </div>

          {/* App Preview Mockup */}
          <div className="mt-16 relative mx-auto max-w-[300px] md:max-w-[800px]">
            <div className="relative z-10 bg-surface dark:bg-stone-900 rounded-[2.5rem] p-2 shadow-2xl border border-stone-100 dark:border-stone-800 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
               <div className="rounded-[2rem] overflow-hidden bg-paper dark:bg-black h-[400px] md:h-[500px] relative">
                  {/* Mock UI Content */}
                  <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-ink to-transparent opacity-80 z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop" 
                    className="w-full h-full object-cover opacity-80" 
                    alt="App Preview" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent z-20">
                     <h3 className="text-white font-serif text-3xl font-bold">Boa noite, Viajante.</h3>
                     <p className="text-white/80 mt-2">Sua oração da noite está pronta.</p>
                  </div>
               </div>
            </div>
            
            {/* Decorative Elements around Mockup */}
            <div className="absolute top-1/2 -right-12 md:-right-20 bg-surface dark:bg-stone-800 p-4 rounded-2xl shadow-xl animate-float-up" style={{animationDelay: '1s'}}>
               <Heart className="text-red-500 fill-red-500" size={24} />
            </div>
            <div className="absolute bottom-20 -left-6 md:-left-12 bg-surface dark:bg-stone-800 p-4 rounded-2xl shadow-xl animate-float-up" style={{animationDelay: '0.5s'}}>
               <Shield className="text-gold fill-gold" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-surface dark:bg-stone-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-paper dark:bg-stone-900 p-8 rounded-[2rem] border border-stone-100 dark:border-stone-800 hover:border-gold/50 transition-colors group">
                <div className={`w-14 h-14 rounded-2xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-subtle text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Sparkles className="mx-auto text-gold mb-6" size={32} />
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-8">
            "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho."
          </h2>
          <p className="text-subtle font-bold tracking-widest uppercase text-sm">Salmos 119:105</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 pb-32">
        <div className="max-w-4xl mx-auto bg-ink dark:bg-stone-800 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange rounded-full blur-[100px] opacity-30"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Comece sua jornada hoje.</h2>
            <p className="text-stone-300 max-w-lg mx-auto mb-10">
              Junte-se a milhares de pessoas encontrando paz e propósito diário com o Lumina. Totalmente gratuito.
            </p>
            <button 
              onClick={handleStart}
              className="px-10 py-4 bg-white text-ink rounded-2xl font-bold text-lg shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Acessar Aplicativo
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12 text-subtle text-sm">
          © {new Date().getFullYear()} Lumina. Feito com fé e tecnologia.
        </div>
      </section>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-md animate-fade-in">
          <div className="bg-surface dark:bg-stone-900 w-full max-w-md p-8 rounded-[2.5rem] shadow-2xl relative animate-slide-up border border-stone-100 dark:border-stone-800">
            <button 
              onClick={() => setShowEmailModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-subtle"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-orange rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange/30">
                <Mail size={32} className="text-white" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-ink dark:text-white mb-2">
                Bem-vindo ao Lumina
              </h3>
              <p className="text-subtle text-sm mb-8 leading-relaxed max-w-xs">
                Para personalizar sua experiência e salvar seu progresso, precisamos saber quem é você.
              </p>

              <form onSubmit={handleSaveEmail} className="w-full space-y-4">
                <div className="relative group">
                   <div className="absolute inset-0 bg-gradient-to-r from-gold to-orange rounded-2xl opacity-0 group-focus-within:opacity-100 blur transition-opacity duration-300 -z-10"></div>
                   <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-4 bg-paper dark:bg-stone-950 rounded-2xl border-2 border-transparent outline-none text-ink dark:text-white font-medium placeholder:text-stone-400 focus:bg-white dark:focus:bg-stone-900 transition-all shadow-inner"
                    autoFocus
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-ink dark:bg-white text-white dark:text-ink rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>Continuar <ArrowRight size={20} /></>
                  )}
                </button>
              </form>

              <p className="mt-6 text-[10px] text-stone-400 uppercase tracking-widest">
                Seus dados estão seguros conosco
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Landing;