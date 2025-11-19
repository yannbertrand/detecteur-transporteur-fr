import { describe, expect, it } from 'vitest';
import { detecteChronopost } from './chronopost.js';

describe('#detecteChronopost', () => {
  describe('règles officielles', () => {
    describe('2 lettres + 9 chiffres + 2 lettres', () => {
      it('doit détecter XX123456789FR', () => {
        expect(detecteChronopost('XX123456789FR')).toStrictEqual({
          transporteur: 'Chronopost',
          matched: true,
          pattern: '[A-Z]{2}[0-9]{9}[A-Z]{2}',
        });
      });

      it('doit détecter XN006396837JB', () => {
        expect(detecteChronopost('XN006396837JB')).toStrictEqual({
          transporteur: 'Chronopost',
          matched: true,
          pattern: '[A-Z]{2}[0-9]{9}[A-Z]{2}',
        });
      });
    });

    describe('15 caractères', () => {
      it('doit détecter 87000000000000A', () => {
        expect(detecteChronopost('87000000000000A')).toStrictEqual({
          transporteur: 'Chronopost',
          matched: true,
          pattern: '[A-Z0-9]{15}',
        });
      });
    });
  });
});
