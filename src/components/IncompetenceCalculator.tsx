import React, { useState } from 'react';

const IncompetenceCalculator: React.FC = () => {
  const [hourlyRate, setHourlyRate] = useState(50);
  const [participants, setParticipants] = useState(5);
  const [duration, setDuration] = useState(60);

  const totalCost = (hourlyRate * participants * (duration / 60));
  const coffeeEquivalent = Math.floor(totalCost / 1.5);

  return (
    <div className="card calculator">
      <h2>💸 Money Burner 3000</h2>
      <p className="description">Visualisez l'hémorragie financière de votre entreprise en temps réel.</p>
      
      <div className="money-burner">🔥</div>

      <div className="calc-inputs" style={{ gap: '0.75rem' }}>
        <div className="input-field">
          <label>Salaire horaire moyen (€)</label>
          <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} />
        </div>
        <div className="input-field">
          <label>Coupables (Participants)</label>
          <input type="number" value={participants} onChange={(e) => setParticipants(Number(e.target.value))} />
        </div>
        <div className="input-field">
          <label>Minutes perdues</label>
          <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
        </div>
      </div>

      <div className="calc-result">
        <h3 style={{ fontFamily: 'monospace' }}>-{totalCost.toFixed(2)}€</h3>
        <p className="equivalent">
          C'est l'équivalent de <strong>{coffeeEquivalent} capsules Nespresso</strong> jetées directement à la poubelle.
        </p>
      </div>
    </div>
  );
};

export default IncompetenceCalculator;
