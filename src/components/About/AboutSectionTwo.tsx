import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="dark:bg-gray-dark bg-gray-50 py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-[800px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-[40px] dark:text-white">
            Our Training Approach &amp; Who Can Join
          </h2>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 lg:mb-0">
              <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Our Training Approach
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start text-lg text-black dark:text-white">
                  <span className="text-primary mr-3 font-semibold">→</span>
                  Concept-based learning
                </li>
                <li className="flex items-start text-lg text-black dark:text-white">
                  <span className="text-primary mr-3 font-semibold">→</span>
                  Hands-on SAP system practice
                </li>
                <li className="flex items-start text-lg text-black dark:text-white">
                  <span className="text-primary mr-3 font-semibold">→</span>
                  Real-time business scenarios
                </li>
                <li className="flex items-start text-lg text-black dark:text-white">
                  <span className="text-primary mr-3 font-semibold">→</span>
                  Project-oriented exercises
                </li>
                <li className="flex items-start text-lg text-black dark:text-white">
                  <span className="text-primary mr-3 font-semibold">→</span>
                  Industry insights from experienced consultants
                </li>
              </ul>
              <p className="mt-6 text-base leading-relaxed text-black dark:text-white">
                This approach ensures that our students are well-prepared to
                work confidently in real SAP projects.
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Who Can Join
              </h3>
              <ul className="space-y-4 text-lg text-black dark:text-white">
                <li>• Fresh graduates looking to start a career in SAP</li>
                <li>• IT professionals planning to move into SAP</li>
                <li>• Working SAP consultants looking to upgrade skills</li>
                <li>• Professionals interested in learning SAP S/4HANA</li>
              </ul>
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Our SAP Training Programs
                </h3>
                <ul className="list-inside list-disc space-y-1 text-base text-black dark:text-white">
                  <li>SAP ABAP</li>
                  <li>SAP FICO</li>
                  <li>SAP MM</li>
                  <li>SAP SD</li>
                  <li>SAP BASIS</li>
                  <li>SAP S/4HANA Concepts</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  Each course is structured to cover fundamentals, advanced
                  topics, and practical system exercises to ensure complete
                  understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
