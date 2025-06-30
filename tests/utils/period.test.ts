import { describe, it, expect } from "vitest";
import { getPeriodFromDate, getPeriodFromDates } from "../../src/utils/period";

describe("getPeriodFromDates", () => {
  // Tests only real dates for now, as I do not intend to check that the
  // function is bulletproof, but rather that the displayed data is correct

  // Vector Calculus
  it('should return "Summer 2024" for June 4 to July 26, 2024', () => {
    const result = getPeriodFromDates(
      new Date("2024-06-04"),
      new Date("2024-07-26")
    );
    expect(result).toBe("Summer 2024");
  });

  // CupiTaller
  it('should return "Spring 2022" for February 1 to June 4, 2022', () => {
    const result = getPeriodFromDates(
      new Date("2022-02-01"),
      new Date("2022-06-04")
    );
    expect(result).toBe("Spring 2022");
  });

  // Introduction to Programming
  it('should return "Spring 2021" for February 1 to June 5, 2021', () => {
    const result = getPeriodFromDates(
      new Date("2021-02-01"),
      new Date("2021-06-05")
    );
    expect(result).toBe("Spring 2021");
  });

  // Differential Calculus
  it('should return "Spring 2021" for January 25 to May 29, 2021', () => {
    const result = getPeriodFromDates(
      new Date("2021-01-25"),
      new Date("2021-05-29")
    );
    expect(result).toBe("Spring 2021");
  });

  // Spring 2021 Excellence Award
  it('should return "Spring 2021" for June 30, 2021', () => {
    const result = getPeriodFromDate(
      new Date("2021-06-30"),
    );
    expect(result).toBe("Spring 2021");
  });

  // Fall 2021 Excellence Award
  it('should return "Fall 2021" for November 30, 2021', () => {
    const result = getPeriodFromDate(
      new Date("2021-11-30"),
    );
    expect(result).toBe("Fall 2021");
  });
  
});
