// GLS
import { Detector } from './detector.js';

/*
 * Un numéro de colis est composé de :
 * 8 caractères Alphanumériques (exemple : 00A6Z78A) ou bien
 * d'une série de 11 chiffres (exemple : 36631234567).
 * https://gls-group.com/FR/fr/suivi-colis/
 */
export function detecteGls(numeroSuivi) {
  const format1 = '[A-Z0-9]{8}';
  const format2 = '[0-9]{11}';

  const detector = new Detector('GLS', [format1, format2]);

  return detector.detecte(numeroSuivi);
}

export function getLienSuiviGls(numeroSuivi) {
  return `https://moncolis.gls-france.com/fr/${numeroSuivi}/`;
}
