import { describe, expect, it } from 'vitest';
import { detecteColissimo } from './colissimo.js';

describe('#detecteColissimo', () => {
  describe('1 chiffre + 1 lettre + 11 chiffres', () => {
    it('doit détecter 8D00432154789', () => {
      expect(detecteColissimo('8D00432154789')).toStrictEqual({
        transporteur: 'Colissimo',
        matched: true,
        pattern: '[0-9][A-Z][0-9]{11}',
      });
    });
  });

  describe('2 lettres + 11 chiffres', () => {
    it('doit détecter CK00879241952', () => {
      expect(detecteColissimo('CK00879241952')).toStrictEqual({
        transporteur: 'Colissimo',
        matched: true,
        pattern: '[A-Z]{2}[0-9]{11}',
      });
    });
  });

  describe('14 chiffres', () => {
    it('doit détecter 87000000000000', () => {
      expect(detecteColissimo('87000000000000')).toStrictEqual({
        transporteur: 'Colissimo',
        matched: true,
        pattern: '[0-9]{14}',
      });
    });
  });
});
