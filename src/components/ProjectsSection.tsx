import React from "react";

const projectGroups = {
  "Featured Projects": [
    {
      title: "FocusFlow",
      description: "A productivity timer app with calendar integration, sticky notes, and session analytics. Built using React, Supabase, and Tailwind.",
      image: "/projects/focusflow.png",
      link: "https://focusflow.app",
    },
    {
      title: "Healio",
      description: "A online thearpy booking web-app , with login and live chat functionality , where user can chat with registered therapists and book sessions",
      image: "/projects/Healio.png",
      link: "https://github.com/shantanu2612dongre/Healio",
    }
  ],

  "Full-Stack Apps": [
    {
      title: "KitchenCloud",
      description: "A full-stack cloud kitchen app with cart, filtering, and admin panel. Powered by Django & React.",
      image: "/projects/kitchencloud.png",
      link: "https://kitchencloud.live",
    },
    {
      title: "Resume Matcher AI",
      description: "AI tool that parses resumes & JDs to generate match scores and tailored summaries using OpenAI.",
      image: "/projects/resumematcher.png",
      link: "https://resumematche.png",
    },
  ],
  "Product & Internal Tools": [
    {
      title: "Portfolio",
      description: "Built my own portfolio showcasing my knowledge skillset and projects , Built using React, Tailwind CSS, and Framer Motion. Includes animations, smooth scrolling, and responsive design.and Tailwind.",
      image: "/projects/portfolio.png",
      link: "https://my-portfolio-shantanu2612dongres-projects.vercel.app/",
    },
  ],
};

const ProjectsSection = () => {
  return (
    <section
    id="projects"
    className="py-20 px-4 bg-gradient-to-br from-orange-500 via-pink-600 to-purple-700 text-white"
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <p className="text-white/80">
          From SaaS products to internal tools — blending product thinking and full-stack skills
        </p>
      </div>
  
      {Object.entries(projectGroups).map(([groupTitle, projects], i) => (
        <div key={i} className="mb-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-6 text-white">{groupTitle}</h3>
  
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((proj, j) => (
              <a
                key={j}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-[1.02] transition-all border border-white/10 bg-white/10 backdrop-blur-md"
              >
                {/* Image */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-52 object-cover"
                />
  
                {/* Title */}
                <div className="bg-black/40 p-3 text-center">
                  <h3 className="text-lg font-semibold text-white">{proj.title}</h3>
                </div>
  
                {/* Hover Description */}
                <div className="absolute inset-0 bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-sm text-center">
                  {proj.description}
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default ProjectsSection;