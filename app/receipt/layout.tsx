export default function ReceiptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 pb-8 md:py-10">
      <div className="inline-block max-w-lg">
        {children}
      </div>
    </section>
  );
}
