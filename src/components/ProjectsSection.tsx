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
    },


  ],

  "Product Case Studies ,Treadowns , PRD's and Projects": [
    {
      title: "MagicBricks Casestudy",
      description: "A product case study on improving conversions and trust in real estate listings.",
      image: "/projects/magicbricks-thumbnail.png",
      pdf: "public/projects/pdf/Magicbrick_casestudy.pdf",
    },
    {
      title: "Bumble- Increase ARPU",
      description: "A deck made to show the JTBD to increase the ARPU of dating app bumble",
      image: "/projects/bumble.png",
      pdf: "public/projects/pdf/Bumble_Increase ARPU.pdf",
    },
    {
      title: "Medium - Increase MAU",
      description: "A deck made to show the JTBD to increase the MAU of medium circle webapp",
      image: "/projects/Medium.png",
      pdf: "public/projects/pdf/Medium _Increase MAU.pdf",
    },
    {
      title: "Swiggy's Instamart- Increase AOV",
      description: "A product case solution to show how can we increase the Average Order Value of Swiggy's instamart",
      image: "/projects/Swiggy Instamart.png",
      pdf: "public/projects/pdf/Instamart_Increase AOV.pdf",
    },
    {
      title: "Zomato - Setting Miletsone 1",
      description: "Setting milestone 1 as Increasing the Text review count in Food delivery vertical for Zomato",
      image: "/projects/Zomato.png",
      pdf: "public/projects/pdf/Zomato-Milestone.pdf",
    },
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
                  href={proj.pdf || proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-[1.02] transition-all border border-white/10 bg-white/10 backdrop-blur-md"
                >
                  {/* Image or PDF preview */}
                  {proj.image ? (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-52 object-cover"
                    />
                  ) : proj.pdf ? (
                    <img
                      src={`https://docs.google.com/gview?url=https://yourdomain.com${proj.pdf}&embedded=true`}
                      alt="PDF Preview"
                      className="w-full h-52 object-cover bg-white"
                    />
                  ) : null}

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