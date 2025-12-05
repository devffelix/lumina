import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Music, Zap, Sparkles, Star, ChevronRight, Shield, Heart, Mail, X, Loader2, ArrowRight, Check, CreditCard, HelpCircle, Lock } from 'lucide-react';
import { ShalomLogo } from '../components/Layout';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

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
      title: "Sabedoria Diária",
      desc: "Não apenas leia a Bíblia, entenda-a. Planos de leitura que se conectam com sua vida real.",
      color: "text-orange"
    },
    {
      icon: Sparkles,
      title: "Inteligência Espiritual",
      desc: "Nossa IA cria orações personalizadas para sua ansiedade, gratidão ou cansaço.",
      color: "text-gold"
    },
    {
      icon: Music,
      title: "Atmosfera de Paz",
      desc: "Louvores curados para transformar o ambiente da sua casa instantaneamente.",
      color: "text-rose-500"
    },
    {
      icon: Zap,
      title: "Desafios Práticos",
      desc: "Saia da teoria. Jornadas de 7 a 30 dias para mudar hábitos e fortalecer o caráter.",
      color: "text-blue-500"
    }
  ];

  const testimonials = [
    {
      name: "Ana Clara",
      role: "Empresária",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      text: "Eu vivia ansiosa com o trabalho. O 'Detox de Ansiedade' do Shalom mudou a forma como começo meu dia. Vale muito mais do que custa."
    },
    {
      name: "Marcos Paulo",
      role: "Pai de Família",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      text: "Sempre tive dificuldade de manter a constância na leitura. O app torna tudo tão simples e bonito que não consigo mais ficar sem."
    },
    {
      name: "Juliana Costa",
      role: "Estudante",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      text: "Por esse preço anual, é inacreditável. Gasto mais em um lanche do que investi na minha saúde espiritual para o ano todo."
    }
  ];

  return (
    <div className="min-h-screen bg-paper dark:bg-black text-ink dark:text-white font-sans selection:bg-gold/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-paper/80 dark:bg-black/80 border-b border-stone-200/50 dark:border-stone-800/50">
        <div className="flex items-center gap-2">
          <ShalomLogo />
          <span className="font-serif font-bold text-xl tracking-tight hidden md:block">Shalom</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
                const el = document.getElementById('pricing');
                el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm font-bold text-subtle hover:text-ink dark:hover:text-white transition-colors hidden md:block"
          >
            Planos
          </button>
          <button 
            onClick={handleStart}
            className="px-5 py-2.5 rounded-full bg-ink dark:bg-white text-white dark:text-ink font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Acessar Agora
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-orange/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange/10 text-orange-600 dark:text-orange border border-orange/20 mb-8 animate-slide-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Oferta de Lançamento Limitada</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-black leading-[1.05] mb-6 tracking-tight text-ink dark:text-white">
            Transforme o caos em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">Paz Espiritual.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-subtle max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Seu companheiro diário para leitura bíblica, orações guiadas e renovação da mente. Tudo o que você precisa para fortalecer sua fé, por menos de R$ 0,14 ao dia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleStart}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold to-orange text-white rounded-2xl font-bold text-lg shadow-xl shadow-orange/20 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Começar Jornada <ChevronRight size={20} />
            </button>
            <div className="flex items-center gap-2 text-xs font-bold text-subtle uppercase tracking-wider">
                <Shield size={14} className="text-green-500" /> 7 dias de garantia incondicional
            </div>
          </div>

          {/* Social Proof Mini */}
          <div className="mt-8 flex items-center justify-center gap-4 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-paper dark:border-black bg-stone-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="User" />
                    </div>
                ))}
             </div>
             <div className="text-left">
                <div className="flex text-gold">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                </div>
                <p className="text-[10px] font-bold text-subtle">Amado por +2.000 cristãos</p>
             </div>
          </div>
        </div>
      </section>

      {/* App Preview Section - Phone Mockup (CSS Only) */}
      <section className="px-6 mb-24 overflow-hidden pt-10">
         <div className="max-w-6xl mx-auto relative flex justify-center">
            {/* Glow behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-gold/20 blur-[100px] -z-10 rounded-full"></div>

            <div className="relative z-10 transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
                {/* CSS Phone Frame */}
                <div className="w-[300px] h-[620px] md:w-[340px] md:h-[700px] bg-stone-950 rounded-[3.5rem] border-[8px] border-stone-900 shadow-2xl relative overflow-hidden ring-1 ring-white/10">
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-30"></div>
                    
                    {/* Screen Content */}
                    <div className="w-full h-full bg-black rounded-[3rem] overflow-hidden relative">
                         <img 
                           src="https://images.unsplash.com/photo-1507692049790-de58293a469d?q=80&w=1000&auto=format&fit=crop" 
                           alt="App Interface" 
                           className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>

                        {/* Top Status Bar Mock */}
                        <div className="absolute top-5 px-8 w-full flex justify-between items-center text-[10px] text-white font-medium z-20">
                            <span>9:41</span>
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                                <div className="w-4 h-3 border border-white/30 rounded-[2px] relative">
                                    <div className="absolute inset-0.5 bg-white rounded-[1px]"></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* App Content Mock */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 pb-12">
                            {/* Card Verse */}
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-3xl mb-6 shadow-xl animate-slide-up">
                                <span className="bg-gold text-ink text-[10px] font-bold px-2 py-1 rounded-md mb-3 inline-block">Versículo do Dia</span>
                                <h3 className="text-xl font-serif font-bold text-white mb-2 leading-snug">
                                    "A paz que excede todo o entendimento guardará os vossos corações."
                                </h3>
                                <p className="text-stone-300 font-serif italic text-xs">- Filipenses 4:7</p>
                            </div>

                            {/* Bottom Nav Mock */}
                            <div className="flex justify-between items-center px-4 opacity-50">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-6 h-6 bg-white rounded-full opacity-50"></div>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-6 h-6 bg-white rounded-full opacity-20"></div>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-6 h-6 bg-white rounded-full opacity-20"></div>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-6 h-6 bg-white rounded-full opacity-20"></div>
                                </div>
                            </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-30"></div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 px-6 bg-surface dark:bg-stone-900 border-y border-stone-100 dark:border-stone-800">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-ink dark:text-white">
                O mundo está barulhento demais.<br/>
                <span className="text-subtle">Sua alma precisa de silêncio.</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="p-6 rounded-3xl bg-paper dark:bg-black border border-stone-100 dark:border-stone-800">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 text-red-500 rounded-2xl flex items-center justify-center mb-4">
                        <Zap size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Ansiedade Constante</h3>
                    <p className="text-subtle text-sm">O excesso de informações e a correria roubam sua paz e tiram seu sono.</p>
                </div>
                <div className="p-6 rounded-3xl bg-paper dark:bg-black border border-stone-100 dark:border-stone-800">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 text-orange rounded-2xl flex items-center justify-center mb-4">
                        <BookOpen size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Leitura Travada</h3>
                    <p className="text-subtle text-sm">Você tenta ler a Bíblia, mas se sente perdido ou desiste depois de alguns dias.</p>
                </div>
                <div className="p-6 rounded-3xl bg-paper dark:bg-black border border-stone-100 dark:border-stone-800">
                    <div className="w-12 h-12 bg-stone-200 dark:bg-stone-800 text-stone-500 rounded-2xl flex items-center justify-center mb-4">
                        <Music size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Espiritualidade Rasa</h3>
                    <p className="text-subtle text-sm">Sente que sua fé esfriou e precisa de algo prático para reacender a chama.</p>
                </div>
            </div>
         </div>
      </section>

      {/* Solution/Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">O Shalom é o seu refúgio.</h2>
             <p className="text-subtle max-w-xl mx-auto">Tecnologia e fé unidas para blindar sua mente e edificar seu espírito.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-surface dark:bg-stone-900 p-8 rounded-[2.5rem] border border-stone-100 dark:border-stone-800 hover:border-gold/50 transition-all hover:-translate-y-1 duration-300 group shadow-lg hover:shadow-xl">
                <div className={`w-14 h-14 rounded-2xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3 text-ink dark:text-white">{feature.title}</h3>
                <p className="text-subtle text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-ink dark:bg-stone-900 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
         <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-center text-3xl font-serif font-bold mb-16">O impacto na vida real</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex text-gold mb-4">
                            {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                        </div>
                        <p className="text-stone-300 mb-6 leading-relaxed italic">"{t.text}"</p>
                        <div className="flex items-center gap-4">
                            <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-gold/50" />
                            <div>
                                <h4 className="font-bold text-sm">{t.name}</h4>
                                <p className="text-xs text-stone-500">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* PRICING SECTION - The Core Update */}
      <section id="pricing" className="py-24 px-6 relative">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-black mb-6 text-ink dark:text-white">
                    Invista na sua eternidade<br/>
                    <span className="text-subtle text-2xl md:text-3xl font-normal">pelo preço de um lanche.</span>
                </h2>
                
                {/* Visual Pizza Comparison Anchor */}
                <div className="flex items-center justify-center gap-8 mt-8 text-sm font-medium text-subtle opacity-80">
                    <div className="flex items-center gap-2 line-through decoration-red-500 decoration-2">
                        🍕 Pizza (R$ 60,00)
                    </div>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                        ✨ Shalom Anual (R$ 49,90)
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto">
                {/* Monthly Plan */}
                <div className="bg-surface dark:bg-stone-900 p-8 rounded-[2.5rem] border border-stone-200 dark:border-stone-800 shadow-xl relative order-2 md:order-1 opacity-80 hover:opacity-100 transition-opacity">
                    <h3 className="font-bold text-xl text-subtle mb-2">Mensal</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-sm align-top">R$</span>
                        <span className="text-4xl font-black text-ink dark:text-white">9,90</span>
                        <span className="text-sm text-subtle">/mês</span>
                    </div>
                    <p className="text-xs text-subtle mb-8">Flexibilidade total. Cancele quando quiser.</p>
                    <ul className="space-y-3 mb-8 text-sm text-ink dark:text-stone-300">
                        <li className="flex gap-2"><Check size={16} className="text-stone-400" /> Acesso total ao App</li>
                        <li className="flex gap-2"><Check size={16} className="text-stone-400" /> Novas jornadas mensais</li>
                    </ul>
                    <button 
                        onClick={handleStart}
                        className="w-full py-4 rounded-2xl border-2 border-stone-200 dark:border-stone-700 font-bold hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                    >
                        Escolher Mensal
                    </button>
                </div>

                {/* Yearly Plan - Hero */}
                <div className="bg-ink dark:bg-stone-800 p-8 rounded-[2.5rem] border-2 border-gold shadow-2xl relative order-1 md:order-2 transform md:scale-105 z-10">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold to-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap">
                        Melhor Escolha (Economize 58%)
                    </div>
                    
                    <h3 className="font-bold text-xl text-gold mb-2">Anual</h3>
                    <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-sm align-top text-stone-300">R$</span>
                        <span className="text-5xl font-black text-white">49,90</span>
                        <span className="text-sm text-stone-300">/ano</span>
                    </div>
                    <p className="text-xs text-green-400 font-bold mb-8">Isso dá apenas R$ 4,15 por mês!</p>
                    
                    <ul className="space-y-4 mb-8 text-sm text-white">
                        <li className="flex gap-2 items-center"><div className="bg-gold/20 p-1 rounded-full"><Check size={12} className="text-gold" /></div> Acesso Ilimitado a Tudo</li>
                        <li className="flex gap-2 items-center"><div className="bg-gold/20 p-1 rounded-full"><Check size={12} className="text-gold" /></div> Orações Ilimitadas via IA</li>
                        <li className="flex gap-2 items-center"><div className="bg-gold/20 p-1 rounded-full"><Check size={12} className="text-gold" /></div> Prioridade nas atualizações</li>
                        <li className="flex gap-2 items-center"><div className="bg-gold/20 p-1 rounded-full"><Check size={12} className="text-gold" /></div> Suporte Premium</li>
                    </ul>
                    
                    <button 
                        onClick={handleStart}
                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-gold to-orange text-white font-bold shadow-lg hover:shadow-orange/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                        Quero o Plano Anual <ArrowRight size={18} />
                    </button>
                    <p className="text-[10px] text-center text-stone-400 mt-4 flex items-center justify-center gap-1">
                        <Lock size={10} /> Pagamento 100% Seguro
                    </p>
                </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-center mb-10 text-ink dark:text-white">Perguntas Frequentes</h2>
          <div className="space-y-4">
              {[
                  {q: "Posso cancelar a qualquer momento?", a: "Sim! Sem letras miúdas. Se escolher o plano mensal, pode cancelar quando quiser."},
                  {q: "O pagamento é seguro?", a: "Totalmente. Utilizamos processadores de pagamento criptografados de nível bancário."},
                  {q: "Funciona offline?", a: "Sim, a maior parte do conteúdo (Bíblia, textos) fica disponível offline após o primeiro acesso."},
                  {q: "Tem garantia?", a: "Sim. Se você não amar o Shalom nos primeiros 7 dias, devolvemos 100% do seu dinheiro."}
              ].map((item, i) => (
                  <div key={i} className="bg-surface dark:bg-stone-900 rounded-2xl p-6 border border-stone-100 dark:border-stone-800">
                      <h4 className="font-bold text-ink dark:text-white mb-2 flex items-center gap-2"><HelpCircle size={16} className="text-gold" /> {item.q}</h4>
                      <p className="text-sm text-subtle">{item.a}</p>
                  </div>
              ))}
          </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 pb-32">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-ink to-stone-800 dark:from-stone-900 dark:to-black rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full blur-[120px] opacity-20"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Não deixe sua paz para depois.</h2>
            <p className="text-stone-300 max-w-lg mx-auto mb-10 text-lg">
              Por menos de R$ 0,14 ao dia, você transforma sua caminhada cristã.
            </p>
            <button 
              onClick={handleStart}
              className="px-12 py-5 bg-white text-ink rounded-2xl font-bold text-xl shadow-xl hover:scale-105 active:scale-95 transition-all w-full md:w-auto"
            >
              Começar Agora
            </button>
            <p className="mt-6 text-xs text-stone-500">7 dias de garantia • Cancelamento fácil</p>
          </div>
        </div>
        
        <div className="text-center mt-12 text-subtle text-sm flex flex-col items-center gap-2">
          <ShalomLogo size="w-6 h-6" />
          <p>© {new Date().getFullYear()} Shalom App. Todos os direitos reservados.</p>
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
                <CreditCard size={32} className="text-white" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-ink dark:text-white mb-2">
                Quase lá!
              </h3>
              <p className="text-subtle text-sm mb-8 leading-relaxed max-w-xs">
                Para liberar seu acesso premium e salvar seu progresso, crie sua conta gratuita abaixo.
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
                    <>Entrar <ArrowRight size={20} /></>
                  )}
                </button>
              </form>

              <p className="mt-6 text-[10px] text-stone-400 uppercase tracking-widest flex items-center gap-1 justify-center">
                <Lock size={10} /> Ambiente Seguro
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Landing;