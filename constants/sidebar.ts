import {
  Building2,
  ChartColumn,
  Globe,
  LayoutDashboard,
  Newspaper,
  Terminal,
} from "lucide-react";

export const sidebarItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Companies", href: "/companies", icon: Building2 },
  { name: "Markets", href: "/markets", icon: Globe },
  { name: "Trades", href: "/trades", icon: ChartColumn },
  { name: "News", href: "/news", icon: Newspaper },
  { name: "API", href: "/api", icon: Terminal },
];
