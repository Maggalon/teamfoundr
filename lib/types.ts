export interface Founder {
  id: string;
  name: string;
  age: number;
  role: string;
  company: string;
  bio: string;
  skills: string[];
  telegram: string;
  imageUrl: string;
  lastActive: string;
  matchPercentage: number;
}

export interface UserProfile {
  fullName: string;
  role: string;
  telegram: string;
  bio: string;
  skills: string[];
  experience: string;
  projectDescription: string;
  lookingFor: string;
  imageUrl: string;
}