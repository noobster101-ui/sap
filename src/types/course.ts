export interface SAPCourse {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  levels: string[];
  features: string[];
  image: string;
  author: {
    name: string;
    image: string;
    designation: string;
  };
  tags: string[];
  publishDate: string;
  division: "ECC" | "S/4HANA";
  brochure?: string;
  active: boolean;
}
