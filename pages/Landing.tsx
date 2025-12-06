
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Music, Zap, Sparkles, Star, ChevronRight, Shield, Heart, Mail, X, Loader2, ArrowRight, Check, CreditCard, HelpCircle, Lock, MessageCircle, Home, Battery, Sun, Share2, Book, Palette, MessageSquare, Bell, WifiOff, AlertTriangle, Coffee, Headphones, Smartphone, TrendingUp, XCircle, AlertOctagon, CheckCircle2, ChevronDown, ChevronUp, Gift, AlertCircle, Baby, HeartHandshake, ArrowDown, Download, Cloud, Moon, Info } from 'lucide-react';
import { ShalomLogo } from '../components/Layout';
import { checkSubscription } from '../services/supabase';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(''); // Estado para mensagem de erro
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleStart = () => {
    const savedEmail = localStorage.getItem('lumina_email');
    if (savedEmail) {
      navigate('/app');
    } else {
      setShowEmailModal(true);
      setLoginError('');
    }
  };

  const handleSaveEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    if (!email.trim() || !email.includes('@')) {
      setLoginError("Por favor, insira um e-mail válido.");
      return;
    }

    setIsLoading(true);
    
    try {
        // Verifica no Supabase
        const hasActiveSubscription = await checkSubscription(email.trim().toLowerCase());

        if (hasActiveSubscription) {
            // Sucesso: Salva e entra
            localStorage.setItem('lumina_email', email);
            setShowEmailModal(false);
            navigate('/app');
        } else {
            // Falha: Não encontrado
            setLoginError("Assinatura não encontrada para este e-mail.");
            
            // Opcional: Redirecionar visualmente para a área de planos após um pequeno delay
            setTimeout(() => {
                setShowEmailModal(false);
                const el = document.getElementById('pricing');
                el?.scrollIntoView({ behavior: 'smooth' });
                alert("E-mail não encontrado na base de assinantes. Por favor, escolha um plano para começar.");
            }, 1500);
        }
    } catch (error) {
        setLoginError("Erro de conexão. Tente novamente.");
    } finally {
        setIsLoading(false);
    }
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
      desc: "Orações personalizadas e guia espiritual disponível 24h para suas dúvidas e angústias.",
      color: "text-gold"
    },
    {
      icon: Music,
      title: "Atmosfera de Paz",
      desc: "Louvores curados para transformar o ambiente da sua casa instantaneamente.",
      color: "text-rose-500"
    },
    {
      icon: Baby,
      title: "Para Toda Família",
      desc: "Atividades para crianças, desenhos para colorir e desafios para fortalecer o lar.",
      color: "text-blue-500"
    }
  ];

  const testimonials = [
    {
      name: "Ana Clara",
      role: "Mãe e Empresária",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      text: "As atividades para crianças me salvaram! E ter um guia espiritual na palma da mão me traz muita paz."
    },
    {
      name: "Marcos Paulo",
      role: "Pai de Família",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      text: "Sempre tive dificuldade de manter a constância. O app torna tudo tão simples e bonito que não consigo mais ficar sem."
    },
    {
      name: "Juliana Costa",
      role: "Estudante",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      text: "Por menos de 15 centavos por dia, é inacreditável. Gasto mais em bala do que investi na minha saúde espiritual."
    }
  ];

  const stackItems = [
    { icon: MessageSquare, text: "Guia Espiritual IA no WhatsApp (24h)", value: "R$ 49,90/mês" },
    { icon: Music, text: "Louvores Exclusivos (Streaming)", value: "R$ 19,90/mês" },
    { icon: Palette, text: "Kit Kids (Desenhos e Histórias)", value: "R$ 29,90/mês" },
    { icon: BookOpen, text: "Jornadas de Oração", value: "R$ 19,90/mês" },
  ];

  const faqs = [
    { q: "Preciso pagar algo a mais pelas conversas no WhatsApp?", a: "Não! O plano anual cobre o acesso ilimitado ao Guia Espiritual e todas as funcionalidades do app." },
    { q: "Funciona no iPhone e Android?", a: "Sim, o Shalom é um Web App compatível com todos os celulares modernos, tablets e computadores." },
    { q: "Como cancelo se não gostar?", a: "Direto pelo app ou enviando um e-mail para nosso suporte. É simples, rápido e sem burocracia." }
  ];

  const kidImages = [
    "https://files.catbox.moe/nbipoy.png", 
    "https://files.catbox.moe/sf339f.png",
    "https://files.catbox.moe/gp1h2c.png"
  ];

  return (
    <div className="min-h-screen bg-paper dark:bg-black text-ink dark:text-white font-sans selection:bg-gold/30">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-paper/70 dark:bg-black/70 border-b border-stone-200/50 dark:border-white/5 transition-all duration-300">
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
            className="px-6 py-2.5 rounded-full bg-ink dark:bg-white text-white dark:text-ink font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
          >
            Entrar
          </button>
        </div>
      </nav>

      {/* Improved Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Top Spotlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/30 via-paper to-transparent dark:from-gold/15 dark:via-black dark:to-black blur-3xl opacity-80"></div>
            
            {/* Ambient Orbs */}
            <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-orange/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-gold/10 rounded-full blur-[120px]"></div>

            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15]" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-stone-200 dark:border-white/10 shadow-sm mb-8 hover:scale-105 transition-transform cursor-default animate-slide-up">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[11px] font-bold uppercase tracking-widest text-ink/80 dark:text-white/80">Acesso Imediato</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black leading-[1.1] mb-8 tracking-tighter text-ink dark:text-white drop-shadow-sm max-w-5xl">
            Tenha um <span className="text-transparent bg-clip-text bg-gradient-to-br from-gold via-orange to-gold-dark">Guia Espiritual 24h</span> no seu <span className="text-green-500">WhatsApp</span> e uma Biblioteca de Fé completa.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-subtle max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Louvores exclusivos, atividades para crianças e orações diárias.
          </p>

          {/* Pricing Hook */}
          <div className="mb-12 animate-bounce-slow relative z-20">
             <div className="relative inline-block transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-0 bg-stone-900 rounded-2xl transform translate-x-1 translate-y-1"></div>
                <span className="relative block bg-gradient-to-r from-gold to-orange text-white px-8 py-3 rounded-xl text-lg md:text-2xl font-bold border-2 border-white/20 shadow-xl">
                    Menos de <span className="bg-white text-orange px-2 py-0.5 rounded-lg mx-1 shadow-inner">R$ 0,14</span> por dia
                </span>
             </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button 
              onClick={handleStart}
              className="group relative w-full sm:w-auto px-10 py-5 bg-ink dark:bg-white text-white dark:text-ink rounded-2xl font-black text-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span>Começar Agora</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
               onClick={() => {
                const el = document.getElementById('preview-section');
                el?.scrollIntoView({ behavior: 'smooth' });
               }}
               className="px-8 py-5 text-ink dark:text-white font-bold hover:bg-stone-100 dark:hover:bg-white/5 rounded-2xl transition-colors"
            >
                Ver como funciona
            </button>
          </div>

          {/* Guarantee Text */}
          <div className="mt-8 flex items-center gap-6 text-xs font-bold text-subtle uppercase tracking-wider justify-center">
             <span className="flex items-center gap-1.5"><Shield size={14} className="text-green-500" /> 7 dias de garantia</span>
             <span className="hidden md:flex w-1 h-1 bg-stone-300 rounded-full"></span>
             <span className="flex items-center gap-1.5"><Lock size={14} className="text-subtle" /> Compra Segura</span>
          </div>

          {/* Social Proof */}
          <div className="mt-12 p-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl border border-stone-100 dark:border-white/5 inline-flex items-center gap-4">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-stone-800 bg-stone-200 overflow-hidden shadow-sm">
                        <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-stone-800 bg-gold flex items-center justify-center text-xs font-bold text-ink shadow-sm">
                    +1k
                </div>
             </div>
             <div className="text-left">
                <div className="flex text-gold mb-0.5">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                </div>
                <p className="text-xs font-medium text-ink dark:text-white">Famílias transformadas</p>
             </div>
          </div>
        </div>
      </section>

      {/* App Preview Section - Phone Mockup */}
      <section id="preview-section" className="px-6 mb-12 overflow-hidden pt-10">
         <div className="max-w-6xl mx-auto relative flex justify-center">
            {/* Glow behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-gold/20 blur-[100px] -z-10 rounded-full"></div>

            <div className="relative z-10 transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
                {/* CSS Phone Frame */}
                <div className="w-[300px] h-[620px] md:w-[340px] md:h-[700px] bg-stone-950 rounded-[3.5rem] border-[8px] border-stone-900 shadow-2xl relative overflow-hidden ring-1 ring-white/10 select-none">
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-40"></div>
                    
                    {/* MOCKUP SCREEN CONTENT - Rebuilding Home.tsx inside */}
                    <div className="w-full h-full bg-stone-950 rounded-[3rem] overflow-hidden relative flex flex-col">
                        
                        {/* Status Bar */}
                        <div className="absolute top-4 px-6 w-full flex justify-between items-center text-[10px] text-white font-medium z-30">
                            <span>9:41</span>
                            <div className="flex gap-1.5">
                                <div className="w-4 h-3 border border-white/50 rounded-[2px] relative flex items-center px-0.5">
                                    <div className="w-full h-[60%] bg-white rounded-[1px]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Content Scrollable Area */}
                        <div className="flex-1 overflow-y-auto no-scrollbar pt-14 pb-20 px-4 space-y-6">
                            
                            {/* Header */}
                            <div className="flex flex-col gap-0.5 relative">
                                <div className="flex items-center gap-1.5 mb-1">
                                    <span className="text-[9px] font-bold text-orange uppercase tracking-widest">Sexta-feira, 5 de Dezembro</span>
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-white leading-tight">
                                    Boa noite, <span className="text-orange">Filipe</span>.
                                </h2>
                                <div className="absolute top-1 right-0 bg-stone-800 text-white px-2 py-1 rounded-full text-[10px] font-bold border border-stone-700 flex items-center gap-1">
                                    <Zap size={10} className="text-orange fill-orange" /> 3
                                </div>
                            </div>

                            {/* Verse Card */}
                            <div className="relative w-full h-64 rounded-[1.8rem] overflow-hidden shadow-lg group">
                                <img 
                                    src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop" 
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt="Verse"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90"></div>
                                
                                <div className="relative z-10 flex flex-col items-center justify-between h-full p-5 text-center">
                                    <div className="bg-black/20 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                                        <Sparkles size={10} className="text-gold" />
                                        <span className="text-[8px] font-bold uppercase text-white tracking-widest">Versículo do Dia</span>
                                    </div>
                                    
                                    <div className="my-auto">
                                        <p className="font-serif text-lg text-white font-medium leading-relaxed drop-shadow-md">
                                            "O Senhor é o meu pastor, nada me faltará."
                                        </p>
                                        <div className="mt-3 flex flex-col items-center gap-1">
                                            <div className="w-8 h-0.5 bg-gold/80"></div>
                                            <p className="text-[10px] font-bold text-white/90 uppercase tracking-widest">PSALMS 23:1</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 w-full">
                                        <button className="flex-1 bg-white/10 backdrop-blur-md py-2.5 rounded-xl text-[10px] font-bold text-white border border-white/10 flex items-center justify-center gap-1.5">
                                            <Book size={12} /> Ler Capítulo
                                        </button>
                                        <button className="flex-1 bg-white py-2.5 rounded-xl text-[10px] font-bold text-stone-900 shadow-md flex items-center justify-center gap-1.5">
                                            <Share2 size={12} /> Compartilhar
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Moods */}
                            <div>
                                <h3 className="text-lg font-bold text-white font-serif mb-3 px-1">Como está seu coração?</h3>
                                <div className="flex gap-3 overflow-hidden">
                                    {[
                                        { icon: Zap, label: 'Ansioso', img: "https://images.unsplash.com/photo-1457139621581-298d1801c832?q=80&w=200" },
                                        { icon: Battery, label: 'Cansado', img: "https://images.unsplash.com/photo-1612620980838-5541dad8e254?q=80&w=200" },
                                        { icon: Sun, label: 'Feliz', img: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=200" },
                                    ].map((m, i) => (
                                        <div key={i} className="relative w-24 h-36 rounded-[1.3rem] overflow-hidden flex-shrink-0">
                                            <img src={m.img} className="absolute inset-0 w-full h-full object-cover" alt={m.label} />
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                                            <div className="absolute top-2 right-2 p-1.5 bg-white/20 backdrop-blur-md rounded-full">
                                                <m.icon size={12} className="text-white" />
                                            </div>
                                            <span className="absolute bottom-3 left-3 text-white font-serif font-bold text-sm">{m.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Bottom Nav Simulation */}
                        <div className="absolute bottom-0 w-full bg-stone-900 border-t border-white/5 py-3 px-6 flex justify-between items-end pb-6 z-30">
                            <div className="flex flex-col items-center gap-1">
                                <div className="bg-gold p-1.5 rounded-xl shadow-lg -translate-y-2">
                                    <Home size={18} className="text-stone-900" fill="currentColor" />
                                </div>
                                <span className="text-[8px] font-bold text-white">Início</span>
                            </div>
                            {[BookOpen, Music, Zap, Heart].map((Icon, i) => (
                                <div key={i} className="flex flex-col items-center gap-1 opacity-50">
                                    <div className="p-1.5">
                                        <Icon size={18} className="text-white" />
                                    </div>
                                    <span className="text-[8px] font-medium text-white">Menu</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-40"></div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* VALUE STACK SECTION */}
      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto bg-surface dark:bg-stone-900 rounded-[2.5rem] p-8 md:p-12 border border-stone-200 dark:border-stone-800 shadow-2xl relative overflow-hidden">
             
             {/* Decorative */}
             <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl -z-10"></div>

             <div className="text-center mb-10">
                 <h2 className="font-serif font-bold text-2xl md:text-3xl text-ink dark:text-white mb-2">O que você recebe</h2>
                 <p className="text-subtle text-sm">Uma coleção completa pelo preço de um café.</p>
             </div>

             <div className="space-y-4">
                {stackItems.map((item, idx) => (
                   <div key={idx} className="flex justify-between items-center py-3 border-b border-stone-100 dark:border-stone-800 last:border-0">
                      <div className="flex items-center gap-3">
                         <div className="p-2 rounded-full bg-stone-100 dark:bg-stone-800 text-gold">
                            <item.icon size={18} />
                         </div>
                         <span className="font-medium text-ink dark:text-white text-sm md:text-base pr-4">{item.text}</span>
                      </div>
                      <div className="font-mono text-stone-400 dark:text-stone-500 text-sm whitespace-nowrap">
                         {item.value}
                      </div>
                   </div>
                ))}
             </div>

             <div className="flex justify-between items-center pt-8 mt-4 border-t-2 border-dashed border-stone-200 dark:border-stone-700">
                <span className="font-bold text-lg text-ink dark:text-white">VALOR TOTAL</span>
                <span className="text-red-400 dark:text-red-400 line-through font-mono text-lg font-bold opacity-80">R$ 119,60/mês</span>
             </div>
             
             <div className="mt-8 text-center bg-green-50 dark:bg-green-900/10 p-4 rounded-2xl border border-green-100 dark:border-green-900/30">
                <p className="text-subtle text-xs uppercase font-bold tracking-widest mb-1">Hoje por apenas</p>
                <p className="text-3xl font-black text-green-600 dark:text-green-400">R$ 4,90<span className="text-sm font-medium text-subtle">/mês*</span></p>
             </div>
        </div>
      </section>

      {/* CONTRAST SECTION: Heaven vs Digital Hell */}
      <section className="py-24 px-6 relative overflow-hidden bg-stone-50 dark:bg-black/50">
         <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif font-black text-ink dark:text-white mb-6">
                    O mundo briga pela sua atenção.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">Nós cuidamos da sua alma.</span>
                </h2>
                <p className="text-lg text-subtle max-w-2xl mx-auto">
                    Você abre o celular e é bombardeado por notícias ruins, fofocas e cobranças. É difícil ouvir a voz de Deus no meio de tanto barulho.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-0 md:gap-8 items-stretch">
                {/* HELL: Chaos Left */}
                <div className="bg-stone-200 dark:bg-stone-900/80 rounded-t-[3rem] md:rounded-[3rem] p-10 md:p-14 relative overflow-hidden group border border-stone-300 dark:border-stone-800 opacity-90 hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20"></div>
                    
                    {/* Chaotic Floating Icons */}
                    <div className="absolute top-10 left-10 text-stone-400 rotate-12 animate-pulse"><MessageCircle size={32} /></div>
                    <div className="absolute top-20 right-10 text-red-400 -rotate-12 animate-bounce-slow"><AlertTriangle size={40} /></div>
                    <div className="absolute bottom-20 left-12 text-stone-500 rotate-45"><WifiOff size={28} /></div>
                    <div className="absolute bottom-10 right-16 text-red-500 -rotate-6"><Battery size={36} /></div>
                    <div className="absolute top-1/2 right-4 text-stone-400 rotate-12"><Bell size={24} /></div>

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-stone-300 dark:bg-stone-800 rounded-full flex items-center justify-center mb-6 mx-auto shadow-inner">
                            <Zap size={40} className="text-stone-500 dark:text-stone-400" />
                        </div>
                        <h3 className="text-3xl font-black text-stone-600 dark:text-stone-300 mb-3 tracking-tight">CAOS DIGITAL</h3>
                        <p className="font-bold text-stone-500 max-w-xs mx-auto mb-6">Ansiedade • Ruído • Pressão • Comparação</p>
                        <div className="h-1 w-24 bg-stone-300 dark:bg-stone-700 mx-auto rounded-full"></div>
                    </div>
                </div>

                {/* HEAVEN: Peace Right */}
                <div className="bg-white dark:bg-stone-900 rounded-b-[3rem] md:rounded-[3rem] p-10 md:p-14 relative overflow-hidden border-4 border-gold shadow-2xl flex flex-col items-center justify-center text-center transform md:-translate-y-4 md:hover:-translate-y-6 transition-transform duration-300">
                     <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-orange/5"></div>
                     <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>

                     <div className="relative z-10">
                         <div className="w-24 h-24 bg-gradient-to-tr from-gold to-orange rounded-full flex items-center justify-center shadow-lg mb-8 mx-auto animate-pulse ring-4 ring-gold/20">
                             <ShalomLogo size="w-12 h-12" />
                         </div>
                         <h3 className="text-3xl font-black text-ink dark:text-white mb-3 tracking-tight">SEU SANTUÁRIO</h3>
                         <p className="font-bold text-gold text-lg max-w-xs mx-auto mb-6">Paz • Propósito • Presença • Silêncio</p>
                         
                         <div className="flex items-center justify-center gap-3 text-sm font-medium text-subtle bg-paper dark:bg-black/20 py-2 px-4 rounded-full">
                            <Coffee size={16} className="text-brown dark:text-stone-400" />
                            <span>Recarregue suas energias</span>
                         </div>

                         <p className="text-sm text-subtle mt-8 max-w-xs mx-auto italic">
                             "Nosso App não é mais uma rede social. É o seu lugar seguro."
                         </p>
                     </div>
                </div>
            </div>
         </div>
      </section>

      {/* USE CASE NARRATIVE: Commute Revival */}
      <section className="py-24 px-6 bg-surface dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 md:order-1">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-transparent rounded-[3rem] blur-xl opacity-70"></div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100 dark:border-stone-800">
                    <img 
                      src="https://files.catbox.moe/3umr35.png" 
                      alt="Peaceful commute" 
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-2 border border-white/10 mb-2">
                           <Headphones size={12} /> Modo Foco
                        </div>
                        <p className="font-serif italic text-lg">"O meu refúgio no meio do caos."</p>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink dark:text-white leading-tight mb-4">
                   Transforme a Correria e o Trânsito em Momentos de <span className="text-gold">Profundo Avivamento</span>.
                </h2>
                <h3 className="text-lg md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange mb-8">
                   Você não precisa de mais tempo. Você precisa preencher o tempo que já tem com a Presença certa.
                </h3>

                <div className="space-y-6 text-subtle leading-relaxed mb-10">
                    <p>
                      Imagine a cena amanhã de manhã: Você está indo para o trabalho. O trânsito está parado, o ônibus está cheio ou o dia mal começou e a ansiedade já quer bater. O mundo lá fora é barulhento e caótico.
                    </p>
                    <p className="font-bold text-ink dark:text-white">
                      Mas então, você coloca seus fones e abre o App.
                    </p>
                    <p>
                      🎵 Imediatamente, o caos desaparece. Um louvor exclusivo, gravado para acalmar a alma, começa a tocar. A atmosfera muda. O banco do ônibus vira um banco de igreja.
                    </p>
                    <p>
                      📖 Na palma da sua mão, a Palavra se abre. Mas não é uma leitura cansativa. É uma Reflexão Personalizada, escrita exatamente para o desafio que você vai enfrentar hoje no escritório. É como se Deus estivesse sussurrando a estratégia divina para o seu dia.
                    </p>
                    <p className="italic border-l-4 border-gold pl-4 text-ink dark:text-stone-300">
                      🔥 O resultado? Enquanto todos chegam ao trabalho estressados, você chega renovado, cheio do Espírito e com a fé de um leão.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-paper dark:bg-black/40 p-4 rounded-2xl border border-stone-100 dark:border-stone-800">
                        <Headphones size={24} className="text-gold mb-2" />
                        <h4 className="font-bold text-sm text-ink dark:text-white mb-1">Louvor Imersivo</h4>
                        <p className="text-xs text-subtle">Blinde sua mente contra o barulho do mundo.</p>
                    </div>
                    <div className="bg-paper dark:bg-black/40 p-4 rounded-2xl border border-stone-100 dark:border-stone-800">
                        <Smartphone size={24} className="text-orange mb-2" />
                        <h4 className="font-bold text-sm text-ink dark:text-white mb-1">Bíblia Inteligente</h4>
                        <p className="text-xs text-subtle">Entendimento profundo em 5 minutos.</p>
                    </div>
                    <div className="bg-paper dark:bg-black/40 p-4 rounded-2xl border border-stone-100 dark:border-stone-800">
                        <TrendingUp size={24} className="text-green-500 mb-2" />
                        <h4 className="font-bold text-sm text-ink dark:text-white mb-1">Crescimento Real</h4>
                        <p className="text-xs text-subtle">Viva a fé 24/7, não só no domingo.</p>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* COMPARISON TABLE: The Doubt Killer */}
      <section className="py-24 px-6 bg-paper dark:bg-black">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif font-black text-ink dark:text-white mb-6">
                    Onde você está investindo o seu tempo <br/> (e a sua alma)?
                </h2>
                <p className="text-lg text-subtle max-w-2xl mx-auto">
                   Compare e veja porque o "grátis" pode ser o mais caro de todos.
                </p>
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0">
                <div className="min-w-[800px] bg-surface dark:bg-stone-900 rounded-[2.5rem] shadow-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
                    <div className="grid grid-cols-4 bg-stone-100 dark:bg-stone-800/50 text-sm font-bold border-b border-stone-200 dark:border-stone-700">
                        <div className="p-6 text-subtle uppercase tracking-wider">Funcionalidade</div>
                        <div className="p-6 text-stone-500 dark:text-stone-400 flex items-center gap-2"><Smartphone size={16} /> Redes Sociais</div>
                        <div className="p-6 text-stone-500 dark:text-stone-400 flex items-center gap-2"><BookOpen size={16} /> Apps Comuns</div>
                        <div className="p-6 bg-gold/10 text-gold-dark dark:text-gold flex items-center gap-2 border-l-2 border-gold/50"><ShalomLogo size="w-5 h-5"/> Shalom App</div>
                    </div>

                    {/* Rows */}
                    {[
                        { 
                          label: "Foco Principal", 
                          social: "Entretenimento e Distração", 
                          common: "Apenas Leitura de Texto", 
                          shalom: "Crescimento Espiritual e Paz",
                          highlight: true 
                        },
                        { 
                          label: "Ambiente", 
                          social: "Tóxico, Ansioso e Barulhento", 
                          common: "Passivo (Você lê sozinho)", 
                          shalom: "Acolhedor e Interativo" 
                        },
                        { 
                          label: "Orientação", 
                          social: <span className="flex items-center gap-1 text-red-500"><XCircle size={14} /> Nenhuma</span>, 
                          common: <span className="flex items-center gap-1 text-red-500"><XCircle size={14} /> Nenhuma</span>, 
                          shalom: <span className="flex items-center gap-1 text-green-600 dark:text-green-400"><CheckCircle2 size={14} /> Guia IA via WhatsApp (24h)</span> 
                        },
                        { 
                          label: "Família", 
                          social: <span className="flex items-center gap-1 text-orange"><AlertTriangle size={14} /> Perigoso para crianças</span>, 
                          common: <span className="flex items-center gap-1 text-red-500"><XCircle size={14} /> Não possui</span>, 
                          shalom: <span className="flex items-center gap-1 text-green-600 dark:text-green-400"><CheckCircle2 size={14} /> Kit Kids e Histórias</span> 
                        },
                        { 
                          label: "Louvores", 
                          social: "Anúncios a cada 2 músicas", 
                          common: <span className="flex items-center gap-1 text-red-500"><XCircle size={14} /> Não possui</span>, 
                          shalom: <span className="flex items-center gap-1 text-green-600 dark:text-green-400"><CheckCircle2 size={14} /> Exclusivos e Sem Anúncios</span> 
                        },
                        { 
                          label: "Preço Emocional", 
                          social: <span className="text-red-500 font-bold">Custa a sua Paz Mental</span>, 
                          common: "Custa a sua Disciplina", 
                          shalom: <span className="text-green-600 dark:text-green-400 font-bold">Gera Paz e Constância</span> 
                        },
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-4 border-b border-stone-100 dark:border-stone-800 last:border-0 hover:bg-stone-50 dark:hover:bg-stone-800/30 transition-colors">
                            <div className="p-6 font-bold text-ink dark:text-stone-300">{row.label}</div>
                            <div className="p-6 text-stone-500 text-sm">{row.social}</div>
                            <div className="p-6 text-stone-500 text-sm">{row.common}</div>
                            <div className={`p-6 text-sm border-l-2 border-gold/10 font-medium ${row.highlight ? 'text-gold-dark dark:text-gold font-bold' : 'text-ink dark:text-white'} bg-gold/5`}>
                                {row.shalom}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Warning Text Block */}
            <div className="mt-16 bg-red-50 dark:bg-red-900/10 p-8 md:p-12 rounded-[2.5rem] border border-red-100 dark:border-red-900/30 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-widest mb-6">
                    <AlertOctagon size={14} /> Atenção
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink dark:text-white mb-6">
                    Cuidado com o "Grátis" que custa a sua atenção.
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg mb-0 max-w-2xl mx-auto">
                    Você pode encontrar versículos no Google ou músicas no YouTube. Mas o preço que você paga é ter que lidar com anúncios, notificações de fofoca e vídeos que desviam seu olhar de Deus. 
                    <br/><br/>
                    <span className="font-bold text-ink dark:text-white">Por apenas R$ 9,90</span>, nós removemos todo o ruído do mundo e entregamos apenas o que edifica. É mais barato que um lanche, mas vale por uma vida inteira de sabedoria.
                </p>
            </div>
        </div>
      </section>

      {/* Solution/Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">O Shalom é o seu refúgio.</h2>
             <p className="text-subtle max-w-xl mx-auto">Tecnologia e fé unidas para blindar sua mente e edificar sua família.</p>
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

      {/* VISUAL KIDS/ART GALLERY */}
      <section className="py-20 px-6 bg-white dark:bg-stone-900 overflow-hidden relative border-t border-stone-100 dark:border-stone-800">
         <div className="max-w-6xl mx-auto text-center mb-12">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">
                 <HeartHandshake size={14} /> Kit Kids Incluso
             </div>
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-ink dark:text-white">A fé também é visual.</h2>
             <p className="text-subtle max-w-xl mx-auto">
                Enquanto o mundo oferece telas e distrações, nós oferecemos arte que conecta seus filhos a Deus. Baixe, imprima e pinte.
             </p>
         </div>

         {/* Scrolling Gallery */}
         <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
             {kidImages.map((img, i) => (
                 <div key={i} className="group relative w-64 aspect-[3/4] bg-white rounded-2xl shadow-xl border-4 border-stone-100 dark:border-stone-700 transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 cursor-pointer">
                     <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                        <Download size={14} />
                     </div>
                     <img 
                        src={img} 
                        alt="Coloring Page" 
                        className="w-full h-full object-contain p-4 mix-blend-multiply dark:mix-blend-normal opacity-80 group-hover:opacity-100 transition-opacity" 
                     />
                 </div>
             ))}
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

      {/* PRICING SECTION: THE MENTAL CHECKOUT */}
      <section id="pricing" className="py-24 px-6 relative bg-gradient-to-b from-stone-50 to-paper dark:from-black dark:to-stone-950 overflow-hidden">
         
         {/* Background Orbs for Premium Feel */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-gold/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-orange/10 rounded-full blur-[100px]"></div>
         </div>

         <div className="max-w-4xl mx-auto relative z-10">
            
            {/* 1. Headline (Emotional Anchoring) */}
            <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-5xl font-serif font-black mb-6 text-ink dark:text-white leading-tight">
                    Quanto vale a paz da sua alma e a <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-orange">proteção da sua família?</span>
                </h2>
                <p className="text-lg md:text-xl text-subtle max-w-2xl mx-auto font-medium">
                    Provavelmente não tem preço. Mas hoje, nós tornamos isso acessível para todos.
                </p>
            </div>

            {/* 2. The Hero Offer Card */}
            <div className="bg-surface dark:bg-stone-900 rounded-[3rem] shadow-2xl overflow-hidden relative transform transition-all hover:scale-[1.005] border border-stone-100 dark:border-stone-800">
                
                {/* Gold Glow Behind */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gold/30 blur-[60px] -z-10"></div>

                <div className="p-8 md:p-14">
                    {/* Header: The Package */}
                    <div className="text-center mb-12 border-b border-stone-100 dark:border-stone-800 pb-12">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-orange text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-lg shadow-orange/30 animate-pulse">
                            <Gift size={14} /> Oferta Exclusiva de Lançamento
                        </div>
                        <h3 className="text-3xl md:text-4xl font-serif font-black text-ink dark:text-white mb-8">
                            Pacote Completo "Vida Cristã"
                        </h3>
                        
                        {/* Visual Features Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                           {[
                             { icon: CheckCircle2, text: "Guia Espiritual 24h" },
                             { icon: Music, text: "Louvores Exclusivos" },
                             { icon: Palette, text: "Kit Kids e Histórias" },
                             { icon: Sparkles, text: "Reflexões Diárias" }
                           ].map((feat, i) => (
                             <div key={i} className="flex flex-col items-center gap-3 p-4 bg-stone-50 dark:bg-black/30 rounded-2xl border border-stone-100 dark:border-white/5">
                                <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full">
                                    <feat.icon size={20} />
                                </div>
                                <span className="text-xs font-bold text-center text-ink dark:text-stone-300">{feat.text}</span>
                             </div>
                           ))}
                        </div>
                    </div>

                    <h4 className="font-bold text-subtle text-xs uppercase tracking-[0.2em] mb-6 text-center">Selecione seu plano:</h4>

                    <div className="space-y-4">
                        {/* Option A: Monthly */}
                        <div 
                            onClick={() => setSelectedPlan('monthly')}
                            className={`
                                cursor-pointer rounded-3xl p-6 border-2 transition-all flex items-center justify-between gap-4 group
                                ${selectedPlan === 'monthly' ? 'border-stone-400 bg-stone-100 dark:bg-stone-800' : 'border-stone-200 dark:border-stone-800 bg-transparent opacity-60 hover:opacity-100'}
                            `}
                        >
                             <div className="flex items-center gap-4">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'monthly' ? 'border-stone-600 bg-stone-600' : 'border-stone-300'}`}>
                                    {selectedPlan === 'monthly' && <div className="w-2.5 h-2.5 bg-white rounded-full"></div>}
                                </div>
                                <div className="text-left">
                                    <h5 className="font-bold text-lg text-ink dark:text-white group-hover:text-ink transition-colors">Mensal</h5>
                                    <p className="text-xs text-subtle">Flexibilidade total</p>
                                </div>
                             </div>
                             <div className="text-right">
                                <span className="block text-xl font-bold text-ink dark:text-white">R$ 9,90</span>
                                <span className="text-xs text-subtle">/mês</span>
                             </div>
                        </div>

                        {/* Option B: Yearly (Gold) */}
                        <div 
                            onClick={() => setSelectedPlan('yearly')}
                            className={`
                                cursor-pointer rounded-3xl p-6 md:p-8 border-2 transition-all flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl
                                ${selectedPlan === 'yearly' ? 'border-gold bg-gradient-to-br from-white to-orange-50 dark:from-stone-800 dark:to-stone-900 transform scale-[1.02]' : 'border-stone-200 dark:border-stone-800'}
                            `}
                        >
                             {/* Shine Effect */}
                             {selectedPlan === 'yearly' && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent skew-x-12 animate-[shimmer_2s_infinite]"></div>}
                             
                             {selectedPlan === 'yearly' && (
                                <div className="absolute top-0 right-0 bg-gold text-ink text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-sm z-20">
                                    Melhor Escolha
                                </div>
                             )}
                             
                             <div className="flex items-center gap-5 relative z-10 w-full md:w-auto">
                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selectedPlan === 'yearly' ? 'border-gold bg-gold' : 'border-stone-300'}`}>
                                    {selectedPlan === 'yearly' && <Check size={18} className="text-ink" strokeWidth={4} />}
                                </div>
                                <div className="text-left">
                                    <h5 className="font-serif font-black text-2xl text-ink dark:text-white flex items-center gap-3">
                                        Anual <span className="bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-[10px] px-2 py-0.5 rounded-full uppercase font-sans tracking-wide">92% Escolhem</span>
                                    </h5>
                                    <div className="flex items-center gap-2 text-sm mt-1">
                                        <span className="text-red-400 line-through decoration-red-500 opacity-70">De R$ 118,80</span>
                                        <span className="font-bold text-green-600 dark:text-green-400">por apenas:</span>
                                    </div>
                                </div>
                             </div>
                             
                             <div className="text-right relative z-10 bg-white/50 dark:bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-gold/20 w-full md:w-auto flex flex-row md:flex-col justify-between items-center md:items-end">
                                <span className="text-xs font-bold text-subtle md:hidden">Total Anual:</span>
                                <div>
                                    <span className="block text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-orange tracking-tight">49,90</span>
                                    <span className="text-xs font-bold text-subtle uppercase tracking-wider block md:text-right">Pagamento Único</span>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Breakdown Badge - Floating */}
                    <div className="relative -mt-3 md:-mt-4 mb-8 flex justify-center z-20 pointer-events-none">
                        <div className="bg-stone-900 text-white px-6 py-2 rounded-full font-bold text-sm shadow-2xl transform -rotate-2 border-2 border-white/10 flex items-center gap-2 animate-bounce-slow">
                             <TrendingUp size={16} className="text-green-400" />
                             <span className="text-green-400">R$ 0,14</span> POR DIA.
                        </div>
                    </div>

                    {/* 3. Logical Scarcity - HIGHLIGHTED VERSION */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 md:p-8 rounded-2xl text-center border-2 border-dashed border-yellow-400 dark:border-yellow-600 mb-8 relative overflow-hidden group hover:bg-yellow-100 dark:hover:bg-yellow-900/20 transition-colors">
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>
                         
                         <h5 className="font-black text-yellow-700 dark:text-yellow-400 mb-3 text-base uppercase flex items-center justify-center gap-2 animate-pulse">
                            <AlertCircle size={20} strokeWidth={2.5} /> POR QUE TÃO BARATO?
                         </h5>
                         <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed max-w-2xl mx-auto font-medium">
                            "Nossa missão é espalhar o Evangelho através da tecnologia. Porém, devido aos altos custos de IA, 
                            <span className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded text-yellow-900 dark:text-yellow-100 font-bold mx-1">não conseguiremos manter este preço por muito tempo.</span><br/>
                            Se você fechar esta página, amanhã o valor pode ter voltado para <span className="underline decoration-red-500 decoration-2 font-bold text-red-600 dark:text-red-400">R$ 97,00</span>."
                         </p>
                    </div>

                    {/* 4. The Big Button */}
                    <div className="mt-8">
                        <button 
                            onClick={() => {
                                const link = selectedPlan === 'yearly' 
                                    ? 'https://pay.cakto.com.br/4f62xu5' 
                                    : 'https://pay.cakto.com.br/37whf2r_678375';
                                window.location.href = link;
                            }}
                            className="group relative w-full py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl font-black text-lg md:text-2xl shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-green-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center gap-1 overflow-hidden border-b-4 border-green-700"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="flex items-center gap-2 relative z-10">
                                {selectedPlan === 'yearly' ? 'QUERO MEU ACESSO ANUAL' : 'QUERO MEU ACESSO MENSAL'} 
                                <ChevronRight strokeWidth={4} size={24}/>
                            </span>
                            <span className="text-xs font-medium opacity-90 tracking-wider font-sans uppercase relative z-10">Acesso Imediato ao App e ao WhatsApp</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 5. Risk Zero Guarantee */}
            <div className="mt-16 max-w-3xl mx-auto text-center">
                <div className="w-20 h-20 bg-white dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-stone-100 dark:border-stone-700 relative">
                    <Shield size={40} className="text-gold" fill="currentColor" fillOpacity={0.2} />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white">100%</div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-ink dark:text-white mb-4">
                    Garantia de 7 Dias: <br/> Satisfação ou sua Bênção de Volta.
                </h3>
                <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-stone-200 dark:border-stone-800">
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                        "Nós confiamos tanto que este App vai transformar sua caminhada com Deus que assumimos todo o risco.
                        Assine agora. Converse com o Guia Espiritual, ouça os louvores, imprima os desenhos.
                        <br/><br/>
                        <span className="font-bold text-ink dark:text-white">Se em 7 dias você achar que não valeu a pena, basta enviar um único e-mail. Nós devolveremos 100% do seu dinheiro.</span> 
                        Sem letras miúdas, sem ressentimentos. Continuaremos irmãos em Cristo."
                    </p>
                </div>
            </div>

            {/* 6. FAQ Accordion */}
            <div className="mt-20 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-center text-subtle uppercase tracking-widest mb-8">Dúvidas Frequentes</h3>
                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <div key={i} className="bg-surface dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden transition-all hover:border-gold/30">
                            <button 
                                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left font-bold text-ink dark:text-white"
                            >
                                {item.q}
                                {openFaqIndex === i ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-stone-400" />}
                            </button>
                            <div 
                                className={`px-6 text-stone-600 dark:text-stone-400 leading-relaxed overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                {item.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

         </div>
      </section>

      {/* NEW SECTION: VISUAL AESTHETICS (BENTO GRID) */}
      <section className="py-24 px-6 bg-stone-50 dark:bg-stone-900/50">
           <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold text-ink dark:text-white">Um universo de paz no seu bolso</h2>
                  <p className="text-subtle mt-2">Cada detalhe foi desenhado para acalmar sua alma.</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-96">
                  {/* Card 1: Main Visual */}
                  <div className="col-span-2 row-span-2 bg-black rounded-3xl p-6 relative overflow-hidden text-white group shadow-xl">
                      <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Lamp" />
                      <div className="relative z-10 h-full flex flex-col justify-end">
                          <h3 className="text-2xl font-bold mb-1">Luz na Escuridão</h3>
                          <p className="text-sm opacity-80 text-stone-200">Encontre respostas para os dias mais difíceis.</p>
                      </div>
                  </div>

                  {/* Card 2: Morning */}
                  <div className="bg-gold rounded-3xl p-6 flex flex-col justify-between text-ink shadow-lg transform hover:-translate-y-1 transition-transform">
                      <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                          <Sun size={20} className="text-ink" />
                      </div>
                      <div>
                          <span className="block font-bold text-lg">Manhã</span>
                          <span className="text-xs opacity-70">Devocionais para começar bem.</span>
                      </div>
                  </div>

                  {/* Card 3: Night */}
                  <div className="bg-stone-800 rounded-3xl p-6 flex flex-col justify-between text-white shadow-lg transform hover:-translate-y-1 transition-transform">
                      <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center">
                          <Moon size={20} className="text-white" />
                      </div>
                      <div>
                          <span className="block font-bold text-lg">Noite</span>
                          <span className="text-xs opacity-70">Orações para dormir em paz.</span>
                      </div>
                  </div>

                  {/* Card 4: Community */}
                  <div className="col-span-2 bg-white dark:bg-stone-800 rounded-3xl p-6 flex items-center gap-4 shadow-lg border border-stone-100 dark:border-stone-700">
                       <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                           <MessageCircle size={24} />
                       </div>
                       <div>
                           <h4 className="font-bold text-ink dark:text-white">Comunidade Viva</h4>
                           <p className="text-xs text-subtle">Você nunca mais caminhará sozinho.</p>
                       </div>
                  </div>
              </div>
           </div>
      </section>

      {/* MENTAL TRIGGER: THE CROSSROADS (MOVED AFTER PRICING) */}
      <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
              <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <AlertOctagon size={32} className="text-red-500" />
              </div>

              <h2 className="text-2xl md:text-4xl font-serif font-bold mb-8 leading-tight">
                  Você chegou até aqui. Você viu o valor.<br/>
                  <span className="text-stone-500">Mas ainda está hesitando.</span>
              </h2>

              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm mb-10">
                  <p className="text-lg md:text-xl font-medium leading-relaxed text-stone-300">
                      "E mais uma vez, você vai deixar sua fé em segundo lugar. Preferindo usar seu dinheiro com streaming, fast food e coisas que te afastam de Jesus, do que investir míseros centavos naquilo que realmente aproxima você dEle."
                  </p>
              </div>

              <p className="text-stone-400 text-sm mb-8 max-w-lg mx-auto">
                  Não permita que a acomodação vença hoje. Tome a decisão que o seu espírito está pedindo.
              </p>

              <button 
                onClick={() => {
                    const el = document.getElementById('pricing');
                    el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-gold hover:border-gold transition-colors font-bold uppercase tracking-widest text-xs"
              >
                  Eu escolho priorizar minha fé <ArrowDown size={14} />
              </button>
          </div>
      </section>

      {/* Final CTA (Simplified) */}
      <section className="py-20 px-6 pb-32">
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
                Para acessar e salvar seu progresso, insira seu email abaixo.
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
                
                {/* Error Message Display */}
                {loginError && (
                    <div className="text-red-500 text-xs font-bold animate-pulse flex items-center justify-center gap-1">
                        <AlertCircle size={12} /> {loginError}
                    </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-ink dark:bg-white text-white dark:text-ink rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
