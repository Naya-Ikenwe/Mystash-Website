// app/(application)/layout.tsx
import '../globals.css'; // Import global CSS

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}