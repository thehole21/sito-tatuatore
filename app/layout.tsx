import "./globals.css";

export const metadata = {
  title: "Nome Tatuatore | Fine Line & Blackwork",
  description: "Studio di tatuaggi professionale a Roma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        {/* Questa riga magica inietta Tailwind CSS forzatamente dal web */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#050505] text-[#EAEAEA]">
        {children}
      </body>
    </html>
  );
}