"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HiOutlineCheckCircle, HiOutlineChevronDown, HiOutlineExclamationCircle } from "react-icons/hi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear error when user starts typing
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Client-side validation: name, email, and message are mandatory
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        // Reset after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 5000);
      } else {
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
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

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Error banner */}
          {errorMessage && (
            <motion.div
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <HiOutlineExclamationCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
              {errorMessage}
            </motion.div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-ink-700 mb-1.5"
              >
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
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
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
            <div className="relative">
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="appearance-none w-full pl-4 pr-12 py-3 rounded-xl border border-surface-300 bg-surface-50 text-ink-800 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select a topic</option>
                <option value="New Project Inquiry">New Project Inquiry</option>
                <option value="Design Collaboration">Design Collaboration</option>
                <option value="Freelance Opportunity">Freelance Opportunity</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-ink-500">
                <HiOutlineChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-ink-700 mb-1.5"
            >
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
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
