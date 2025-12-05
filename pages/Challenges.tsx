import React, { useState, useEffect } from 'react';
import { INITIAL_CHALLENGES } from '../constants';
import { Challenge } from '../types';
import { generateDailyChallengeContent } from '../services/api';
import { Zap, Check, Calendar, ArrowLeft, Star, Heart, Briefcase, Cross, BookOpen, CheckCircle } from 'lucide-react';

const Challenges: React.FC = () => {
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);
  const [dayContent, setDayContent] = useState<{verse: string, thought: string, action: string, reflection: string} | null>(null);
  const [loadingDay, setLoadingDay] = useState(false);
  const [selectedDay, setSelectedDay] = useState(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  // Load progress when active challenge changes
  useEffect(() => {
    if (activeChallenge) {
      const savedProgress = localStorage.getItem(`lumina_challenge_progress_${activeChallenge.id}`);
      if (savedProgress) {
        setCompletedDays(JSON.parse(savedProgress));
      } else {
        setCompletedDays([]);
      }
    }
  }, [activeChallenge]);

  const handleSelectChallenge = (c: Challenge) => {
    setActiveChallenge(c);
    setSelectedDay(1);
    setDayContent(null);
    loadDayContent(c.theme, 1);
  };

  const loadDayContent = async (theme: string, day: number) => {
    setLoadingDay(true);
    const content = await generateDailyChallengeContent(theme, day);
    setDayContent(content);
    setLoadingDay(false);
  };

  const handleDayClick = (day: number) => {
    if (activeChallenge) {
      setSelectedDay(day);
      loadDayContent(activeChallenge.theme, day);
    }
  };

  const handleCompleteDay = () => {
    if (!activeChallenge) return;

    let newCompleted = [...completedDays];
    if (newCompleted.includes(selectedDay)) {
        // Toggle off if already complete (optional, maybe we only want to add)
        // newCompleted = newCompleted.filter(d => d !== selectedDay);
    } else {
        newCompleted.push(selectedDay);
    }

    setCompletedDays(newCompleted);
    localStorage.setItem(`lumina_challenge_progress_${activeChallenge.id}`, JSON.stringify(newCompleted));
  };

  const getGradient = (index: number) => {
    const gradients = [
      'from-orange to-red-500',         // Detox (Orange/Red)
      'from-stone-900 to-stone-800',    // Gratidão (Dark)
      'from-gold-dark to-yellow-600',   // Sabedoria (Gold)
      'from-emerald-600 to-teal-500',   // Cura (Green/Teal)
      'from-blue-600 to-indigo-600',    // Emprego (Blue)
      'from-rose-500 to-pink-600',      // Casamento (Pink)
      'from-violet-600 to-purple-700'   // Impossíveis (Purple)
    ];
    return `bg-gradient-to-br ${gradients[index % gradients.length]}`;
  };

  const getIcon = (index: number) => {
    const icons = [
        Zap,        // Detox
        Heart,      // Gratidão
        Star,       // Sabedoria
        Cross,      // Cura
        Briefcase,  // Emprego
        Heart,      // Casamento
        Zap         // Impossíveis
    ];
    return icons[index % icons.length];
  }

  const isDayCompleted = (day: number) => completedDays.includes(day);

  if (activeChallenge) {
    const ChallengeIcon = getIcon(INITIAL_CHALLENGES.findIndex(c => c.id === activeChallenge.id));
    const isCompleted = isDayCompleted(selectedDay);

    return (
      <div className="animate-fade-in space-y-6 pb-20">
        <div className="flex items-center gap-4 mb-2">
            <button 
            onClick={() => setActiveChallenge(null)}
            className="w-10 h-10 rounded-full bg-surface dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-ink dark:text-white hover:bg-stone-100 dark:hover:bg-stone-700"
            >
            <ArrowLeft size={20} />
            </button>
            <h2 className="font-serif font-bold text-xl text-ink dark:text-white">Voltar</h2>
        </div>

        <div className="bg-stone-900 text-gold p-8 rounded-[2.5rem] shadow-card relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-serif font-bold mb-2 text-white">{activeChallenge.title}</h2>
            <p className="text-stone-400 text-sm leading-relaxed">{activeChallenge.description}</p>
            <div className="mt-4 flex items-center gap-2">
                 <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full text-white">
                    {completedDays.length} / {activeChallenge.days} Dias Concluídos
                 </span>
            </div>
          </div>
          <ChallengeIcon className="absolute -bottom-4 -right-4 text-white/5 w-32 h-32 rotate-12" />
        </div>

        {/* Horizontal Day Scroller */}
        <div>
            <h3 className="text-xs font-bold text-subtle uppercase tracking-widest mb-3 px-2">Sua Jornada</h3>
            <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar px-1 snap-x">
                {Array.from({ length: activeChallenge.days }).map((_, i) => {
                    const d = i + 1;
                    const isActive = d === selectedDay;
                    const isDone = isDayCompleted(d);

                    return (
                    <button
                        key={d}
                        onClick={() => handleDayClick(d)}
                        className={`
                        snap-start flex-shrink-0 w-14 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all relative
                        ${isActive 
                            ? 'bg-orange text-white shadow-lg scale-105' 
                            : 'bg-surface dark:bg-stone-800 text-stone-400 border border-stone-100 dark:border-stone-700'}
                        `}
                    >
                        {isDone && (
                            <div className="absolute top-1 right-1 text-green-500 bg-white rounded-full">
                                <CheckCircle size={12} fill="currentColor" className="text-white" />
                            </div>
                        )}
                        <span className="text-[10px] uppercase font-bold opacity-60">Dia</span>
                        <span className="text-xl font-bold">{d}</span>
                    </button>
                    )
                })}
            </div>
        </div>

        {/* Content Card */}
        <div className="bg-surface dark:bg-stone-900 rounded-[2.5rem] p-8 shadow-card border border-stone-100 dark:border-stone-800 min-h-[400px]">
        {loadingDay ? (
            <div className="flex flex-col items-center justify-center h-full space-y-4 opacity-50">
                <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                <p className="font-serif text-sm text-ink dark:text-stone-300">Buscando inspiração...</p>
            </div>
        ) : dayContent ? (
            <div className="animate-slide-up space-y-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-gold/20 text-gold-dark dark:text-gold rounded-full text-xs font-bold">Dia {selectedDay}</span>
                    {isCompleted && (
                        <span className="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
                            <CheckCircle size={14} /> Concluído
                        </span>
                    )}
                </div>
                
                <div>
                    <h3 className="text-2xl font-serif font-bold text-ink dark:text-white leading-tight mb-6">"{dayContent.thought}"</h3>
                    <div className="p-6 bg-paper dark:bg-stone-800 rounded-3xl border border-stone-100 dark:border-stone-700 relative">
                        <Star className="absolute top-4 right-4 text-gold fill-gold" size={16} />
                        <p className="font-serif italic text-brown-dark dark:text-stone-300 leading-relaxed">"{dayContent.verse}"</p>
                    </div>
                </div>

                {/* Reflection Section */}
                <div className="space-y-3">
                     <h4 className="font-bold text-ink dark:text-white flex items-center gap-2">
                        <BookOpen size={18} className="text-subtle" /> Reflexão Profunda
                    </h4>
                    <div className="text-stone-600 dark:text-stone-400 text-sm leading-7 font-serif text-justify border-l-2 border-gold/30 pl-4">
                        {dayContent.reflection ? dayContent.reflection : "Reflexão sendo gerada..."}
                    </div>
                </div>

                <div className="bg-ink dark:bg-black rounded-3xl p-6 text-white">
                    <h4 className="font-bold text-orange mb-2 flex items-center gap-2">
                        <Zap size={18} /> Desafio de Hoje
                    </h4>
                    <p className="text-stone-300 text-sm leading-relaxed">{dayContent.action}</p>
                </div>

                {/* Complete Button */}
                <button
                    onClick={handleCompleteDay}
                    disabled={isCompleted}
                    className={`
                        w-full py-4 rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all
                        ${isCompleted 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 cursor-default' 
                            : 'bg-gold text-ink dark:text-stone-900 hover:bg-orange hover:text-white active:scale-95'}
                    `}
                >
                    {isCompleted ? (
                        <>
                            <Check size={20} /> Dia Concluído
                        </>
                    ) : (
                        "Concluir Dia"
                    )}
                </button>
            </div>
        ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in pb-20">
      <div className="px-2">
        <h2 className="text-3xl font-serif font-bold text-ink dark:text-white mb-2">Jornadas</h2>
        <p className="text-subtle text-sm">
          Planos de leitura e desafios espirituais para fortalecer sua fé.
        </p>
      </div>

      <div className="grid gap-6">
        {INITIAL_CHALLENGES.map((challenge, idx) => {
            const CurrentIcon = getIcon(idx);
            
            // Calculate progress for list view
            const saved = localStorage.getItem(`lumina_challenge_progress_${challenge.id}`);
            const progress = saved ? JSON.parse(saved).length : 0;
            const percent = Math.round((progress / challenge.days) * 100);

            return (
                <div 
                    key={challenge.id} 
                    onClick={() => handleSelectChallenge(challenge)}
                    className="group bg-surface dark:bg-stone-900 rounded-[2.5rem] p-1 shadow-card cursor-pointer border border-stone-100 dark:border-stone-800 active:scale-[0.98] transition-transform"
                >
                    <div className={`
                        rounded-[2.3rem] p-8 relative overflow-hidden text-white
                        ${getGradient(idx)}
                    `}>
                        <div className="flex justify-between items-start mb-12 relative z-10">
                            <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold border border-white/10">
                                {challenge.days} Dias
                            </span>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-ink group-hover:scale-110 transition-transform">
                                <CurrentIcon size={20} fill="currentColor" className={getGradient(idx).includes('gold') ? 'text-ink' : 'text-stone-700'} />
                            </div>
                        </div>
                        
                        <div className="relative z-10">
                            <h3 className="font-serif font-bold text-2xl mb-2">{challenge.title}</h3>
                            <p className="text-white/80 text-sm font-medium leading-relaxed max-w-[90%] mb-4">
                                {challenge.description}
                            </p>
                            
                            {/* Progress Bar in Card */}
                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-1.5 bg-black/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-white rounded-full" style={{ width: `${percent}%` }}></div>
                                </div>
                                <span className="text-[10px] font-bold">{percent}%</span>
                            </div>
                        </div>

                        {/* Decorative circle */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    </div>
                </div>
        )})}
      </div>
    </div>
  );
};

export default Challenges;