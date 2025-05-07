import React from "react";
import {
  BookOpen,
  MessageSquare,
  BarChart,
  Database,
  Code,
  Shield,
  Share2,
} from "lucide-react";

export const SideNavigation = ({ activeSection, setActiveSection }) => {
  const NavItem = ({ icon, label, sectionId }) => {
    const isActive = activeSection === sectionId;

    return (
      <button
        onClick={() => setActiveSection(sectionId)}
        className={`flex items-center w-full px-3 py-2 text-sm cursor-pointer ${
          isActive
            ? "border-l-4 border-tarkov-secondary bg-background-2"
            : "text-text-secondary hover:bg-background-2/50"
        }`}
      >
        <span
          className={`mr-3 cursor-pointer ${
            isActive ? "text-tarkov-secondary" : "text-text-secondary"
          }`}
        >
          {icon}
        </span>
        {label}
      </button>
    );
  };

  return (
    <div className="w-64 bg-background-2 border-r border-[#333] py-6 px-4 flex-shrink-0">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-text">Documentation</h1>
      </div>

      <nav className="space-y-1">
        <NavItem
          icon={<BookOpen className="w-5 h-5" />}
          label="Overview"
          sectionId="overview"
        />
        <NavItem
          icon={<MessageSquare className="w-5 h-5" />}
          label="AI Chat System"
          sectionId="chat"
        />
        <NavItem
          icon={<BarChart className="w-5 h-5" />}
          label="Data Analytics"
          sectionId="analytics"
        />
        <NavItem
          icon={<Database className="w-5 h-5" />}
          label="Vector Database"
          sectionId="database"
        />
        <NavItem
          icon={<Code className="w-5 h-5" />}
          label="Advanced AI Tools"
          sectionId="tools"
        />
        <NavItem
          icon={<Shield className="w-5 h-5" />}
          label="Authentication"
          sectionId="auth"
        />
        <NavItem
          icon={<Share2 className="w-5 h-5" />}
          label="API Reference"
          sectionId="api"
        />
      </nav>

      <div className="mt-8 pt-8 border-t border-[#333]">
        <button className="flex items-center text-sm text-tarkov-secondary hover:text-tarkov-secondary/80">
          <span className="mr-2">←</span> Back to app
        </button>
      </div>
    </div>
  );
};
