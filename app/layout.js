import './globals.css'

export const metadata = {
  title: 'Tour App',
  description: 'Your gateway to amazing adventures and unforgettable experiences',
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
