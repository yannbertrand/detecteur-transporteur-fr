import { describe, expect, it } from 'vitest';
import { detecteGls } from './gls.js';

describe('#detecteGls', () => {
  describe('règles officielles', () => {
    describe('8 caractères', () => {
      it('doit détecter 00A6Z78A', () => {
        expect(detecteGls('00A6Z78A')).toStrictEqual({
          transporteur: 'GLS',
          matched: true,
          pattern: '[A-Z0-9]{8}',
        });
      });
    });

    describe('11 chiffres', () => {
      it('doit détecter 36631234567', () => {
        expect(detecteGls('36631234567')).toStrictEqual({
          transporteur: 'GLS',
          matched: true,
          pattern: '[0-9]{11}',
        });
      });
    });
  });
});
