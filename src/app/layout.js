import { Inter } from 'next/font/google'
import './globals.css'


export const metadata = {
  title: 'BTQ Superstore - Quality Products at Affordable prices.',
  description: 'BTQ Superstore is the Best Supermarket to get the best quality household appliances, kitchen utensils, Baby care essentials, and many more at affordable prices. ',
  icons: {
    icon: [
      {
        url: '/favicon/android-chrome-192x192.png',
        href: '/favicon/android-chrome-192x192.png',
      },
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>
        {children}
      </body>
    </html>
  )
}

