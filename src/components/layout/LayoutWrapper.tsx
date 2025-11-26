import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutWrapperProps {
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
}

export default function LayoutWrapper({
  children,
  showNav = true,
  showFooter = true
}: LayoutWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showNav && <Navbar />}
      <main className="flex-1">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
