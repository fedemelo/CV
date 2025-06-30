import { describe, it, expect } from 'vitest';
import { getYearSequence } from '../../src/utils/year';

describe('year utilities', () => {
  describe('getYearSequence', () => {
    it('should return years separated by comma for different years', () => {
      const dates = [
        new Date("2023-11-15T19:00:00-05:00"),
        new Date("2024-11-13T19:00:00-05:00"),
      ];
      const result = getYearSequence(dates);
      expect(result).toBe("2023, 2024");
    });

    it('should return periods for same year and years for different years', () => {
      const dates = [
        new Date("2021-06-30T19:00:00-05:00"),
        new Date("2021-11-30T19:00:00-05:00"),
        new Date("2023-11-15T19:00:00-05:00"),
      ];
      const result = getYearSequence(dates);
      expect(result).toBe("Spring 2021, Fall 2021, 2023");
    });
  });
}); 