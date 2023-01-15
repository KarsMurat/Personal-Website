import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PersonalCard from "@/components/PersonalCard";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="h-screen place-content-between grid grid-cols-1 justify-items-center bg-zinc-900">
        <Navbar />
        <div className="flex">
          <PersonalCard />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
