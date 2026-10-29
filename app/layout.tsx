
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header, Footer ,WhatsAppContactSection} from '@/components/SiteShell';
import { ReadingTools } from '@/components/ExperienceExtras';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const whatsappNumber = '919355233200'; // Replace with business WhatsApp number

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Adya Expo Designs | Exhibition Stands, Designed & Built In-House',
    template: '%s | Adya Expo Designs',
  },
  description:
    'Adya Expo Designs creates custom and modular exhibition stands with in-house manufacturing, project management and pan-India execution from Delhi and Bengaluru.',
  openGraph: {
    type: 'website',
    title: 'Adya Expo Designs',
    description:
      'Design. Manufacture. Deliver. Your exhibition stand partner across India.',
    siteName: 'Adya Expo Designs',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};


function WhatsAppChat() {
  const phone = '919355233200'; // Your WhatsApp number

  const message = encodeURIComponent(
    "Hello Adya Expo Designs! I'd like to discuss an exhibition stand project."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-bot"
      aria-label="Chat with Adya Expo Designs on WhatsApp"
    >
      <span className="bot-tooltip">
        Let's build something amazing!
      </span>

      <span className="bot-head">
        <svg
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="bot-svg"
        >
          {/* Antenna */}
          <path
            d="M40 13V7"
            stroke="#15334B"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="40" cy="6" r="5" fill="#25D366" />

          {/* Ears */}
          <rect x="5" y="32" width="12" height="22"
            rx="6" fill="#25D366" />
          <rect x="63" y="32" width="12" height="22"
            rx="6" fill="#25D366" />

          {/* Head */}
          <rect
            x="12" y="16" width="56" height="51"
            rx="19"
            fill="#FFFFFF"
            stroke="#25D366"
            strokeWidth="4"
          />

          {/* Face screen */}
          <rect
            x="19" y="26" width="42" height="30"
            rx="12" fill="#17374A"
          />

          {/* Blinking eyes */}
          <ellipse
            className="bot-eye"
            cx="31" cy="39" rx="5" ry="7"
            fill="#66F7CA"
          />
          <ellipse
            className="bot-eye"
            cx="49" cy="39" rx="5" ry="7"
            fill="#66F7CA"
          />

          {/* Smile */}
          <path
            d="M34 48Q40 53 46 48"
            fill="none"
            stroke="#66F7CA"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <span className="bot-whatsapp-badge">
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path
              fill="currentColor"
              d="M16 .8A15.1 15.1 0 0 0 3 23.6L.9 31l7.6-2A15.2 15.2 0 1 0 16 .8Zm0 27.6a12.3 12.3 0 0 1-6.3-1.7l-.5-.3-4.5 1.2 1.2-4.4-.3-.5A12.4 12.4 0 1 1 16 28.4Zm6.8-9.3c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.9c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.1 0 1.8 1.3 3.5 1.5 3.7c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z"
            />
          </svg>
        </span>
      </span>
    </a>
  );
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReadingTools />

        <Header />

        <main id="main-content">
          {children}
        </main>

        <WhatsAppContactSection />

        <Footer />

        <WhatsAppChat />
      </body>
    </html>
  );
}

