import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Providers
import NhostProviderContext from "@/providers/NhostProvider";
import ApolloProviderContext from "@/providers/ApolloProvider";

const robotoSans = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Jarvi App",
  description: "My Jarvi App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${robotoSans.variable} font-sans ${robotoMono.variable} font-mono antialiased`}
      >
        <NhostProviderContext>
          <ApolloProviderContext>{children}</ApolloProviderContext>
        </NhostProviderContext>
      </body>
    </html>
  );
}
