import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavLink = ({ href, children, isActive = false }) => (
  <a
    href={href}
    className={`
      block py-2 px-3 rounded-lg transition-colors duration-200
      ${
        isActive
          ? "text-gray-300 md:bg-transparent"
          : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white"
      }
      md:p-0 dark:text-white
    `}
    aria-current={isActive ? "page" : undefined}
  >
    {children}
  </a>
);

export const Head = ({ brandName = "Logo" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", isActive: true },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="bg-transparent">
      <div className="mx-auto w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {brandName}
            </span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none dark:text-gray-400"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          <div className="hidden md:flex md:items-center md:space-x-8 font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                isActive={link.isActive}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`
          md:hidden
          transition-all duration-300 ease-in-out
          ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }
        `}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href} isActive={link.isActive}>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
