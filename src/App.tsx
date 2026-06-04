import React from 'react';
import Translator from './components/Translator';
import ExcuseGenerator from './components/ExcuseGenerator';
import IncompetenceCalculator from './components/IncompetenceCalculator';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Le Bureau de la Rigueur</h1>
        <p>"Parce que le professionnalisme n'est pas une option, c'est un miracle."</p>
        
        <div className="productivity-pulse">
          <div className="pulse-dot"></div>
          <span>Niveau de mauvaise foi globale : Optimal</span>
        </div>
      </header>

      <main className="dashboard">
        <Translator />
        <ExcuseGenerator />
        <IncompetenceCalculator />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Département de la Productivité Satirique</p>
        <p className="footer-quote">"Le travail, c'est la santé. Ne rien faire, c'est la préserver."</p>
      </footer>
    </div>
  );
}

export default App;
