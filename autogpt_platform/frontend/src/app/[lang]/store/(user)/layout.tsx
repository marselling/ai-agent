import * as React from "react";
import { Sidebar } from "@/components/agptui/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const sidebarLinkGroups = [
    {
      links: [
        { text: "Creator Dashboard", href: "/store/dashboard" },
        { text: "Agent dashboard", href: "/store/agent-dashboard" },
        { text: "Integrations", href: "/store/integrations" },
        { text: "Profile", href: "/store/profile" },
        { text: "Settings", href: "/store/settings" },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen w-screen max-w-[1360px] flex-col lg:flex-row">
      <Sidebar linkGroups={sidebarLinkGroups} />
      {children}
    </div>
  );
}