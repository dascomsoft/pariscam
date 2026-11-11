import clsx from "clsx";

export default function SectionTitle({ eyebrow, title, description, align = "center", light = false }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const textColor = light ? "text-white" : "text-pariscam-text";
  const descColor = light ? "text-gray-300" : "text-pariscam-muted";
  return (
    <div className={clsx("max-w-3xl mb-12", alignClass)}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-pariscam-green mb-3">{eyebrow}</p>}
      <h2 className={clsx("text-3xl md:text-4xl font-bold mb-4", textColor)}>{title}</h2>
      {description && <p className={clsx("text-base md:text-lg leading-relaxed", descColor)}>{description}</p>}
    </div>
  );
}
