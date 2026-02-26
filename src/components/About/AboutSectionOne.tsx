"use client";

import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="dark:bg-gray-dark bg-white py-16 lg:py-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[700px] text-center lg:m-0">
                <Image
                  src="/images/about/ab2.jpg"
                  alt="about image"
                  fill
                  className="rounded border-3"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[700px]">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                    About Us
                  </h3>
                  <p className="dark:text-black-dark text-base leading-relaxed text-black">
                    Ever since opening our doors, we've helped countless
                    individuals achieve their career and life dreams. We are
                    committed to providing excellent education, training and
                    resources so that our students will thrive in today's
                    competitive world. With flexible program options and great
                    instructors, we're sure you'll be satisfied with your
                    education at Murthy SAP Training.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                    About Me
                  </h3>
                  <p className="dark:text-black-dark text-base leading-relaxed text-black">
                    I am an SAP functional consultant with overall 13 years of
                    experience in SAP. Teaching has been my passion for a long
                    time, and I have been teaching SAP since 2014. I have worked
                    for major companies in India like CTS, Accenture, IBM &
                    Unilever, etc.
                  </p>
                  <p className="dark:text-black-dark mt-4 text-base leading-relaxed text-black">
                    I will help you to reach greater heights in your SAP carrier
                    with high-quality training. In this training, I will focus
                    on real-time business scenarios with the best examples.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="bg-primary hover:bg-primary/80 rounded-xs px-8 py-3 text-base font-semibold text-white duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
