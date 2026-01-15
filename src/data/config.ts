const config = {
  title: "Abdelkbir Nainiaa | Software Engineer",
  description: {
    long: "Explore the portfolio of Abdelkbir, a software engineer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Abdelkbir, a software engineer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Abdelkbir",
    "portfolio",
    "software engineer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Abdelkbir Nainiaa",
  email: "abdlekbir.nainiaa12@gmail.com",
  site: "https://www.abdelkbirnainiaa.me/",

  // for github stars button
  githubUsername: "AbdelkbirNA",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/abdelkbir-nainiaa/",
    instagram: "https://www.instagram.com/771_vrtx/",
    facebook: "",
    github: "https://github.com/AbdelkbirNA",
  },
};
export { config };
