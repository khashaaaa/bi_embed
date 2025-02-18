import React from "react";
import { LayoutDashboard, Trello, Inbox, Users, Settings } from "lucide-react";

export const Aside = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      name: "Kanban",
      icon: Trello,
      badge: "Pro",
    },
    {
      name: "Inbox",
      icon: Inbox,
      badge: "3",
    },
    {
      name: "Users",
      icon: Users,
      badge: null,
    },
    {
      name: "Settings",
      icon: Settings,
      badge: null,
    },
  ];

  return (
    <aside
      className="w-64 transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-transparent dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-200 rounded-lg hover:bg-gray-700 group"
                >
                  <Icon
                    className="w-5 h-5 text-gray-400 transition-colors duration-75 group-hover:text-white"
                    aria-hidden="true"
                  />
                  <span className="ms-3 flex-1 whitespace-nowrap">
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
