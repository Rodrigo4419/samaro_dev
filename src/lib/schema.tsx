export function generateSchema() {

    const BASE_URL="https://samaro-dev.vercel.app"
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        name: "Rodrigo Martínez Sánchez",
        jobTitle: "Desarrollador Web Freelance",
        description: "Freelance web developer specializing in JavaScript/TypeScript, React, and Next.js. I build landing pages and applications for small local businesses, as well as web solutions for larger companies.",
        url: `${BASE_URL}`,
        image: `${BASE_URL}/meta-img.png`,
        email: "rodrigomartinezsanchez.rms@gmail.com",
        sameAs: [
          "https://github.com/Rodrigo4419",
          "https://www.linkedin.com/in/rodrigo-martinez-36b2721b0"
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tula de Allende",
          addressRegion: "Hidalgo",
          addressCountry: "MX",
        },
        knowsAbout: [
          "JavaScript",
          "TypeScript",
          "React",
          "Vite",
          "Next.js",
          "Material UI",
          "GIT",
          "Geospatial",
          "SQL",
          "AWS",
        ],
        knowsLanguage: ["es", "en"],
        worksFor: {
          "@id": `${BASE_URL}/#business`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${BASE_URL}/#business`,
        name: "Rodrigo Martínez Sánchez — Web Development",
        description:  "Freelance web development services: landing pages, service websites, and custom applications built with React and Next.js.",
        url: `${BASE_URL}`,
        image: `${BASE_URL}/meta-img.png`,
        email: "rodrigomartinezsanchez.rms@gmail.com",
        founder: {
          "@id": `${BASE_URL}/#person`,
        },
        areaServed: [
          { "@type": "Country", name: "México" },
          { "@type": "City", name: "Tula de Allende" },
        ],
      },
    ],
  };
}