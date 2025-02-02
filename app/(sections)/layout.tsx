export default function SectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <div className="w-full h-full bg-[#edeef2]">{children}</div>;
    </div>
  );
}
