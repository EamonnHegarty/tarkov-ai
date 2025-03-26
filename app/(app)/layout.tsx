import { UserButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";

interface ProtectedAppLayout {
  children: React.ReactNode;
}

const LINKS = [
  { title: "Home", href: "/home" },
  { title: "AI Chat", href: "/chat" },
  { title: "Kappa Grinder", href: "/kappa" },
  { title: "Analytics", href: "/dashboard" },
];

const ProtectedAppLayout: React.FC<ProtectedAppLayout> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-tarkov text-text">
      <header className="h-16 border-b border-black/10 bg-tarkov px-10">
        <div className="flex h-full items-center justify-between">
          <nav className="flex gap-12 text-sm font-medium">
            {LINKS.map((link) => (
              <Link key={link.href} href={`${link.href}`} className="text-2xl">
                {link.title}
              </Link>
            ))}
          </nav>
          <UserButton />
        </div>
      </header>
      <main className="flex-1 overflow-auto ml-10">{children}</main>
    </div>
  );
};

export default ProtectedAppLayout;
