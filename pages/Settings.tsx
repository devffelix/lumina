import React, { useState, useEffect } from 'react';
import { User, Moon, Sun, Trash2, Save, Camera, ChevronRight, LogOut, Info } from 'lucide-react';

const Settings: React.FC = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [showSaveMsg, setShowSaveMsg] = useState(false);

  useEffect(() => {
    // Load saved settings
    const savedName = localStorage.getItem('lumina_username');
    if (savedName) setName(savedName);

    const savedAvatar = localStorage.getItem('lumina_avatar');
    if (savedAvatar) setAvatar(savedAvatar);

    const savedTheme = localStorage.getItem('lumina_theme');
    setIsDark(savedTheme === 'dark');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('lumina_username', name);
    setShowSaveMsg(true);
    setTimeout(() => setShowSaveMsg(false), 2000);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 1024 * 1024) { // 1MB limit
        alert("A imagem é muito grande. Escolha uma menor que 1MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setAvatar(base64String);
        localStorage.setItem('lumina_avatar', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('lumina_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('lumina_theme', 'light');
    }
  };

  const clearData = () => {
    if (window.confirm("Tem certeza? Isso apagará todo seu progresso de leitura, anotações e jornadas. Essa ação não pode ser desfeita.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="animate-fade-in space-y-8 pb-10">
      <div className="px-2">
        <h2 className="text-3xl font-serif font-bold text-ink dark:text-white mb-2">Configurações</h2>
        <p className="text-subtle text-sm">Personalize sua experiência no Lumina.</p>
      </div>

      {/* Profile Section */}
      <div className="bg-surface dark:bg-stone-900 rounded-[2.5rem] p-8 shadow-card border border-stone-100 dark:border-stone-800">
        <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2 text-ink dark:text-white">
          <User className="text-orange" size={24} /> Perfil
        </h3>

        <div className="flex flex-col items-center mb-8">
           <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-stone-100 dark:bg-stone-800 border-4 border-white dark:border-stone-700 shadow-lg">
                 {avatar ? (
                   <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-stone-300">
                     <User size={48} />
                   </div>
                 )}
              </div>
              <label 
                htmlFor="avatar-upload" 
                className="absolute bottom-0 right-0 p-2 bg-gold text-ink rounded-full shadow-lg cursor-pointer hover:bg-orange hover:text-white transition-colors"
              >
                <Camera size={18} />
                <input 
                  id="avatar-upload" 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleAvatarChange}
                />
              </label>
           </div>
           <p className="text-xs text-subtle mt-3">Toque na câmera para alterar</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-subtle mb-2 ml-1">Como você quer ser chamado?</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="w-full p-4 bg-paper dark:bg-stone-800 rounded-2xl border-2 border-stone-100 dark:border-stone-700 focus:border-gold outline-none text-ink dark:text-white font-medium transition-colors"
            />
          </div>
          <button 
            onClick={handleSave}
            className="w-full py-4 bg-ink dark:bg-white text-white dark:text-stone-900 rounded-2xl font-bold shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
             {showSaveMsg ? <span className="text-green-400">Salvo!</span> : <><Save size={18} /> Salvar Alterações</>}
          </button>
        </div>
      </div>

      {/* Appearance Section */}
      <div className="bg-surface dark:bg-stone-900 rounded-[2.5rem] p-8 shadow-card border border-stone-100 dark:border-stone-800">
         <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2 text-ink dark:text-white">
            <Sun className="text-gold" size={24} /> Aparência
         </h3>
         
         <div className="flex items-center justify-between p-4 bg-paper dark:bg-stone-800 rounded-2xl">
            <div className="flex items-center gap-3">
               <div className={`p-2 rounded-full ${isDark ? 'bg-stone-700 text-stone-300' : 'bg-orange-light text-orange'}`}>
                  {isDark ? <Moon size={20} /> : <Sun size={20} />}
               </div>
               <div>
                  <h4 className="font-bold text-ink dark:text-white">Modo Escuro</h4>
                  <p className="text-xs text-subtle">Ajustar cores para leitura noturna</p>
               </div>
            </div>
            
            <button 
              onClick={toggleTheme}
              className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${isDark ? 'bg-gold' : 'bg-stone-200'}`}
            >
               <div className={`w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${isDark ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
         </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-surface dark:bg-stone-900 rounded-[2.5rem] p-8 shadow-card border border-stone-100 dark:border-stone-800">
         <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2 text-red-500">
            <Info size={24} /> Zona de Perigo
         </h3>

         <button 
           onClick={clearData}
           className="w-full flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30 group hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
         >
            <div className="flex items-center gap-3">
               <div className="p-2 bg-white dark:bg-red-900/20 rounded-full text-red-500">
                  <Trash2 size={20} />
               </div>
               <div className="text-left">
                  <h4 className="font-bold text-red-600 dark:text-red-400">Apagar Tudo</h4>
                  <p className="text-xs text-red-400 dark:text-red-300">Resetar progresso e anotações</p>
               </div>
            </div>
            <ChevronRight className="text-red-300" />
         </button>
      </div>

      <div className="text-center text-stone-400 text-xs py-4">
         Lumina App v1.0 • Feito com fé
      </div>
    </div>
  );
};

export default Settings;