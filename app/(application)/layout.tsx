// app/(application)/layout.tsx
import localFont from 'next/font/local';
import '../globals.css';
import Link from 'next/link';

// Load Afacad locally
const afcad = localFont({
  src: "../../public/fonts/Afacad-Regular.ttf",
  display: "swap",
});

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={afcad.className}>
        {/* Logo only: avoid full-width background so content/overlays aren't blocked */}
        <div className="fixed top-0 left-0 right-0 z-10 h-0 pointer-events-none">
          <Link
            href="/"
            className="absolute top-4 left-4 transition-transform hover:scale-105 pointer-events-auto"
          >
            <img
              src="/logo/mystashlogo.svg"
              alt="MyStash Home"
              className="h-8 w-auto block"
            />
          </Link>
        </div>
        
        {/* Main content area */}
        <main className="relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}