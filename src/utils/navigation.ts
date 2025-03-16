// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/", target: "_self" },
  { name: "YouConnect Platform", url: "https://youdemonia-table.vercel.app/", target: "_blank" },
  { name: "About", url: "/about", target: "_self" },
  { name: "Tutorials", url: "/tutorials", target: "_self" },
  { name: "Our Events", url: "/events", target: "_self" },
  { name: "Press", url: "/press", target: "_self" },
  { name: "Contact", url: "/contact", target: "_self" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};