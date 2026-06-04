import React, { useState } from 'react';
import { bullshitData } from '../data/mockData';

const Translator: React.FC = () => {
  const [input, setInput] = useState('');
  const [translation, setTranslation] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleTranslate = () => {
    if (input.trim() === '') return;
    
    setIsScanning(true);
    setTranslation('');

    // Simulation d'une analyse IA sarcastique
    setTimeout(() => {
      const matches = bullshitData.filter(d => 
        d.keywords.some(keyword => input.toLowerCase().includes(keyword.toLowerCase()))
      );
      
      if (matches.length > 0) {
        // Combiner les résultats si plusieurs thèmes sont détectés
        const combinedTranslation = matches.map(m => m.output).join(' De plus, ');
        setTranslation(combinedTranslation);
      } else {
        setTranslation("Erreur 404 : Sincérité non détectée. Cette phrase semble soit trop honnête, soit vide de sens.");
      }
      setIsScanning(false);
    }, 1500);
  };

  return (
    <div className={`card translator ${isScanning ? 'loading' : ''}`}>
      <div className="scanning-bar"></div>
      <h2>🔍 Traducteur de Bullshit</h2>
      <p className="description">Décryptez les non-dits de vos collègues grâce à notre algorithme de cynisme avancé.</p>
      
      <div className="input-group">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: C'est dans ma to-do list..."
        />
        <button className="primary-btn" onClick={handleTranslate} disabled={isScanning}>
          {isScanning ? 'Analyse de la mauvaise foi...' : 'Démasquer la vérité'}
        </button>
      </div>

      <div style={{ marginTop: '0.8rem', fontSize: '0.75rem', color: 'var(--text-light)' }}>
        Essaye : "ASAP", "Agile", "Challenge", "To-do", "Disruptif"...
      </div>

      {translation && !isScanning && (
        <div className="result">
          <small style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase' }}>Réalité brute :</small>
          <p style={{ margin: '0.5rem 0 0', fontSize: '1.1rem', fontWeight: '500' }}>"{translation}"</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
