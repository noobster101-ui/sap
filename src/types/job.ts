export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract";
  experience: string;
  description: string;
  skills: string[];
  active: boolean;
}
