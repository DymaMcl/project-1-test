import type { Metadata } from "next";
import "./globals.css";
import Layout from "../components/layout/Layout"; // cale relativă corectă
import NextAuthProvider from "../providers/NextAuthProvider"; // cale relativă corectă
import StoreProvider from "./StoreProvider"; // rămâne la fel dacă e în app/

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <StoreProvider>
            <Layout>
              {children}
            </Layout>
          </StoreProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
