// COLISSIMO

import { Detector } from './detector.js';

/*
 * Un numéro d'envoi peut prendre différentes formes :
 * - 1 chiffre + 1 lettre + 11 chiffres (Ex : 8D00432154789),
 * - 2 lettres + 11 chiffres (Ex : CK00879241952),
 * - 2 lettres + 9 chiffres + 2 lettres (Ex : CC000000000FR) => Chronopost,
 * - 14 chiffres (Ex : 87000000000000). Attention : si vous voyez à côté de ce numéro la mention « SD », ne la saisissez pas dans le champ de recherche, elle ne fait pas partie du numéro d’objet.
 * https://aide.laposte.fr/contenu/comment-suivre-mon-colis-ou-ma-lettre
 */
export function detecteColissimo(numeroSuivi) {
  const format1 = '[0-9][A-Z][0-9]{11}';
  const format2 = '[A-Z]{2}[0-9]{11}';
  // const format3 = '[A-Z]{2}[0-9]{9}[A-Z]{2}'; => Chronopost
  const format4 = '[0-9]{14}';

  const detector = new Detector('Colissimo', [format1, format2, format4]);

  return detector.detecte(numeroSuivi);
}

export function getLienSuiviColissimo(numeroSuivi) {
  return `https://www.laposte.fr/outils/suivre-vos-envois?code=${numeroSuivi}`;
}
