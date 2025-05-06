"use client";

import { UserButton } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LINKS } from "@/utils/links";
import { Menu, X } from "lucide-react";

const ProtectedAppLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest("nav") && !target.closest("button")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="flex h-screen w-screen flex-col overflow-x-hidden bg-tarkov text-text/90">
      <header className="border-b border-black/20 bg-tarkov px-4 md:px-6 lg:px-10 py-2 sticky top-0 z-50">
        <div className="flex h-14 items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text hover:text-tarkov-secondary p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className="hidden md:flex gap-3 lg:gap-8">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl lg:text-2xl font-medium hover:text-tarkov-secondary transition-colors duration-200 px-2 py-1"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          {!isMenuOpen && (
            <div className="md:hidden font-bold text-xl text-tarkov-secondary">
              TarkovAI
            </div>
          )}
          <UserButton afterSignOutUrl="/" />
        </div>
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-3 border-t border-black/10 animate-in slide-in-from-top duration-200">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl font-medium hover:text-tarkov-secondary py-2 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        )}
      </header>
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <main className="flex-1 min-h-0 px-4 md:px-6 lg:px-10 py-4 md:py-6 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default ProtectedAppLayout;
