"use client";

import ScrollUp from "../../components/Common/ScrollUp";
import SectionTitle from "../../components/Common/SectionTitle";
import JobTable from "../../components/Career/JobTable";
import { jobOpenings, getJobOpenings } from "../../data/careers";

import { useState } from "react";

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApply = (jobId: string) => {
    setSelectedJob(jobId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const getJobTitle = (jobId: string) => {
    const job = jobOpenings.find((j) => j.id === jobId);
    return job ? job.title : "Position";
  };

  return (
    <>
      <ScrollUp />

      {/* Hero Section */}
      <section className="relative min-h-[250px] overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-16 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute top-0 right-0 h-full w-1/2 opacity-20">
          <svg
            className="absolute top-10 right-0 h-64 w-64 text-white"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <circle cx="100" cy="100" r="80" />
          </svg>
          <svg
            className="absolute top-40 right-20 h-40 w-40 text-purple-300"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <circle cx="100" cy="100" r="60" />
          </svg>
          <svg
            className="absolute right-40 bottom-10 h-32 w-32 text-blue-300"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <circle cx="100" cy="100" r="40" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/20 to-transparent"></div>

        <div className="relative container">
          <div className="mx-auto max-w-[800px] pt-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white drop-shadow-md sm:text-5xl">
              Career Opportunities
            </h1>
            <p className="text-xl text-white/90">
              Join our team and grow your SAP career with industry experts
            </p>
          </div>
        </div>
      </section>

      {/* Job Assistance Section */}
      <section className="dark:bg-gray-dark bg-white py-10 lg:py-10">
        <div className="container">
          <SectionTitle
            title="Job Assistance & Career Support"
            paragraph="At Murthy SAP Training, we understand that training is only the first step toward building a successful career. That is why we provide career guidance and job support to help our students transition into the SAP industry."
            mb="60px"
            center
          />

          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 text-center md:w-1/2 lg:w-1/3">
              <div className="group shadow-two hover:shadow-two dark:border-dark-3 dark:bg-dark dark:hover:shadow-gray-dark mb-12 rounded-sm border border-gray-200 p-6 transition-all duration-300">
                <div className="bg-primary/10 text-primary group-hover:bg-primary mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-all group-hover:text-white">
                  🎯
                </div>
                <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Interview Preparation
                </h4>
                <p className="text-base text-black dark:text-white">
                  Guidance on common SAP interview questions and real project
                  scenario discussions.
                </p>
              </div>
            </div>

            <div className="w-full px-4 text-center md:w-1/2 lg:w-1/3">
              <div className="group shadow-two hover:shadow-two dark:border-dark-3 dark:bg-dark dark:hover:shadow-gray-dark mb-12 rounded-sm border border-gray-200 p-6 transition-all duration-300">
                <div className="bg-primary/10 text-primary group-hover:bg-primary mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-all group-hover:text-white">
                  📄
                </div>
                <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Resume Preparation
                </h4>
                <p className="text-base text-black dark:text-white">
                  Support in creating professional resumes that highlight SAP
                  skills and project knowledge.
                </p>
              </div>
            </div>

            <div className="w-full px-4 text-center md:w-1/2 lg:w-1/3">
              <div className="group shadow-two hover:shadow-two dark:border-dark-3 dark:bg-dark dark:hover:shadow-gray-dark mb-12 rounded-sm border border-gray-200 p-6 transition-all duration-300">
                <div className="bg-primary/10 text-primary group-hover:bg-primary mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-all group-hover:text-white">
                  🤝
                </div>
                <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Career Guidance
                </h4>
                <p className="text-base text-black dark:text-white">
                  Advice on SAP career paths, module selection, and skill
                  upgrades.
                </p>
              </div>
            </div>

            <div className="w-full px-4 text-center md:w-1/2 lg:w-1/3">
              <div className="group shadow-two hover:shadow-two dark:border-dark-3 dark:bg-dark dark:hover:shadow-gray-dark mb-12 rounded-sm border border-gray-200 p-6 transition-all duration-300">
                <div className="bg-primary/10 text-primary group-hover:bg-primary mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-all group-hover:text-white">
                  🧑‍💻
                </div>
                <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Project Exposure
                </h4>
                <p className="text-base text-black dark:text-white">
                  Understanding of real-time SAP project environments and
                  business scenarios.
                </p>
              </div>
            </div>

            <div className="w-full px-4 text-center md:w-1/2 lg:w-1/3">
              <div className="group shadow-two hover:shadow-two dark:border-dark-3 dark:bg-dark dark:hover:shadow-gray-dark mb-12 rounded-sm border border-gray-200 p-6 transition-all duration-300">
                <div className="bg-primary/10 text-primary group-hover:bg-primary mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-all group-hover:text-white">
                  📊
                </div>
                <h4 className="mb-3 text-xl font-bold text-black dark:text-white">
                  Practical Assignments
                </h4>
                <p className="text-base text-black dark:text-white">
                  Hands-on exercises and case studies to build confidence in SAP
                  system usage.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="mx-auto mb-8 max-w-2xl text-lg text-black dark:text-white">
              Our training approach focuses on ensuring that students not only
              learn SAP concepts but also gain the confidence required to work
              in real SAP project environments.
            </p>
          </div>
        </div>
      </section>

      <JobTable />

      {/* Why Choose SAP Section */}
      <section className="dark:bg-gray-dark bg-white py-10 lg:py-10">
        <div className="container">
          <SectionTitle
            title="Why Choose a Career in SAP"
            paragraph="SAP is one of the world's leading Enterprise Resource Planning (ERP) systems, used by thousands of global organizations to manage business processes such as finance, procurement, sales, logistics, and human resources."
            mb="30px"
            center
          />

          <div className="text-lg leading-relaxed text-black dark:text-white">
            <p className="mb-8 text-center">
              Building a career in SAP offers excellent opportunities for
              professionals looking to grow in the IT and business consulting
              industries.
            </p>
            <div className="group shadow-two hover:shadow-two dark:border-dark-3 dark:bg-dark dark:hover:shadow-gray-dark mb-12 rounded-sm border border-gray-200 p-6 transition-all duration-300">
              <h3 className="mb-6 text-center text-2xl font-bold text-black dark:text-white">
                Benefits of Learning SAP
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-4 text-2xl font-bold">
                    💼
                  </span>
                  <span>
                    High Demand Worldwide - SAP professionals are required by
                    organizations across multiple industries including
                    manufacturing, automotive, retail, banking, and logistics.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-4 text-2xl font-bold">
                    📈
                  </span>
                  <span>
                    Strong Career Growth - SAP consultants have opportunities to
                    work on implementation, support, and upgrade projects in
                    global organizations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-4 text-2xl font-bold">
                    🌍
                  </span>
                  <span>
                    Global Opportunities - SAP professionals can work with
                    international clients and multinational companies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-4 text-2xl font-bold">
                    💰
                  </span>
                  <span>
                    Competitive Salaries - SAP skills are highly valued in the
                    IT market, making SAP consultants among the well-paid
                    professionals in enterprise technology.
                  </span>
                </li>

                <li className="flex items-start">
                  <span className="text-primary mt-1 mr-4 text-2xl font-bold">
                    🔄
                  </span>
                  <span>
                    Continuous Learning - With technologies like SAP S/4HANA,
                    SAP Fiori, and cloud solutions, SAP professionals continue
                    to upgrade their skills and stay relevant in the evolving
                    digital landscape.
                  </span>
                </li>
              </ul>
              <p className="border-primary bg-primary/5 dark:bg-primary/10 mt-6 rounded-lg border-4 p-6 text-center text-xl font-semibold italic">
                At Murthy SAP Training, our goal is to help learners build a
                strong SAP foundation and prepare them for real project
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPage;
