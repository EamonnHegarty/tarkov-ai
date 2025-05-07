"use client";

import React, { useState } from "react";
import { ContentSections } from "./ContentSections";
import { SideNavigation } from "./SideNavigation";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="flex min-h-screen bg-tarkov">
      <SideNavigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="flex-1 py-6 px-4 overflow-y-auto">
        <ContentSections activeSection={activeSection} />
      </div>
    </div>
  );
}
