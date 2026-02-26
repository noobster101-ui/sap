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
}

// All SAP Courses - Combined from Functional and Technical
export const sapCourses: SAPCourse[] = [
  // ==================== ECC DIVISION COURSES ====================
  {
    id: "sap-sd-sales-distribution",
    title: "SAP SD",
    shortDescription:
      "Master sales and distribution processes in SAP with real-time scenarios.",
    fullDescription: `SAP SD (Sales and Distribution) is the core module in SAP that manages the entire sales cycle of an organization — from customer inquiry to final payment realization. This course is designed to provide in-depth functional knowledge along with practical system experience to help learners understand real-time business transactions in a structured SAP environment.

Our SAP SD training focuses not only on system navigation but also on building strong conceptual clarity in sales processes, pricing, billing, and integration with other SAP modules.

What You Will Learn :

Complete Order-to-Cash (O2C) Cycle
Customer Master Data Configuration
Material Master Data (Sales Views)
Sales Document Types & Item Categories
Pricing Procedure Configuration
Tax Determination Process
Delivery Processing & Shipping
Billing & Invoice Generation
Credit Management
Output Determination (Invoice/Order Print)
Integration with MM, FI, and PP Modules
Handling Real-Time Business Scenarios`,
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
    publishDate: "03/01/2026",
    division: "ECC",
    brochure: "/files/SAP SD Broucher.pdf",
  },
  {
    id: "sap-mm-material-management",
    title: "SAP MM",
    shortDescription:
      "Learn material management with detailed theory and hands-on configuration.",
    fullDescription: `SAP MM (Materials Management) – Build the Backbone of Smart Procurement

SAP MM (Materials Management) is the engine that powers procurement, inventory control, and material valuation within an organization. It ensures that the right materials are available at the right time, in the right quantity, and at the right cost. This course is designed to provide both conceptual clarity and practical system knowledge to help learners confidently manage real-world procurement and supply chain operations inside SAP.
Unlike basic theoretical training, this program focuses on hands-on execution of business processes that directly impact operational efficiency and financial accuracy.

What This Course Delivers :

This SAP MM training goes beyond simple transaction learning. It builds your understanding of how procurement decisions influence inventory value, vendor performance, and financial postings.

You will gain practical exposure in:

End-to-End Procure-to-Pay (P2P) Process
Material Master Creation & Configuration
Vendor Master Management
Purchase Requisition & Purchase Order Cycle
Request for Quotation (RFQ) & Quotation Comparison
Pricing Conditions & Tax Procedures
Goods Receipt & Invoice Verification
Inventory Management & Stock Transfers
Valuation & Account Determination
Automatic Account Posting Integration with Finance`,
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
    publishDate: "3/1/2026",
    division: "ECC",
    brochure: "/files/SAP MM Broucher.pdf",
  },
  {
    id: "sap-fico",
    title: "SAP FICO",
    shortDescription: "Master financial accounting and controlling in SAP.",
    fullDescription: `SAP FICO (Financial Accounting & Controlling) – Master Financial Intelligence in the Digital Era

SAP FICO is the financial heartbeat of any organization running SAP. It integrates financial accounting and management controlling into a unified system that ensures transparency, compliance, and strategic decision-making. This course is designed to transform learners into confident SAP Finance professionals capable of managing real-time financial operations and internal cost controls within an enterprise environment.

Rather than focusing only on transactions, this training emphasizes understanding the logic behind financial postings, cost flows, and reporting structures that drive business performance.

What Makes This Program Different?

This SAP FICO course is built around practical financial scenarios that mirror real corporate environments. Learners do not just observe processes — they execute complete accounting and controlling cycles inside the SAP system.

The program blends accounting fundamentals with SAP configuration knowledge to create strong functional expertise.`,
    levels: [
      "Level 1 - We will teach you the most used end-user transactions for FICO",
      "Level 2 - We will teach you configuration and customization for FICO",
      "Level 3 - We will teach you real-time business scenarios, System landscapes, and project life cycles for FICO.",
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
    publishDate: "3/1/2026",
    division: "ECC",
  },
  {
    id: "sap-logistics",
    title: "SAP Logistics",
    shortDescription:
      "Master SAP Logistics processes including procurement, inventory, and supply chain management.",
    fullDescription: `SAP Logistics – Transform Operations into Intelligent Supply Networks

SAP Logistics is the operational core of an enterprise, connecting procurement, inventory, production, sales, and distribution into one synchronized system. It enables organizations to control material flow, manage supply chains, and ensure timely delivery while maintaining cost efficiency and data transparency.

This course is designed to give learners a deep understanding of how logistics processes function inside SAP and how different modules work together to support real-time business operations.

What This Program Focuses On

Unlike basic overview programs, this training emphasizes practical execution of logistics cycles within SAP. Learners gain hands-on experience managing materials, tracking stock movements, processing deliveries, and understanding how logistics activities impact finance and production.

The program bridges operational knowledge with system configuration, making it ideal for both beginners and working professionals.`,
    levels: [
      "Level 1 - We will teach you the most used end-user transactions for Logistics",
      "Level 2 - We will teach you configuration and customization for Logistics",
      "Level 3 - We will teach you real-time business scenarios, System landscapes, and project life cycles.",
      "Level 4 - We will teach you integration between SAP Logistics – MM, SD, WM modules.",
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
    image: "/images/sap/sap-logistics.jpg",
    author: {
      name: "Murthy",
      image: "/images/testimonials/auth-01.png",
      designation: "SAP Functional Consultant",
    },
    tags: ["Logistics", "Supply Chain"],
    publishDate: "3/1/2026",
    division: "ECC",
  },
  {
    id: "sap-wm-warehouse-management",
    title: "SAP WM",
    shortDescription:
      "Learn warehouse management processes in SAP with hands-on configuration.",
    fullDescription: `SAP WM (Warehouse Management) – Precision Control for Smart Warehousing

SAP WM (Warehouse Management) is the specialized SAP module designed to manage and optimize warehouse operations with high accuracy and real-time visibility. It enables organizations to control storage locations, track stock movements at bin level, and streamline goods handling processes to improve operational efficiency.

This course is structured to provide deep functional knowledge combined with practical system execution, helping learners understand how modern warehouses operate inside an SAP-driven environment.

Why SAP WM Matters

In today's fast-moving supply chains, warehouse accuracy directly impacts delivery timelines, customer satisfaction, and financial reporting. SAP WM ensures structured storage strategies, controlled stock movements, and transparent inventory tracking — all integrated seamlessly with procurement, production, and sales processes.

This program focuses on transforming learners into confident warehouse process experts who can manage complex storage operations using SAP.

What You Will Learn :
Warehouse Structure Configuration
Inbound Process Management
Outbound Process Handling
Internal Warehouse Operations
Monitoring & Control`,
    levels: [
      "Level 1 - We will teach you the most used end-user transactions for WM",
      "Level 2 - We will teach you configuration and customization for WM",
      "Level 3 - We will teach you real-time business scenarios, System landscapes, and project life cycles.",
      "Level 4 - We will teach you integration between SAP WM – MM, SD, EWM modules.",
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
    image: "/images/sap/sap-wm.png",
    author: {
      name: "Murthy",
      image: "/images/testimonials/auth-01.png",
      designation: "SAP Functional Consultant",
    },
    tags: ["WM", "Warehouse Management"],
    publishDate: "3/1/2026",
    division: "ECC",
  },
  {
    id: "sap-ewm-extended-warehouse",
    title: "SAP EWM",
    shortDescription:
      "Master advanced warehouse management with SAP EWM for complex logistics operations.",
    fullDescription: `SAP EWM (Extended Warehouse Management) is a powerful, next-generation warehouse solution designed to manage complex supply chain environments with precision, automation, and real-time visibility. It goes beyond traditional warehouse management by offering advanced process control, optimized resource management, and seamless integration across enterprise operations.

This course is designed to develop practical expertise in managing high-volume, multi-location warehouses using SAP EWM in real-world business scenarios.

Why SAP EWM?

Modern warehouses are no longer simple storage spaces — they are dynamic fulfillment centers that require accuracy, speed, and digital intelligence. SAP EWM enables organizations to:

Manage high-volume inbound and outbound operations

Optimize warehouse layout and storage strategies

Monitor real-time stock at granular levels

Automate labor and resource allocation

Improve delivery performance and operational efficiency

This training prepares learners to handle these complex operations with confidence.

What You Will Learn :
Warehouse Structure & Master Data
Inbound Process Management
Outbound Process Execution
Internal Warehouse Operations
Resource & Process Optimization`,
    levels: [
      "Level 1 - We will teach you the most used end-user transactions for EWM",
      "Level 2 - We will teach you configuration and customization for EWM",
      "Level 3 - We will teach you real-time business scenarios, System landscapes, and project life cycles.",
      "Level 4 - We will teach you integration between SAP EWM – MM, SD, WM modules.",
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
    image: "/images/sap/sap-ewm.png",
    author: {
      name: "Murthy",
      image: "/images/testimonials/auth-01.png",
      designation: "SAP Functional Consultant",
    },
    tags: ["EWM", "Extended Warehouse"],
    publishDate: "3/1/2026",
    division: "ECC",
  },
  {
    id: "sap-abap",
    title: "SAP ABAP",
    shortDescription:
      "Advanced Business Application Programming - Build SAP applications.",
    fullDescription: `SAP ABAP – Build, Customize, and Power SAP Applications

SAP ABAP (Advanced Business Application Programming) is the technical foundation that drives customization and development within the SAP ecosystem. It enables organizations to create tailored reports, interfaces, enhancements, forms, and business applications that align precisely with operational needs.

This course is designed to transform beginners and professionals into confident SAP technical experts who can design, develop, and optimize solutions inside SAP ERP and SAP S/4HANA environments.

Why Learn SAP ABAP?

Every organization using SAP requires customization beyond standard functionality. SAP ABAP professionals play a critical role in:

Developing business-specific reports

Creating smart forms and print layouts

Building interfaces between SAP and external systems

Enhancing standard SAP processes

Supporting technical upgrades and migrations

This program focuses not only on syntax but on real-time development practices used in implementation and support projects.

What You Will Learn :

ABAP Fundamentals
Data Dictionary (DDIC)
Reporting
Modular Programming
Enhancements & Modifications
Forms & Outputs
Interfaces & Data Migration
Object-Oriented ABAP`,
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
    publishDate: "3/1/2026",
    division: "ECC",
    brochure: "/files/SAP ABAP Broucher.pdf",
  },

  // ==================== S/4 HANA DIVISION COURSES ====================
  {
    id: "sap-s4-hana-sales",
    title: "S/4 HANA Sales",
    shortDescription: "Comprehensive sales process training in SAP S/4 HANA.",
    fullDescription: `SAP S/4HANA Sales – Redefining Intelligent Order-to-Cash Management

SAP S/4HANA Sales is the next-generation sales solution built on the powerful S/4HANA digital core. It transforms traditional sales and distribution processes into real-time, data-driven operations that enhance customer experience, accelerate revenue cycles, and improve decision-making.

This course is designed to equip learners with practical expertise in managing modern sales processes within the SAP S/4HANA environment, combining functional knowledge with system execution and business insights.

Why SAP S/4HANA Sales?

In today's competitive market, organizations require faster order processing, real-time availability checks, accurate pricing, and instant financial integration. SAP S/4HANA Sales enables businesses to:

Process sales transactions with real-time data access

Improve order accuracy and fulfillment speed

Gain instant visibility into revenue and profitability

Integrate seamlessly with finance, procurement, and supply chain

Deliver enhanced customer service through digital tools

This training prepares professionals to manage these intelligent sales operations efficiently.

What You Will Learn :

Core Sales Processes
Advanced Sales Capabilities
Integration & Real-Time Impact
Reporting & Analytics`,
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
    publishDate: "3/1/2026",
    division: "S/4HANA",
  },
  {
    id: "sap-s4-hana-sourcing-procurement",
    title: "S/4 HANA Procurement",
    shortDescription:
      "Master procurement processes in SAP S/4 HANA with real-time business scenarios.",
    fullDescription: `SAP S/4HANA Procurement – Streamlined, Intelligent, and Real-Time

SAP S/4HANA Procurement is the modern solution for managing the complete source-to-pay process in real time. Built on the advanced S/4HANA platform, it enables organizations to automate purchasing, optimize supplier collaboration, and ensure accurate financial integration, all while improving efficiency and reducing operational costs.

This course equips learners with functional knowledge and practical expertise to handle procurement processes in a live SAP S/4HANA environment, bridging the gap between supply chain operations and enterprise finance.

Why SAP S/4HANA Procurement?

In today's fast-paced business world, organizations need smarter, faster, and more transparent procurement operations. SAP S/4HANA Procurement helps professionals:

Automate purchasing cycles and approvals

Optimize supplier management and collaboration

Monitor real-time inventory and stock levels

Integrate procurement with finance, logistics, and analytics

Make data-driven decisions that impact cost, quality, and delivery

This training prepares professionals to manage modern procurement workflows efficiently and accurately.

Key Learning Areas :

Core Procurement Processes
Advanced Procurement Features
Automated Approvals & Workflow Management
Integration & Real-Time Impact`,
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
    publishDate: "3/1/2026",
    division: "S/4HANA",
  },
  {
    id: "s4-finance",
    title: "S/4 Finance",
    shortDescription:
      "Master financial accounting and controlling in SAP S/4 HANA with modern Fiori interfaces.",
    fullDescription: `SAP S/4HANA Finance – Real-Time, Intelligent Financial Management

SAP S/4HANA Finance is the next-generation finance solution designed to manage enterprise financial operations with speed, accuracy, and complete transparency. Built on the S/4HANA digital core, it enables organizations to perform real-time accounting, reporting, and analysis, while seamlessly integrating with all business processes.

This course empowers learners with practical, hands-on expertise to manage finance and controlling processes in an intelligent ERP environment, bridging the gap between operational execution and strategic decision-making.

Why SAP S/4HANA Finance?

Modern enterprises demand financial systems that provide instant insights, reduce complexity, and support agile decision-making. SAP S/4HANA Finance enables professionals to:

Process financial transactions in real time

Automate accounting, reporting, and reconciliation

Gain instant visibility into cash flow, costs, and profitability

Integrate seamlessly with procurement, sales, and production

Make data-driven business decisions with embedded analytics

This training ensures learners can handle high-volume transactions, maintain compliance, and generate accurate financial insights effortlessly.

Key Learning Areas :

Financial Accounting (FI)
Management Accounting (CO)
Advanced S/4HANA Finance Features`,
    levels: [
      "Level 1 - We will teach you configuration and customization for S/4 Finance.",
      "Level 2 - We will teach you real-time business scenarios in S/4 Finance.",
      "Level 3 - We will teach you features and functions of the S/4HANA innovation in Finance",
      "Level 4 - We will teach you universal journal and embedded analytics",
      "Level 5 - We will teach you S/4 HANA Finance migration and implementation projects.",
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
    tags: ["S/4 HANA", "Finance"],
    publishDate: "3/1/2026",
    division: "S/4HANA",
  },
  {
    id: "s4-wm",
    title: "S/4 WM (Warehouse Management)",
    shortDescription:
      "Learn warehouse management in SAP S/4 HANA with advanced capabilities.",
    fullDescription: `SAP S/4HANA WM – Intelligent Warehouse Management for Modern Enterprises

SAP S/4HANA Warehouse Management (WM) is the next-generation solution for managing warehouse operations with precision, efficiency, and real-time visibility. Designed for complex storage environments, S/4HANA WM ensures seamless material flow, accurate inventory tracking, and streamlined inbound and outbound processes.

This course equips learners with hands-on expertise to handle warehouse operations in a live SAP S/4HANA environment, integrating logistics, procurement, and production processes for end-to-end supply chain control.

Why SAP S/4HANA WM?

Modern warehouses require faster, smarter, and more accurate material management. SAP S/4HANA WM helps professionals:

Track inventory at bin-level in real time

Optimize inbound and outbound warehouse processes

Automate stock movements and replenishments

Integrate seamlessly with procurement, sales, and production

Improve order fulfillment accuracy and operational efficiency

Learners gain practical experience managing real-time warehouse transactions while understanding their financial and operational impact.

What You Will Learn :

Warehouse Structure & Master Data
Inbound Process Management
Outbound Process Execution
Internal Warehouse Operations
Monitoring & Reporting`,
    levels: [
      "Level 1 - We will teach you configuration and customization for S/4 WM.",
      "Level 2 - We will teach you real-time business scenarios in S/4 WM.",
      "Level 3 - We will teach you features and functions of S/4HANA Warehouse Management",
      "Level 4 - We will teach you warehouse management cockpit and Fiori apps",
      "Level 5 - We will teach you S/4 HANA WM implementation projects.",
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
    tags: ["S/4 HANA", "WM"],
    publishDate: "3/1/2026",
    division: "S/4HANA",
  },
  {
    id: "s4-tm",
    title: "S/4 TM (Transportation Management)",
    shortDescription:
      "Master transportation management in SAP S/4 HANA for efficient logistics.",
    fullDescription: `SAP S/4HANA TM – Intelligent Transportation Management for Modern Supply Chains

SAP S/4HANA Transportation Management (TM) is a next-generation solution that streamlines transportation planning, execution, and monitoring across complex supply chains. Built on the S/4HANA digital core, it enables organizations to optimize freight operations, reduce logistics costs, and achieve real-time visibility of shipments from origin to destination.

This course equips learners with practical, hands-on expertise to manage transportation processes, ensuring seamless integration with procurement, warehouse, and sales operations.

Why SAP S/4HANA TM?

In today's fast-moving supply chains, transportation efficiency directly impacts cost, delivery performance, and customer satisfaction. SAP S/4HANA TM allows professionals to:

Plan and execute shipments efficiently

Optimize carrier selection and freight cost

Track shipments in real time

Integrate transportation processes with procurement, sales, and warehouse management

Make data-driven decisions for faster, cost-effective deliveries

The course focuses on real-time business scenarios, helping learners gain confidence in managing end-to-end transportation processes.

Key Learning Areas :

Transportation Planning
Transportation Execution
Advanced Capabilities
Integration`,
    levels: [
      "Level 1 - We will teach you configuration and customization for S/4 TM.",
      "Level 2 - We will teach you real-time business scenarios in S/4 TM.",
      "Level 3 - We will teach you features and functions of S/4HANA Transportation Management",
      "Level 4 - We will teach you freight management and carrier selection",
      "Level 5 - We will teach you S/4 HANA TM implementation projects.",
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
    tags: ["S/4 HANA", "TM"],
    publishDate: "3/1/2026",
    division: "S/4HANA",
  },
  {
    id: "sap-abap-on-hana",
    title: "SAP ABAP on HANA",
    shortDescription:
      "Master ABAP programming on SAP HANA with advanced performance optimization.",
    fullDescription: `SAP ABAP on HANA – Accelerate Development with Real-Time Intelligence

SAP ABAP on HANA is the advanced version of ABAP programming optimized for the SAP HANA in-memory platform. It empowers organizations to build high-performance, real-time applications, process massive datasets instantly, and leverage the full potential of S/4HANA.

This course is designed to equip learners with both ABAP programming expertise and HANA-specific optimization techniques, enabling them to develop scalable, efficient, and intelligent enterprise solutions.

Why Learn SAP ABAP on HANA?

As businesses move toward real-time operations, traditional programming approaches are no longer sufficient. ABAP on HANA allows developers to:

Build high-performance applications leveraging in-memory computing

Optimize database access and data processing

Implement real-time analytics and reporting

Enhance standard SAP functionality with custom solutions

Ensure seamless integration with SAP S/4HANA processes

This course ensures learners gain practical, hands-on skills to design, develop, and optimize ABAP programs in a HANA environment.

Key Learning Areas :

ABAP Fundamentals on HANA
HANA-Specific Development
Reporting & Analytics
Advanced Techniques`,
    levels: [
      "Level 1 - ABAP on HANA basics and fundamentals",
      "Level 2 - CDS Views and Core Data Services",
      "Level 3 - ABAP Managed Database Procedures (AMDP)",
      "Level 4 - Performance optimization techniques",
      "Level 5 - Real-time projects and best practices",
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
    tags: ["ABAP", "HANA"],
    publishDate: "3/1/2026",
    division: "S/4HANA",
  },
  {
    id: "s4-ewm",
    title: "S/4 EWM (Extended Warehouse Management)",
    shortDescription:
      "Master advanced warehouse management in SAP S/4 HANA for complex operations.",
    fullDescription: `SAP S/4HANA EWM – Intelligent Warehouse Management for the Digital Enterprise

SAP S/4HANA Extended Warehouse Management (EWM) is a next-generation solution that transforms traditional warehouse operations into intelligent, automated, and highly efficient processes. Built on the S/4HANA digital core, EWM enables organizations to manage complex storage environments, optimize material flow, and ensure real-time visibility across the entire supply chain.

This course equips learners with practical, hands-on skills to handle inbound, outbound, and internal warehouse operations while integrating seamlessly with procurement, production, sales, and finance processes.

Why SAP S/4HANA EWM?

Modern warehouses are more than storage spaces—they are dynamic, technology-driven fulfillment centers. SAP S/4HANA EWM allows professionals to:

Optimize inbound and outbound warehouse operations

Automate stock movement, replenishment, and putaway strategies

Track inventory at bin and batch level in real time

Monitor warehouse performance with analytics dashboards

Integrate warehouse operations with finance, procurement, and production

This training prepares learners to manage high-volume, complex warehouses efficiently while ensuring operational accuracy and compliance.

Key Learning Areas :

Warehouse Structure & Master Data
Inbound Process Management
Outbound Process Execution
Internal Warehouse Operations
Monitoring & Analytics`,
    levels: [
      "Level 1 - We will teach you configuration and customization for S/4 EWM.",
      "Level 2 - We will teach you real-time business scenarios in S/4 EWM.",
      "Level 3 - We will teach you features and functions of S/4HANA EWM",
      "Level 4 - We will teach you labor management and resource optimization",
      "Level 5 - We will teach you S/4 HANA EWM implementation projects.",
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
    tags: ["S/4 HANA", "EWM"],
    publishDate: "3/1/2026",
    division: "S/4HANA",
  },
  {
    id: "sap-hana",
    title: "SAP HANA",
    shortDescription:
      "Master SAP HANA in-memory database for high-performance analytics and applications.",
    fullDescription: `SAP HANA – Powering Real-Time Enterprise Intelligence

SAP HANA (High-Performance Analytic Appliance) is a revolutionary in-memory database and platform that transforms how organizations store, process, and analyze data. By combining database, processing, and advanced analytics in a single platform, SAP HANA enables businesses to access real-time insights, accelerate decision-making, and drive digital transformation.

This course is designed to provide learners with hands-on expertise in SAP HANA architecture, data modeling, and application development, enabling them to deliver high-performance, real-time business solutions.

Why Learn SAP HANA?

In today's data-driven world, organizations need instant access to actionable insights. SAP HANA empowers professionals to:

Process massive volumes of structured and unstructured data instantly

Build high-performance analytical and transactional applications

Integrate with SAP S/4HANA, ABAP, and advanced analytics tools

Enable real-time reporting, predictive analytics, and IoT-enabled solutions

Optimize enterprise processes with faster data-driven decision-making

This course ensures learners gain the skills required to design, develop, and implement enterprise applications using SAP HANA.

Key Learning Areas :

HANA Architecture & Fundamentals
Data Modeling
Programming & Development
Advanced HANA Features`,
    levels: [
      "Level 1 - SAP HANA basics and architecture",
      "Level 2 - SQL scripting and data modeling",
      "Level 3 - HANA views and calculation views",
      "Level 4 - HANA administration and monitoring",
      "Level 5 - Real-time projects and best practices",
    ],
    features: [
      "Real-time projects",
      "Complete syllabus",
      "Hands-on exercises",
      "Resume preparation",
      "Interview guidance",
      "Certification support",
    ],
    image: "/images/sap/sap-s4-hana.jpg",
    author: {
      name: "Murthy",
      image: "/images/testimonials/auth-01.png",
      designation: "SAP Technical Consultant",
    },
    tags: ["HANA", "Technical"],
    publishDate: "3/1/2026",
    division: "S/4HANA",
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
    division: "S/4HANA",
    brochure: "/files/SAP ui5 Broucher.pdf",
  },
];

// Helper functions to filter courses by division
export const getECCCourses = () =>
  sapCourses.filter((course) => course.division === "ECC");
export const getS4HANACourses = () =>
  sapCourses.filter((course) => course.division === "S/4HANA");

// Legacy exports for backward compatibility
export const sapFunctionalCourses: SAPCourse[] = getECCCourses();
export const sapTechnicalCourses: SAPCourse[] = getS4HANACourses();
