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
}

export const sapFunctionalCourses: SAPCourse[] = [
  {
    id: "sap-s4-hana-sourcing-procurement",
    title: "SAP S/4 HANA Sourcing and Procurement",
    shortDescription:
      "Master procurement processes in SAP S/4 HANA with real-time business scenarios.",
    fullDescription: `In this course, We will teach you real-time business scenarios with the best examples. 

This course is designed to give participants an overview of Sourcing and Procurement in SAP S/4 HANA.

SAP S/4 HANA Procurement provides all important functions that are necessary for handling all internal purchasing processes. The well-known and still existing functions of the ERP Material Management Module (SAP MM) have been supplemented by a modern user interface with numerous SAP Fiori apps.

Configure purchasing, sourcing, invoicing, evaluation, and more
Run your sourcing and procurement processes in SAP S/4HANA
Analyze your procurement operations

SAP Business Suite 4 SAP HANA (or SAP S/4HANA) is a business suite that is built on SAP's proprietary operational database system and in-memory computing platform called SAP HANA

The S/4HANA product offering consists of two editions: SAP S/4HANA On-Premise and SAP S/4HANA Cloud.`,
    levels: [
      "Level 1 - We will teach you configuration and customization for SAP S/4 HANA - Sourcing and Procurement.",
      "Level 2 - We will teach you some real-time business scenarios.",
      "Level 3 - We will teach you features and functions of the S/4HANA innovation in the sourcing and procurement module",
      "Level 4 - We will teach you methods of SAP S/4 HANA",
      "Level 5 - We will teach you SAP S/4 HANA New Implementation/System Conversion/Landscape Transformation Projects in in sourcing and procurement module.",
    ],
    features: [
      "Real-time business scenarios",
      "Detailed Study Material",
      "Project hands-on",
      "Resume preparation",
      "Interview preparation",
      "Mock interviews",
    ],
    image: "/images/sap/sap-s4-hana.jpg",
    author: {
      name: "Murthy",
      image: "/images/testimonials/auth-01.png",
      designation: "SAP Functional Consultant",
    },
    tags: ["S/4 HANA", "Procurement"],
    publishDate: "2025",
  },
  {
    id: "sap-mm-material-management",
    title: "SAP MM (Material Management)",
    shortDescription:
      "Learn material management with detailed theory and hands-on configuration.",
    fullDescription: `In this course, We will teach you real-time business scenarios with the best examples. 

Material Management is one of the core modules of SAP. This course contains a detailed explanation of the theory and hands-on on how to configure the SAP MM process.

SAP Material Management covers all tasks within the supply chain, including consumption-based planning, purchasing, vendor evaluation, and invoice verification. It also includes inventory, production planning, and warehouse management.`,
    levels: [
      "Level 1 - We will teach you the most used end-user transactions for MM",
      "Level 2 - We will teach you configuration and customization for MM",
      "Level 3 - We will teach you real-time business scenarios, System landscapes and project lifecycles for MM.",
      "Level 4 - We will teach you integration between SAP MM – SD, FICO, PP and WM modules.",
      "Level 5 - We will teach you technical requirement for the functional consultants.",
    ],
    features: [
      "Real-time business scenarios",
      "Detailed Study Material",
      "Project hands-on",
      "Resume preparation",
      "Interview preparation",
      "Mock interviews",
    ],
    image: "/images/sap/sap-mm.jpg",
    author: {
      name: "Murthy",
      image: "/images/testimonials/auth-01.png",
      designation: "SAP Functional Consultant",
    },
    tags: ["MM", "Material Management"],
    publishDate: "2025",
  },
  {
    id: "sap-s4-hana-sales",
    title: "SAP S/4 HANA Sales",
    shortDescription: "Comprehensive sales process training in SAP S/4 HANA.",
    fullDescription: `In This Course, We will teach you real-time business scenarios with the best examples. 

This course is designed to give participants an overview of sales processes in SAP S/4HANA.

This course will prepare you to explain the features and functions of the S/4HANA innovation in Sales, Describe the relevant simplifications compared to SAP ERP, and Execute sales processes.

SAP Business Suite 4 SAP HANA (or SAP S/4HANA) is a business suite that is built on SAP's proprietary operational database system and in-memory computing platform called SAP HANA

The S/4HANA product offering consists of two editions: SAP S/4HANA On-Premise and SAP S/4HANA Cloud.`,
    levels: [
      "Level 1 - We will teach you configuration and customization for SAP S/4 HANA – Sales.",
      "Level 2 - We will teach you some real-time business scenarios.",
      "Level 3 - We will teach you features and functions of the S/4HANA innovation in the Sales module",
      "Level 4 - We will teach you methods of SAP S/4 HANA",
      "Level 5 - We will teach you SAP S/4 HANA New Implementation/System Conversion/Landscape Transformation Projects in the Sales module.",
    ],
    features: [
      "Real-time business scenarios",
      "Detailed Study Material",
      "Project hands-on",
      "Resume preparation",
      "Interview preparation",
      "Mock interviews",
    ],
    image: "/images/sap/sap-sales.png",
    author: {
      name: "Murthy",
      image: "/images/testimonials/auth-01.png",
      designation: "SAP Functional Consultant",
    },
    tags: ["S/4 HANA", "Sales"],
    publishDate: "2025",
  },
  {
    id: "sap-fico",
    title: "SAP FICO (Finance & Controlling)",
    shortDescription: "Master financial accounting and controlling in SAP.",
    fullDescription: `In this course, We will teach you real-time business scenarios with the best examples. 

SAP Finance and Controlling is one of the key components of the SAP ERP system and is used to manage all of its financial data.

SAP FICO also integrates with other SAP Logistics Modules including SD, PP, PM, QM, and MM.`,
    levels: [
      "Level 1 - We will teach you the most used end-user transactions for SD",
      "Level 2 - We will teach you configuration and customization for SD",
      "Level 3 - We will teach you real-time business scenarios, System landscapes, and project life cycles for SD.",
      "Level 4 - We will teach you integration between different SAP modules.",
      "Level 5 - We will teach you technical requirements for the functional consultants.",
    ],
    features: [
      "Real-time business scenarios",
      "Detailed Study Material",
      "Project hands-on",
      "Resume preparation",
      "Interview preparation",
      "Mock interviews",
    ],
    image: "/images/sap/sap-fico.jpg",
    author: {
      name: "Murthy",
      image: "/images/testimonials/auth-01.png",
      designation: "SAP Functional Consultant",
    },
    tags: ["FICO", "Finance"],
    publishDate: "2025",
  },
  {
    id: "sap-sd-sales-distribution",
    title: "SAP SD (Sales & Distribution)",
    shortDescription:
      "Master sales and distribution processes in SAP with real-time scenarios.",
    fullDescription: `In this course, We will teach you real-time business scenarios with the best examples.

SAP Sales and Distribution (SD) is one of the key functional modules in SAP ERP. This course covers the complete sales process from order to cash.

Learn to configure sales orders, pricing, delivery, billing, and credit management.
Understand integration points with MM, FICO, and other SAP modules.
Master real-world business scenarios and best practices.`,
    levels: [
      "Level 1 - We will teach you the most used end-user transactions for SD",
      "Level 2 - We will teach you configuration and customization for SD",
      "Level 3 - We will teach you real-time business scenarios, System landscapes, and project life cycles for SD.",
      "Level 4 - We will teach you integration between SAP SD – MM, FICO, PP modules.",
      "Level 5 - We will teach you technical requirements for functional consultants.",
    ],
    features: [
      "Real-time business scenarios",
      "Detailed Study Material",
      "Project hands-on",
      "Resume preparation",
      "Interview preparation",
      "Mock interviews",
    ],
    image: "/images/sap/sap-sd.jpg",
    author: {
      name: "Murthy",
      image: "/images/testimonials/auth-01.png",
      designation: "SAP Functional Consultant",
    },
    tags: ["SD", "Sales Distribution"],
    publishDate: "2025",
  },
];

export const sapTechnicalCourses: SAPCourse[] = [
  {
    id: "sap-abap",
    title: "SAP ABAP",
    shortDescription:
      "Advanced Business Application Programming - Build SAP applications.",
    fullDescription: `SAP ABAP Training is useful for evolving applications for the SAP R/3 system. This training helps you with complete knowledge about ERP.

We provide both theoretical and practical knowledge with best real-time scenarios.

My syllabus will match with the real world requirements for both beginners to advanced level.

We will explain SAP ABAP from the ground up starting with the basics.`,
    levels: [
      "ABAP Basics and Fundamentals",
      "Data Dictionary and Tables",
      "Reports and Module Pools",
      "BAPIs and Function Modules",
      "Object-Oriented ABAP",
      "Adobe Forms and SmartForms",
    ],
    features: [
      "Real-time projects",
      "Complete syllabus",
      "Hands-on exercises",
      "Resume preparation",
      "Interview guidance",
      "Certification support",
    ],
    image: "/images/sap/sap-abap.jpg",
    author: {
      name: "Murthy",
      image: "/images/testimonials/auth-01.png",
      designation: "SAP Technical Consultant",
    },
    tags: ["ABAP", "Technical"],
    publishDate: "2025",
  },
  {
    id: "sap-ui5-fiori",
    title: "SAP UI5 & FIORI",
    shortDescription: "Build modern SAP interfaces with SAPUI5 and FIORI.",
    fullDescription: `SAPUI5 is the top trend in the SAP marketplace and almost all the major projects now requires this skill-set.

We will guide you from simple Hello World application to your own responsive complex application.The Hands-on in the training involves a lot of exercises which makes the will explain each concept course interesting.

We based on real world scenarios.`,
    levels: [
      "HTML5 and CSS3 Fundamentals",
      "JavaScript Essentials",
      "SAPUI5/OData Basics",
      "MVC Architecture",
      "Custom Application Development",
      "FIORI Launchpad Configuration",
    ],
    features: [
      "Hands-on projects",
      "Real-world scenarios",
      "Responsive design",
      "OData services",
      "Interview preparation",
      "Job support",
    ],
    image: "/images/sap/sap-ui5.jpg",
    author: {
      name: "Murthy",
      image: "/images/testimonials/auth-01.png",
      designation: "SAP Technical Consultant",
    },
    tags: ["UI5", "FIORI"],
    publishDate: "2025",
  },
];
