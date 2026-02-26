"use client";

import { useState } from "react";
const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (in production, you would use an API route or email service)
    // For now, we'll show the modal as a success indicator
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 lg:mb-0">
              <span className="text-primary mb-4 block text-sm font-semibold">
                Contact Us
              </span>
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] dark:text-white">
                Have Questions? Get in Touch
              </h2>
              <p className="dark:text-black-dark mb-10 text-base leading-relaxed text-black">
                Feel free to contact us if you need any assistance, any help or
                answer your questions. We have expert team will give you a reply
                as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="w-full">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="text-dark mb-3 block text-sm font-semibold dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="border-stroke focus:border-primary dark:border-dark-3 w-full rounded-sm border bg-transparent px-6 py-3 text-base text-black outline-none focus:shadow-none dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="text-dark mb-3 block text-sm font-semibold dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="border-stroke focus:border-primary dark:border-dark-3 w-full rounded-sm border bg-transparent px-6 py-3 text-base text-black outline-none focus:shadow-none dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="text-dark mb-3 block text-sm font-semibold dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Enter your message"
                        required
                        className="border-stroke focus:border-primary dark:border-dark-3 w-full resize-none rounded-sm border bg-transparent px-6 py-3 text-base text-black outline-none focus:shadow-none dark:text-white"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/80 rounded-sm px-8 py-3 text-base font-semibold text-white duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="dark:bg-dark relative w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
            <button
              onClick={closeModal}
              className="hover:text-dark absolute top-4 right-4 text-gray-400 dark:hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-dark mb-2 text-2xl font-bold dark:text-white">
                Message Sent!
              </h3>
              <p className="dark:text-black-dark mb-6 text-black">
                Thank you for contacting us. We'll get back to you soon!
              </p>
              <button
                onClick={closeModal}
                className="bg-primary hover:bg-primary/80 rounded-sm px-6 py-2 text-base font-semibold text-white"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
