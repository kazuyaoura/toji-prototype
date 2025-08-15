import './globals.css';
import { MoneyProvider } from '@/contexts/MoneyContext';
import { CharacterProvider } from '@/contexts/CharacterContext'; // ←追加

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head />
      <body>
        <MoneyProvider>
          <CharacterProvider>
            {children}
          </CharacterProvider>
        </MoneyProvider>
      </body>
    </html>
  );
}
