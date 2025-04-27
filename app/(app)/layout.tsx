"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import { LINKS } from "@/utils/links";

const ProtectedAppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen flex-col overflow-x-hidden bg-tarkov px-10 pt-2 text-text/90">
      <header className="h-16 border-b border-black/10 bg-tarkov">
        <div className="flex h-full items-center justify-between">
          <nav className="flex gap-12 text-sm font-medium">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-3xl hover:text-tarkov-secondary"
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <UserButton />
        </div>
      </header>
      <main className="flex-1 min-h-0 px-6 mx-6 ">{children}</main>
    </div>
  );
};

export default ProtectedAppLayout;
