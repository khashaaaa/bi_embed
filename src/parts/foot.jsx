export const Foot = () => {
  return (
    <footer className="z-10 bg-transparent dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-lg px-4 py-6 lg:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map(({ title, links }) => (
            <div key={title}>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {title}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {links.map(({ name, href }) => (
                  <li key={name} className="mb-4">
                    <a href={href} className="hover:underline">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 pt-6">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              CU
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex space-x-5 mt-4 md:mt-0">
            {socialLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {icon}
                <span className="sr-only">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Brand Center", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { name: "Discord Server", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Licensing", href: "#" },
      { name: "Terms & Conditions", href: "#" },
    ],
  },
  {
    title: "Download",
    links: [
      { name: "iOS", href: "#" },
      { name: "Android", href: "#" },
      { name: "Windows", href: "#" },
      { name: "MacOS", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 8 19"
      >
        <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 17"
      >
        <path d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235A8.344 8.344 0 0 1 16.94 1.5a4.13 4.13 0 0 0-3.95-2.5c-2.27 0-4.1 1.832-4.1 4.093 0 .319.037.635.105.919A11.705 11.705 0 0 1 1.4.734a4.005 4.005 0 0 0-.556 2.03 4.063 4.063 0 0 0 1.845 3.381 4.105 4.105 0 0 1-1.861-.51v.048a4.095 4.095 0 0 0 3.276 3.989c-.735.2-1.507.23-2.262.086a4.145 4.145 0 0 0 3.835 2.853A8.282 8.282 0 0 1 0 15.025a11.7 11.7 0 0 0 6.29 2c7.548 0 11.675-6.155 11.675-11.496 0-.173-.004-.347-.011-.52Z" />
      </svg>
    ),
  },
];
