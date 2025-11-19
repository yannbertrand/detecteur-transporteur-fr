import { argv, exit } from 'node:process';
import { detecte } from './detect.js';

const numeroSuivi = argv.at(-1);
console.log({ numeroSuivi });
if (!numeroSuivi) {
  console.error('Pas de numéro de suivi détecté');
  exit(1);
}

const resultat = detecte(numeroSuivi);
console.log(resultat);
