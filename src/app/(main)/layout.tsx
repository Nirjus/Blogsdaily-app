import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
