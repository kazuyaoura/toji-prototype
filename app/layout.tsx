import './globals.css';
import { MoneyProvider } from '@/contexts/MoneyContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head />
      <body>
        <MoneyProvider>{children}</MoneyProvider>
      </body>
    </html>
  );
}
