const config = {
  title: "Abdelkbir Nainiaa | Software Engineer",
  description: {
    long: "Explore the portfolio of Abdelkbir, a software engineer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Abdelkbir, a software engineer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Abdelkbir Nainiaa",
    "software engineer",
    "creative technologist",
    "web developer",
    "portfolio",
    "full stack developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "JavaScript",
    "web development",
    "3D animations",
    "interactive websites",
    "modern web technologies",
    "UI/UX design",
    "frontend development",
    "backend development",
    "web applications",
    "responsive design",
    "performance optimization",
    "GSAP animations",
    "Framer Motion",
    "Spline 3D",
    "Morocco developer",
    "ENSIAS",
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
