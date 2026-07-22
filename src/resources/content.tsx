import { About, Blog, Gallery, Home, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Irfan",
  lastName: "Putra",
  name: `Irfan Akbar Pramana Putra`,
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "[EMAIL_ADDRESS]",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Indonesia"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/akbarirfanp",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/irfan-putra-b8213a421",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/_irfanakb",
  //   essential: false,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "https://github.com/akbarirfanp",
  },
  subline: (
    <>
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Computer Science graduate passionate about software development and problem-solving. I enjoy building reliable, user-focused applications and continuously improving my technical skills. I'm eager to learn, adapt to rapidly evolving technologies, and deliver meaningful software solutions that create real value
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PT Solusi Tiga Selaras (Solutif)",
        timeframe: "February 2025 - February 2026 (1 year)",
        role: "Technical Consultant Intern",
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/gallery/solutif-01.jpg",
            alt: "Solutif",
            width: 16,
            height: 9,
          },
        ],
        achievements: [
          <>
            Developed and integrated REST APIs between frontend (Nuxt) and backend services (Hypervel and Goravel)
          </>,
          <>
            Designed system architecture using UML diagrams and Entity Relationship Diagrams (ERD)
          </>,
          <>
            Integrated third-party services (Genesys) into the company's products
          </>,
          <>
            Collaborated with frontend and backend teams to implement and maintain application features
          </>,
          <>
            Served as an IT Help Desk for one month, providing technical support
          </>,
        ],
      },
      // {
      //   company: "CV Bisma Cipta Solusi",
      //   timeframe: "2021 - 2021",
      //   role: "IT Staff",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple platforms, improving
      //       design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line, contributing to a 15% increase
      //       in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Binus University 2022-2026",
        description: <>Bachelor of Computer Science (S.Kom)</>,
      },
      {
        name: "SMKN 17 2019-2022",
        description: <>Software Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Software Development",
        tags: [
          {
            name: "Nuxt",
            icon: "nuxt",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "PHP (Laravel Framework)",
            icon: "Laravel",
          },
          {
            name: "Docker",
            icon: "Docker",
          },
          {
            name: "Golang (Goravel Framework)",
            icon: "Goravel",
          },
          {
            name: "MySQL",
            icon: "MySQL",
          },
          {
            name: "Vue.js",
            icon: "Vue",
          },
          {
            name: "Rest API",
            icon: "Rest API",
          },
          {
            name: "Database Management",
            icon: "Database Management",
          },
          {
            name: "Git",
            icon: "Git",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/projects/project-01/sipling-01.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/solutif-01-cropped.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
