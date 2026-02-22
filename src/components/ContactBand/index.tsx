"use client";

import Link from "next/link";

const ContactBand = () => {
  return (
    <>
      <section className="bg-primary py-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-2/3">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Ready to Start Your SAP Career?
              </h2>
              <p className="text-lg text-white/90">
                Contact us today to learn more about our training programs and how we can help you succeed.
              </p>
            </div>
            <div className="mt-8 w-full px-4 lg:mt-0 lg:w-1/3">
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/contact"
                  className="rounded-xs bg-white px-8 py-3 text-base font-semibold text-primary duration-300 hover:bg-gray-100"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+919686762136"
                  className="rounded-xs border-2 border-white px-8 py-3 text-base font-semibold text-white duration-300 hover:bg-white/10"
                >
                  📞 +91 9686762136
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBand;

