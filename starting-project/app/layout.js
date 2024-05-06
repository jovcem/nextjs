import './globals.css'
import Link from 'next/link'
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/" >Home</Link>
        </div>
        {children}</body>
    </html>
  );
}
