"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HiOutlineCheckCircle } from "react-icons/hi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <ScrollReveal>
        <motion.div
          className="flex flex-col items-center justify-center py-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
            <HiOutlineCheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="heading-sm mb-2">Message Sent Successfully!</h3>
          <p className="body-md max-w-sm">
            Thank you for reaching out. I&apos;ll get back to you as soon as
            possible.
          </p>
        </motion.div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <div>
        <h2 className="heading-md mb-2">Send a Message</h2>
        <p className="body-md mb-8">
          Fill out the form below and I&apos;ll respond within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-ink-700 mb-1.5"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-surface-300 bg-surface-50 text-ink-800 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-ink-700 mb-1.5"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-surface-300 bg-surface-50 text-ink-800 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-ink-700 mb-1.5"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-surface-300 bg-surface-50 text-ink-800 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select a topic</option>
              <option value="project">New Project Inquiry</option>
              <option value="collaboration">Design Collaboration</option>
              <option value="freelance">Freelance Opportunity</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-ink-700 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              className="w-full px-4 py-3 rounded-xl border border-surface-300 bg-surface-50 text-ink-800 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            icon
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </ScrollReveal>
  );
}
