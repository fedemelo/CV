import type { Location, Course, Period, Hideable } from "./types";

// UTA = Undergraduate Teaching Assistant;
// URTA = Undergraduate Research Teaching Assistant;
type TeachingRole = 'UTA' | 'URTA' | 'Tutor' | 'Lab Assistant' | 'Grader';

export interface TeachingExperience extends Location, Hideable {
  role: TeachingRole;
  course: Course,
  institution: string;
  period: Period,
  supervisor: string;
  description: string;
  isCurrent?: boolean;
}