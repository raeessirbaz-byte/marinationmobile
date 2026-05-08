interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span className="text-primary font-heading tracking-[0.3em] text-xs mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-current leading-none">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-primary mt-6 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
