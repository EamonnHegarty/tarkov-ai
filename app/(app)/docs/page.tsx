"use client";

import React, { useState } from "react";
import { DocsContentSection } from "../../../components/DocsContentSection";
import { DocsSideNavigation } from "../../../components/DocsSideNavigation";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="flex min-h-screen bg-tarkov">
      <DocsSideNavigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="flex-1 py-6 px-4 overflow-y-auto">
        <DocsContentSection activeSection={activeSection} />
      </div>
    </div>
  );
}
