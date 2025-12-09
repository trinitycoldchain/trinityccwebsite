import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import RateSheet from './components/RateSheet';
import GelPacks from './components/GelPacks';
import ContractInfo from './components/ContractInfo';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <GelPacks />
        <RateSheet />
        <ContractInfo />
        <ContactForm />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
             {/* Footer Logo */}
             <svg className="h-10 w-10 opacity-80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 10L90 85H10L50 10Z" className="fill-slate-800" stroke="#475569" strokeWidth="2" />
                  <path d="M50 40L70 75H30L50 40Z" className="fill-cyan-500" />
             </svg>
             <div>
                <span className="text-white font-bold text-lg tracking-wide block">TRINITY COLD CHAIN</span>
                <p className="text-sm mt-1 text-slate-500">1701 N. Delilah St • Corona, CA 92879</p>
             </div>
          </div>
          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Trinity Cold Chain.</p>
            <p className="text-slate-600 mt-1">All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;