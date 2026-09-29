import './globals.css'

export const metadata = {
  title: 'HackDataV2 - Synthetic Data Platform',
  description: 'Realistic, privacy-safe tabular, relational and document data generated on demand.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}