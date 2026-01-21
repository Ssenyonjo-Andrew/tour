import './globals.css'

export const metadata = {
  title: 'SSERUZ TOURS AND TRAVEL',
  description: 'East Africa\'s Premier Adventure Travel Partner - Experience authentic safari adventures, cultural immersion, and unforgettable journeys through Kenya, Uganda, Tanzania, and Rwanda.',
  keywords: 'East Africa tours, safari Kenya, Uganda travel, Tanzania adventures, Rwanda tours, wildlife safari, cultural experiences, adventure travel',
  authors: [{ name: 'SSERUZ TOURS AND TRAVEL' }],
  creator: 'SSERUZ TOURS AND TRAVEL',
  publisher: 'SSERUZ TOURS AND TRAVEL',
  icons: {
    icon: [
      {
        url: '/pics/logo.jpg.jpg',
        sizes: 'any',
        type: 'image/jpeg',
      },
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" fill="%23000000" stroke="%2322c55e" stroke-width="1"/><text x="16" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="%2322c55e">S</text></svg>',
        sizes: '32x32',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/pics/logo.jpg.jpg',
    apple: [
      {
        url: '/pics/logo.jpg.jpg',
        sizes: '180x180',
        type: 'image/jpeg',
      },
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><circle cx="90" cy="90" r="85" fill="%23000000" stroke="%2322c55e" stroke-width="4"/><text x="90" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="80" font-weight="bold" fill="%2322c55e">S</text></svg>',
        sizes: '180x180',
        type: 'image/svg+xml',
      }
    ],
  },
  openGraph: {
    title: 'SSERUZ TOURS AND TRAVEL - East Africa\'s Premier Adventure Travel',
    description: 'Discover authentic East African adventures with SSERUZ TOURS. Safari experiences, cultural immersion, and unforgettable journeys across Kenya, Uganda, Tanzania, and Rwanda.',
    url: 'https://sseruztours.com',
    siteName: 'SSERUZ TOURS AND TRAVEL',
    images: [
      {
        url: '/pics/logo.jpg.jpg',
        width: 1200,
        height: 630,
        alt: 'SSERUZ TOURS AND TRAVEL Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSERUZ TOURS AND TRAVEL',
    description: 'East Africa\'s Premier Adventure Travel Partner',
    images: ['/pics/logo.jpg.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
