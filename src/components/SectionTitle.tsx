type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-4xl font-bold uppercase tracking-widest text-center mb-10">
      {title}
    </h2>
  );
}
