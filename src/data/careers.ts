export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract";
  experience: string;
  description: string;
  skills: string[];
}

export const jobOpenings: JobOpening[] = [
  {
    id: "sap-sd-consultant",
    title: "SAP SD Functional Consultant",
    department: "SAP Consulting",
    location: "Hyderabad, India (Remote OK)",
    type: "Full-time",
    experience: "3-7 Years",
    description:
      "We are looking for experienced SAP SD consultants to join our implementation team. Work on end-to-end Sales & Distribution projects with Fortune 500 clients.",
    skills: [
      "SAP SD",
      "Order-to-Cash",
      "Pricing Configuration",
      "Integration with FI/MM",
    ],
  },
  {
    id: "sap-mm-specialist",
    title: "SAP MM Consultant",
    department: "SAP Consulting",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "4-8 Years",
    description:
      "Join our SAP MM practice to deliver Procure-to-Pay solutions. Hands-on configuration and support for material management implementations.",
    skills: [
      "SAP MM",
      "Procure-to-Pay",
      "Inventory Management",
      "Vendor Management",
    ],
  },
  {
    id: "sap-fico-lead",
    title: "SAP FICO Lead Consultant",
    department: "SAP Finance",
    location: "Hyderabad, India (Hybrid)",
    type: "Full-time",
    experience: "7+ Years",
    description:
      "Lead SAP FICO implementations and S/4HANA migrations. Team lead role with client-facing responsibilities and project delivery.",
    skills: ["SAP FICO", "S/4HANA Finance", "New GL", "CO-PA", "Integration"],
  },
  {
    id: "abap-developer",
    title: "SAP ABAP Developer",
    department: "SAP Technical",
    location: "Remote (India)",
    type: "Contract",
    experience: "3-5 Years",
    description:
      "Develop custom ABAP solutions, enhancements, and interfaces for SAP ECC and S/4HANA projects. Focus on performance optimization.",
    skills: [
      "ABAP on HANA",
      "OData Services",
      "CDS Views",
      "SmartForms",
      "Workflows",
    ],
  },
  {
    id: "s4-hana-trainee",
    title: "SAP S/4HANA Fresher Consultant",
    department: "SAP Training & Support",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "0-2 Years",
    description:
      "Entry-level position for fresh SAP trainees. Work on support projects and get hands-on implementation experience with mentorship.",
    skills: [
      "SAP Certification",
      "Basic Functional Knowledge",
      "Quick Learner",
      "Good Communication",
    ],
  },
];

export const getJobOpenings = () => jobOpenings;
