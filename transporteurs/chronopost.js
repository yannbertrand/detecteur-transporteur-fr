// CHRONOPOST

import { Detector } from './detector.js';

/*
 * Le numéro de colis est composé de 13 caractères :
 * 2 lettres + 9 chiffres + 2 lettres (ex: XX123456789FR) ou
 * 15 caractères pour les colis en provenance de l'étranger.
 * https://www.chronopost.fr/fr/faq/destinataire/ou-trouver-mon-numero-de-colis
 */
export function detecteChronopost(numeroSuivi) {
  const format1 = '[A-Z]{2}[0-9]{9}[A-Z]{2}';
  const format2 = '[A-Z0-9]{15}';

  const detector = new Detector('Chronopost', [format1, format2]);

  return detector.detecte(numeroSuivi);
}

export function getLienSuiviChronopost(numeroSuivi) {
  return `https://www.chronopost.fr/tracking-no-cms/suivi-page?listeNumerosLT=${numeroSuivi}`;
}
