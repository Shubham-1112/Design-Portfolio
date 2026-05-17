"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineDownload,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { FaLinkedinIn, FaDribbble, FaBehance } from "react-icons/fa";

const contactDetails = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: "shubhamsaurabh1000@gmail.com",
    href: "mailto:shubhamsaurabh1000@gmail.com",
  },
  {
    icon: HiOutlineLocationMarker,
    label: "Location",
    value: "Bihar, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://linkedin.com/in/shubham-saurabh-919893217",
    color: "#0077B5",
  },
  {
    icon: FaDribbble,
    label: "Dribbble",
    href: "#",
    color: "#EA4C89",
  },
  {
    icon: FaBehance,
    label: "Behance",
    href: "#",
    color: "#1769FF",
  },
];

export default function ContactInfo() {
  return (
    <ScrollReveal delay={0.2}>
      <div className="space-y-8">
        {/* Contact details */}
        <div>
          <h3 className="heading-sm mb-5">Contact Details</h3>
          <div className="space-y-4">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-ocean-50 flex items-center justify-center flex-shrink-0">
                  <detail.icon className="w-5 h-5 text-ocean-600" />
                </div>
                <div>
                  <p className="text-xs text-ink-400 font-medium uppercase tracking-wider mb-0.5">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-sm text-ink-800 hover:text-ocean-600 transition-colors"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-sm text-ink-800">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social links */}
        <div>
          <h3 className="font-display text-lg font-semibold text-ink-900 mb-4">
            Connect with Me
          </h3>
          <div className="space-y-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-xl border border-surface-200 hover:border-ocean-200 hover:shadow-elevated transition-all duration-300"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: `${social.color}10` }}
                >
                  <social.icon
                    className="w-4 h-4"
                    style={{ color: social.color }}
                  />
                </div>
                <span className="text-sm font-medium text-ink-700 group-hover:text-ink-900 transition-colors">
                  {social.label}
                </span>
                <HiOutlineExternalLink className="w-4 h-4 text-ink-300 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Resume download */}
        <div className="p-6 bg-gradient-ocean-subtle rounded-2xl border border-ocean-100">
          <h3 className="font-display text-base font-semibold text-ink-900 mb-2">
            Download Resume
          </h3>
          <p className="text-sm text-ink-500 mb-4">
            Get a copy of my latest resume with detailed work experience and
            skills.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-ocean rounded-xl shadow-glass hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
          >
            <HiOutlineDownload className="w-4 h-4" />
            Download CV
          </a>
        </div>

        {/* Map placeholder */}
        <div className="relative rounded-2xl overflow-hidden border border-surface-200 h-48 bg-surface-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <HiOutlineLocationMarker className="w-8 h-8 text-ocean-400 mx-auto mb-2" />
              <p className="text-sm font-medium text-ink-500">Bihar, India</p>
              <p className="text-xs text-ink-400 mt-1">Remote-friendly</p>
            </div>
          </div>
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}
