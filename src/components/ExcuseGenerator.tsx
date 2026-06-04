import React, { useState } from 'react';
import { excuseComponents } from '../data/mockData';

const ExcuseGenerator: React.FC = () => {
  const [excuse, setExcuse] = useState('');
  const [shameLevel, setShameLevel] = useState(0);

  const generateExcuse = () => {
    const { prefixes, middles, suffixes } = excuseComponents;
    const p = prefixes[Math.floor(Math.random() * prefixes.length)];
    const m = middles[Math.floor(Math.random() * middles.length)];
    const s = suffixes[Math.floor(Math.random() * suffixes.length)];
    setExcuse(`${p}${m}${s}`);
    setShameLevel(prev => Math.min(prev + 15, 100));
  };

  return (
    <div className="card excuse-generator">
      <h2>🎭 Générateur d'Excuses (G.E.M.)</h2>
      <p className="description">Plus besoin de travailler quand on a les bons mots. Générez l'impossible.</p>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.4rem' }}>
          <span>Niveau d'audace</span>
          <span>{shameLevel}%</span>
        </div>
        <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ 
            width: `${shameLevel}%`, 
            height: '100%', 
            background: `linear-gradient(to right, #6366f1, #ec4899)`,
            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}></div>
        </div>
      </div>

      <button className="primary-btn" onClick={generateExcuse}>Générer un chef-d'œuvre</button>
      
      {excuse && (
        <div className="result" style={{ position: 'relative' }}>
          <p style={{ fontStyle: 'italic', color: 'var(--text-dark)', marginBottom: '1rem' }}>"{excuse}"</p>
          <button 
            onClick={() => navigator.clipboard.writeText(excuse)}
            style={{ background: 'transparent', color: 'var(--primary)', padding: 0, fontSize: '0.8rem', textDecoration: 'underline' }}
          >
            Copier pour le mail de 17h59
          </button>
        </div>
      )}
    </div>
  );
};

export default ExcuseGenerator;
