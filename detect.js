import { detecteChronopost } from './transporteurs/chronopost.js';
import { detecteColissimo } from './transporteurs/colissimo.js';
import { detecteGls } from './transporteurs/gls.js';

export function detecte(numeroSuivi) {
  return [
    detecteChronopost(numeroSuivi),
    detecteColissimo(numeroSuivi),
    detecteGls(numeroSuivi),
  ];
}
