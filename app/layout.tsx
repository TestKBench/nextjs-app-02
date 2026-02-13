import '../styles/globals.css'

export const metadata = {
  title: 'NextJS App 02',
  description: 'Sample NextJS application',
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
