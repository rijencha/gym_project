type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div>
      <span className="text-eyebrow">{eyebrow}</span>
      <h2 className="mt-3 max-w-xl text-4xl sm:text-5xl">{title}</h2>
      {description ? (
        <p className="font-sans mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}