import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <ScrollReveal
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center max-w-2xl mx-auto" : ""
      }`}
    >
      {label && (
        <div className="flex items-center gap-2 mb-4 justify-start">
          {align === "center" && <div className="flex-1" />}
          <span className="ocean-dot" />
          <span className="text-xs font-semibold text-ocean-600 tracking-widest uppercase">
            {label}
          </span>
          {align === "center" && <div className="flex-1" />}
        </div>
      )}
      <h2 className="heading-lg mb-4">{title}</h2>
      {description && <p className="body-lg">{description}</p>}
    </ScrollReveal>
  );
}
