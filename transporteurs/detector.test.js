import { describe, expect, it } from 'vitest';
import { Detector } from './detector.js';

describe('#Detector', () => {
  describe('constructor', () => {
    it('should throw if no formats given', () => {
      expect(() => new Detector('tracker')).toThrowError(
        'Une liste de formats doit être fournie'
      );
    });

    it('should throw if formats array is empty', () => {
      expect(() => new Detector('tracker', [])).toThrowError(
        'Une liste de formats doit être fournie'
      );
    });
  });

  describe('detecte', () => {
    const detector = new Detector('tracker', ['[0-9]{6}', '[A-Z]{6}']);
    it('should return false if did not match', () => {
      expect(detector.detecte('q123')).toEqual({
        transporteur: 'tracker',
        matched: false,
      });
    });

    it('should return matched pattern if matched', () => {
      expect(detector.detecte('ABCDEF')).toEqual({
        transporteur: 'tracker',
        matched: true,
        pattern: '[A-Z]{6}',
      });
    });
  });
});
