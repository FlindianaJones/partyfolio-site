import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './root.module.css'
import Link from 'next/link'
import Cube from './cube'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flynn Burklin Portfolio Site',
  description: 'Thanks for your consideration!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className={inter.className}>
      <main className={styles.main}>
        <div className={[styles.header, styles.container].join(' ')}>
          Header
        </div>
        <div className={[styles.left, styles.container].join(' ')}>
          <ul>
            <li className={styles.listLink}><Link href='/'>Home</Link></li>
            <li className={styles.listLink}><Link href='/API_Demo'>API Demo</Link></li>
            <li className={styles.listLink}><Link href='/Something'>Something</Link></li>
            <li className={styles.listLink}><Link href='/Contact'>Contact</Link></li>
          </ul>
        </div>
        <div className={[styles.center, styles.container].join(' ')}>
          {children}
        </div>
        <div className={[styles.right, styles.container].join(' ')}>
          If this cube stops spinning, the website stopped working for some reason...sorry!
          <Cube />
        </div>
      </main>
    </body>
  )
}
