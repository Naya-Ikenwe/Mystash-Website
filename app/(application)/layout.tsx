// app/(application)/layout.tsx
import localFont from 'next/font/local';
import '../globals.css';

// Load Afacad locally
const afcad = localFont({
  src: "../../public/fonts/Afacad-Regular.ttf",
  display: "swap",
});

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={afcad.className}>
        {/* Main content area */}
        <main className="relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}