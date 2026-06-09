import ReadingProgress from '@/components/ReadingProgress';

// Metadata for this route lives in app/tritongpt/page.tsx — keeping a second
// definition here previously caused the og:description to diverge from the
// page's meta description.
export default function TritonGPTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  );
}
