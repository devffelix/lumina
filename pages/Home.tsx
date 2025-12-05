import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Battery, Heart, CloudRain, Zap, Book, ArrowRight, X, Sparkles, Bookmark, Trash2, Share2, Music, Calendar, HelpCircle, Frown, Loader2, Download, RefreshCw } from 'lucide-react';
import { generatePrayer, fetchVerse } from '../services/api';
import { Mood, UserProgress, Note } from '../types';
import { TOTAL_CHAPTERS, POPULAR_VERSES } from '../constants';

// Mapping images to moods using specific religious/spiritual Unsplash images
const MOOD_IMAGES: Record<string, string> = {
  [Mood.Anxious]: "https://images.unsplash.com/photo-1457139621581-298d1801c832?q=80&w=1103&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Man Praying in Church
  [Mood.Tired]: "https://images.unsplash.com/photo-1612620980838-5541dad8e254?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Rest/Bench
  [Mood.Happy]: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Morning Sun
  [Mood.Sad]: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop", // Mountains/Night
  [Mood.Thankful]: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1000&auto=format&fit=crop", // Hands/Sunrise
  [Mood.Confused]: "https://images.unsplash.com/photo-1444312645910-ffa973656eba?q=80&w=1000&auto=format&fit=crop", // Foggy Path
  [Mood.Angry]: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop"  // Nature/Calm
};

const LANDSCAPE_IMAGES = [
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1000&auto=format&fit=crop", // Morning Light
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000&auto=format&fit=crop", // Green Valley
  "https://images.unsplash.com/photo-1501854140884-074cf2b2c3af?q=80&w=1000&auto=format&fit=crop", // Coastline
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop", // Epic Mountains
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop", // Golden Field
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop", // Bridge/Waterfall
  "https://images.unsplash.com/photo-1534067783865-2913f5fdbe23?q=80&w=1000&auto=format&fit=crop", // Sand Dunes
  "https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=1000&auto=format&fit=crop", // Sunrise
  "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1000&auto=format&fit=crop", // Atmospheric Weather
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop", // Starry Night
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop", // Beach
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop"  // Yosemite
];

const MoodCard: React.FC<{ mood: Mood; icon: React.ReactNode; active: boolean; onClick: () => void }> = ({ mood, icon, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`
      relative flex-shrink-0 w-28 h-44 rounded-[1.8rem] overflow-hidden transition-all duration-300 group shadow-md
      ${active ? 'ring-4 ring-gold scale-95 shadow-xl ring-offset-2 ring-offset-paper' : 'scale-100 hover:scale-[1.02]'}
    `}
  >
    {/* Background Image */}
    <img 
      src={MOOD_IMAGES[mood]} 
      alt={mood} 
      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${active ? 'scale-110' : 'group-hover:scale-110'}`}
    />
    
    {/* Gradient Overlay */}
    <div className={`absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90 transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-80'}`}></div>

    {/* Glass Icon Top Right */}
    <div className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border border-white/20 transition-colors ${active ? 'bg-gold text-ink' : 'bg-white/20 text-white'}`}>
       {React.cloneElement(icon as React.ReactElement<any>, { size: 16 })}
    </div>

    {/* Text Content Bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
      <span className={`block font-serif font-bold text-lg leading-tight transition-transform duration-300 ${active ? 'text-gold translate-y-0' : 'text-white translate-y-0.5'}`}>
        {mood}
      </span>
      {active && <div className="h-0.5 w-6 bg-gold mt-1 rounded-full animate-fade-in"></div>}
    </div>
  </button>
);

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [verse, setVerse] = useState<{ text: string; ref: string } | null>(null);
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  
  // Hero Image State
  const [heroImage, setHeroImage] = useState<string>(LANDSCAPE_IMAGES[0]);

  // AI Generation State
  const [aiPrayer, setAiPrayer] = useState<string>('');
  const [isLoadingPrayer, setIsLoadingPrayer] = useState(false);
  const [isLoadingVerse, setIsLoadingVerse] = useState(false);
  
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [userName, setUserName] = useState('Viajante');
  const [isAmenAnimating, setIsAmenAnimating] = useState(false);
  
  // Notes state
  const [notes, setNotes] = useState<Note[]>([]);
  const [showAllNotes, setShowAllNotes] = useState(false);
  
  // Ref for capturing the card
  const prayerCardRef = useRef<HTMLDivElement>(null);

  // Time-based Greeting Logic
  const today = new Date();
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const dateString = today.toLocaleDateString('pt-BR', dateOptions);
  
  const hour = today.getHours();
  let timeGreeting = 'Bom dia';
  if (hour >= 12 && hour < 18) timeGreeting = 'Boa tarde';
  if (hour >= 18) timeGreeting = 'Boa noite';

  useEffect(() => {
    const saved = localStorage.getItem('lumina_progress');
    if (saved) setProgress(JSON.parse(saved));
    
    const savedNotes = localStorage.getItem('lumina_notes');
    if (savedNotes) setNotes(JSON.parse(savedNotes));

    const savedName = localStorage.getItem('lumina_username');
    if (savedName) setUserName(savedName);

    // Initial load
    handleRefreshVerse();
  }, []);

  const handleRefreshVerse = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsLoadingVerse(true);
    try {
      const randomIndex = Math.floor(Math.random() * POPULAR_VERSES.length);
      const randomRef = POPULAR_VERSES[randomIndex];
      // Check if we are repeating the same verse, if so try one next to it
      const targetRef = (verse && verse.ref === randomRef) 
          ? POPULAR_VERSES[(randomIndex + 1) % POPULAR_VERSES.length] 
          : randomRef;

      // Update Verse
      const v = await fetchVerse(targetRef);
      setVerse({ text: v.text, ref: v.reference });

      // Update Image
      const randomImgIndex = Math.floor(Math.random() * LANDSCAPE_IMAGES.length);
      setHeroImage(LANDSCAPE_IMAGES[randomImgIndex]);

    } catch (e) {
      setVerse({ text: "O Senhor é o meu pastor, nada me faltará.", ref: "Psalms 23:1" });
    } finally {
      setIsLoadingVerse(false);
    }
  };

  const handleMoodSelect = async (mood: Mood) => {
    setSelectedMood(mood);
    setIsLoadingPrayer(true);
    const prayer = await generatePrayer(mood);
    setAiPrayer(prayer);
    setIsLoadingPrayer(false);
  };

  const handleAmen = () => {
    setIsAmenAnimating(true);
    setTimeout(() => {
      setIsAmenAnimating(false);
      setSelectedMood(null);
    }, 2000);
  };

  const handleShareVerse = async () => {
    if (verse && navigator.share) {
      try {
        await navigator.share({
          title: 'Versículo do Dia - Lumina',
          text: `"${verse.text}" - ${verse.ref}`,
        });
      } catch (err) {
        console.log('Error sharing', err);
      }
    }
  };

  const handleDownloadImage = async () => {
    if (!prayerCardRef.current) return;
    
    // We can use the global html2canvas if loaded via script tag
    // @ts-ignore
    const html2canvas = window.html2canvas;
    
    if (html2canvas) {
        try {
            const canvas = await html2canvas(prayerCardRef.current, {
                useCORS: true, // Important for external images
                scale: 2, // Better quality
                backgroundColor: null, // Transparent if needed, or white
            });
            
            const image = canvas.toDataURL("image/png");
            
            // Try native sharing first (mobile feel)
            if (navigator.share) {
                 const blob = await (await fetch(image)).blob();
                 const file = new File([blob], 'oracao-lumina.png', { type: blob.type });
                 if (navigator.canShare && navigator.canShare({ files: [file] })) {
                    await navigator.share({
                        files: [file],
                        title: 'Minha Oração',
                        text: 'Uma oração especial do app Lumina.',
                    });
                    return;
                 }
            }

            // Fallback to download
            const link = document.createElement('a');
            link.href = image;
            link.download = `oracao-${selectedMood?.toLowerCase()}.png`;
            link.click();
            
        } catch (error) {
            console.error("Error generating image:", error);
            alert("Não foi possível salvar a imagem. Tente novamente.");
        }
    } else {
        alert("Recurso de imagem ainda carregando, tente em alguns segundos.");
    }
  };

  const handleReadChapter = () => {
    if (!verse) return;
    try {
      // Split "1 Peter 5:7" into "1 Peter 5" and "7"
      const parts = verse.ref.split(':');
      const refPart = parts[0]; 
      const verseNumPart = parts[1];

      const lastSpaceIndex = refPart.lastIndexOf(' ');
      
      if (lastSpaceIndex !== -1) {
        const bookName = refPart.substring(0, lastSpaceIndex); 
        const chapter = parseInt(refPart.substring(lastSpaceIndex + 1)); 
        const verseNum = verseNumPart ? parseInt(verseNumPart) : undefined;
        
        navigate('/bible', { 
            state: { 
                book: bookName, 
                chapter: chapter,
                verse: verseNum // Pass the specific verse number
            } 
        });
      } else {
        navigate('/bible');
      }
    } catch (e) {
      console.error("Error parsing reference", e);
      navigate('/bible');
    }
  };

  const deleteNote = (noteId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newNotes = notes.filter(n => n.id !== noteId);
    setNotes(newNotes);
    localStorage.setItem('lumina_notes', JSON.stringify(newNotes));
  };

  const percentage = progress ? Math.round((progress.readChapters.length / TOTAL_CHAPTERS) * 100) : 0;

  return (
    <div className="space-y-10 animate-fade-in pb-4">
      
      {/* Header Info with Dynamic Greeting */}
      <div className="flex flex-col gap-1 px-2 pt-4 relative">
        <div className="flex items-center gap-2 text-subtle mb-1">
          <Calendar size={12} className="text-orange" />
          <p className="text-xs font-bold uppercase tracking-widest">{dateString}</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink dark:text-white leading-tight">
          {timeGreeting}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-gold">{userName}</span>.
        </h2>
        
        {/* Streak Badge */}
        <div className="absolute top-4 right-2">
           <div className="bg-surface dark:bg-stone-800 text-ink dark:text-white px-3 py-1.5 rounded-full font-bold text-xs border border-stone-200 dark:border-stone-700 flex items-center gap-1.5 shadow-sm">
            <Zap size={14} className="text-orange fill-orange" /> {progress?.streak || 0}
          </div>
        </div>
      </div>

      {/* Hero: Verse of the Day Card */}
      <div className="relative w-full min-h-[24rem] rounded-[2.5rem] overflow-hidden shadow-card group transition-all duration-500 hover:shadow-2xl flex flex-col">
        <img 
          src={heroImage}
          alt="Verse Background" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90"></div>
        
        {/* Refresh Verse Button */}
        <button 
          onClick={handleRefreshVerse}
          disabled={isLoadingVerse}
          className="absolute top-6 right-6 p-2 rounded-full bg-black/20 backdrop-blur-md text-white/80 hover:bg-black/40 hover:text-white transition-all z-20 border border-white/10"
        >
           <RefreshCw size={18} className={isLoadingVerse ? "animate-spin" : ""} />
        </button>
        
        <div className="relative z-10 flex flex-col items-center justify-between flex-1 text-center px-6 py-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/10 shadow-lg mb-4">
             <Sparkles size={12} className="text-gold" />
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/90">Versículo do Dia</span>
          </div>
          
          {verse && !isLoadingVerse ? (
            <div className="flex-1 flex flex-col justify-center w-full max-w-2xl animate-fade-in my-4">
              <p className="font-serif text-lg md:text-2xl lg:text-3xl leading-relaxed text-white drop-shadow-xl mb-6 break-words">
                "{verse.text}"
              </p>
              <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80"></div>
                 <p className="font-sans font-bold text-sm tracking-widest text-white/90 uppercase">{verse.ref}</p>
              </div>
            </div>
          ) : (
            <div className="flex-1 w-full flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-white/50 animate-spin" />
            </div>
          )}

          {/* Action Buttons on Card */}
          <div className="flex gap-3 w-full max-w-sm justify-center mt-4">
            <button 
              onClick={handleReadChapter}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-white text-xs font-bold transition-all border border-white/10 active:scale-95"
            >
               <Book size={16} /> Ler Capítulo
            </button>
            <button 
              onClick={handleShareVerse}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 bg-white text-ink hover:bg-stone-100 rounded-2xl text-xs font-bold transition-all shadow-lg active:scale-95"
            >
               <Share2 size={16} /> Compartilhar
            </button>
          </div>
        </div>
      </div>

      {/* Mood Section */}
      <div className="-mx-4 md:mx-0">
        <div className="flex justify-between items-end px-6 md:px-2 mb-5">
           <div>
              <h3 className="text-xl font-bold text-ink dark:text-white font-serif">Como está seu coração?</h3>
              <p className="text-xs text-subtle mt-1">Encontre uma oração para o seu momento.</p>
           </div>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-8 pt-2 px-6 md:px-2 no-scrollbar snap-x items-center">
          <div className="snap-start"><MoodCard mood={Mood.Anxious} icon={<Zap />} active={selectedMood === Mood.Anxious} onClick={() => handleMoodSelect(Mood.Anxious)} /></div>
          <div className="snap-start"><MoodCard mood={Mood.Tired} icon={<Battery />} active={selectedMood === Mood.Tired} onClick={() => handleMoodSelect(Mood.Tired)} /></div>
          <div className="snap-start"><MoodCard mood={Mood.Happy} icon={<Sun />} active={selectedMood === Mood.Happy} onClick={() => handleMoodSelect(Mood.Happy)} /></div>
          <div className="snap-start"><MoodCard mood={Mood.Sad} icon={<CloudRain />} active={selectedMood === Mood.Sad} onClick={() => handleMoodSelect(Mood.Sad)} /></div>
          <div className="snap-start"><MoodCard mood={Mood.Thankful} icon={<Heart />} active={selectedMood === Mood.Thankful} onClick={() => handleMoodSelect(Mood.Thankful)} /></div>
          <div className="snap-start"><MoodCard mood={Mood.Confused} icon={<HelpCircle />} active={selectedMood === Mood.Confused} onClick={() => handleMoodSelect(Mood.Confused)} /></div>
          <div className="snap-start"><MoodCard mood={Mood.Angry} icon={<Frown />} active={selectedMood === Mood.Angry} onClick={() => handleMoodSelect(Mood.Angry)} /></div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div 
            onClick={() => navigate('/bible')}
            className="group bg-surface dark:bg-stone-800 p-1 rounded-[2.5rem] shadow-soft border border-stone-100 dark:border-stone-700 cursor-pointer active:scale-[0.98] transition-transform relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-ink dark:text-white transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                <Book size={100} />
            </div>
            <div className="p-8 flex flex-col justify-between h-full relative z-10">
                <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 bg-orange/10 text-orange rounded-2xl flex items-center justify-center">
                        <Book size={28} />
                    </div>
                    <div className="bg-paper dark:bg-stone-900 px-4 py-1.5 rounded-full text-[10px] font-bold text-subtle border border-stone-200 dark:border-stone-700 uppercase tracking-wider">
                        Leitura
                    </div>
                </div>
                <div>
                    <h4 className="font-serif font-bold text-2xl text-ink dark:text-white mb-2 group-hover:text-orange transition-colors">Continuar Leitura</h4>
                    <p className="text-sm text-subtle">Você já leu {percentage}% da Bíblia.</p>
                </div>
                <div className="mt-6 w-full h-2 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
                    <div className="h-full bg-orange rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div>
                </div>
            </div>
        </div>

        <div 
            onClick={() => navigate('/worship')}
            className="group bg-stone-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-between shadow-card relative overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
        >
            <div className="absolute top-[-20%] right-[-20%] w-56 h-56 bg-gold rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-40 h-40 bg-orange rounded-full blur-[60px] opacity-20"></div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-stone-900 fixed bg-stone-900" style={{display: 'none'}}></div> 
                  {/* Fixed fixed styling issue above with forced override just in case */}
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                      <Music size={28} />
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                      <p className="text-[10px] text-stone-300 uppercase tracking-widest font-bold">IA Suggest</p>
                  </div>
                </div>
                
                <div>
                    <h4 className="font-serif font-bold text-2xl mb-1">Momento de Louvor</h4>
                    <p className="text-stone-400 text-sm">Descubra músicas que tocam a alma.</p>
                </div>
            </div>
            
            <div className="absolute right-8 bottom-8 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="text-gold" />
            </div>
        </div>
      </div>

      {/* My Notes Section */}
      {notes.length > 0 && (
        <div className="pt-4 animate-fade-in">
          <div className="flex justify-between items-end px-2 mb-5">
            <h3 className="text-xl font-bold text-ink dark:text-white font-serif">Minhas Anotações</h3>
            <button 
              onClick={() => setShowAllNotes(!showAllNotes)}
              className="text-xs font-bold text-gold hover:text-gold-dark transition-colors uppercase tracking-wider"
            >
              {showAllNotes ? 'Ver menos' : 'Ver todas'}
            </button>
          </div>
          
          <div className="grid gap-4">
            {notes.slice(0, showAllNotes ? undefined : 2).map((note) => (
              <div key={note.id} className="bg-surface dark:bg-stone-800 p-6 rounded-[2rem] border border-stone-100 dark:border-stone-700 shadow-sm relative group hover:border-gold/30 transition-colors">
                 <button 
                    onClick={(e) => deleteNote(note.id, e)}
                    className="absolute top-5 right-5 p-2 text-stone-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all opacity-0 group-hover:opacity-100"
                 >
                    <Trash2 size={16} />
                 </button>
                 <div className="flex items-center gap-2 mb-3">
                    <Bookmark size={14} className="text-gold" fill="currentColor" />
                    <span className="text-xs font-bold text-subtle uppercase tracking-wider">{note.reference}</span>
                 </div>
                 <p className="font-serif text-ink dark:text-stone-200 italic leading-relaxed text-lg">"{note.text}"</p>
                 <div className="mt-4 flex justify-end">
                    <span className="text-[10px] font-bold text-stone-300 uppercase tracking-widest bg-paper dark:bg-stone-900 px-2 py-1 rounded">
                      {new Date(note.date).toLocaleDateString()}
                    </span>
                 </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Prayer Modal Sheet */}
      {selectedMood && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center sm:p-4 bg-ink/60 backdrop-blur-sm animate-fade-in">
          
          {/* Confetti/Particle Effects */}
          {isAmenAnimating && (
            <div className="fixed inset-0 z-[60] pointer-events-none flex items-center justify-center">
              {Array.from({ length: 15 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute text-4xl animate-float-up"
                  style={{
                    left: `${50 + (Math.random() * 60 - 30)}%`, 
                    bottom: '20%',
                    animationDelay: `${Math.random() * 0.5}s`,
                    animationDuration: `${1 + Math.random()}s`
                  }}
                >
                  {['🙏', '✨', '🙌', '🤍', '🕊️'][Math.floor(Math.random() * 5)]}
                </div>
              ))}
            </div>
          )}

          <div 
             className="bg-paper dark:bg-stone-900 md:rounded-[2.5rem] rounded-t-[2.5rem] w-full max-w-md p-0 relative shadow-2xl animate-slide-up max-h-[85vh] overflow-y-auto overflow-x-hidden"
             style={{ boxShadow: "0 -10px 40px rgba(0,0,0,0.3)" }}
          >
            {/* THIS DIV is what will be captured by html2canvas */}
            <div ref={prayerCardRef} className="bg-paper dark:bg-stone-900 md:rounded-t-[2.5rem]">
                {/* Modal Visual Header with Static Image */}
                <div className="h-48 w-full relative bg-ink md:rounded-t-[2.5rem]">
                    <img 
                        src={MOOD_IMAGES[selectedMood]} 
                        className="w-full h-full object-cover" 
                        alt="Header" 
                        crossOrigin="anonymous" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper dark:to-stone-900"></div>
                </div>

                <div className="px-8 pb-8 -mt-16 relative z-10">
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-surface dark:bg-stone-800 text-gold shadow-2xl border-4 border-paper dark:border-stone-900">
                            <Heart size={40} fill="currentColor" />
                        </div>
                    </div>
                    
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-serif font-bold text-ink dark:text-white leading-tight">
                            Oração para<br/>
                            <span className="text-gold text-3xl">{selectedMood}</span>
                        </h3>
                    </div>

                    {isLoadingPrayer && !aiPrayer ? (
                    <div className="space-y-4 py-4">
                        <div className="h-4 bg-stone-200 dark:bg-stone-800 rounded w-3/4 mx-auto animate-pulse"></div>
                        <div className="h-4 bg-stone-200 dark:bg-stone-800 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-stone-200 dark:bg-stone-800 rounded w-5/6 mx-auto animate-pulse"></div>
                        <div className="h-4 bg-stone-200 dark:bg-stone-800 rounded w-2/3 mx-auto animate-pulse"></div>
                    </div>
                    ) : (
                    <div className="text-center animate-fade-in">
                        <div className="relative mb-6">
                            <span className="absolute -top-6 left-0 text-8xl text-gold/10 font-serif leading-none">"</span>
                            <p className="text-lg text-brown-dark dark:text-stone-300 leading-loose font-serif italic px-2">
                                {aiPrayer}
                            </p>
                            <span className="absolute -bottom-10 right-0 text-8xl text-gold/10 font-serif leading-none">"</span>
                        </div>
                        
                        <div className="text-xs text-subtle font-bold uppercase tracking-widest mt-8 mb-2">Lumina App</div>
                    </div>
                    )}
                </div>
            </div>

            {/* Close Button - Outside the capture area */}
            <button 
                onClick={() => setSelectedMood(null)}
                className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 border border-white/10 z-50"
            >
                <X size={20} />
            </button>

            {/* Action Buttons */}
            <div className="px-8 pb-8 pt-0 flex gap-3">
                 <button 
                    onClick={handleDownloadImage}
                    disabled={isLoadingPrayer}
                    className="flex-1 bg-surface dark:bg-stone-800 text-ink dark:text-white py-4 rounded-2xl font-bold text-sm shadow-md border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-700 transition-all flex items-center justify-center gap-2"
                >
                    <Download size={18} /> Salvar Oração
                </button>
                <button 
                    onClick={handleAmen}
                    disabled={isAmenAnimating}
                    className={`
                      flex-[2] bg-ink dark:bg-gold text-white dark:text-stone-900 py-4 rounded-2xl font-bold text-lg shadow-xl 
                      hover:bg-stone-800 dark:hover:bg-orange transition-all active:scale-[0.98]
                      ${isAmenAnimating ? 'scale-95 opacity-80' : ''}
                    `}
                >
                    {isAmenAnimating ? 'Amém! 🙏' : 'Amém'}
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;