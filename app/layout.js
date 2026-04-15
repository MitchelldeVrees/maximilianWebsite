import { Anton, Inter, Geist_Mono } from 'next/font/google';
import './globals.css';

const anton = Anton({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400'
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin']
});

export const metadata = {
  title: 'Maximilian Robijns | Cinematic Dark Concept',
  description: 'Design 1 rebuilt as a responsive, scrollable webpage.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${inter.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
