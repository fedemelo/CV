
export interface Course extends Hideable {
  name: string;
  originalName?: string;
  code: string;
  credits?: number;
  description?: string;
  link?: string;
}

export interface Location {
  city: string;
  state?: string;
  country?: string;
}

export interface Hideable {
  isHidden?: boolean;
}