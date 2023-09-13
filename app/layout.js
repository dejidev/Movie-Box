import './globals.css'

import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-DM-Sans',
  display: 'swap',
})

export const metadata = {
  title: 'Movie Box',
  description: 'Movie box for showcasing of top and popular movies ... ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  )
}
