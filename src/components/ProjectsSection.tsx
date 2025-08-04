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
      description: "An online therapy booking web-app with login and live chat functionality, where users can chat with registered therapists and book sessions.",
      image: "/projects/Healio.png",
      link: "https://github.com/shantanu2612dongre/Healio",
    },
    {
      title: "SplitEase - Wireframe",
      description: "Wireframe designed for a rent and payment splitting app.",
      image: "/projects/Splitease.png",
      pdf: "/projects/pdf/Wireframe-SplitEase.pdf",
    },
  ],

  "Product Case Studies, Teardowns, PRDs and Projects": [
    {
      title: "MagicBricks Case Study",
      description: "A product case study on improving conversions and trust in real estate listings.",
      image: "/projects/magicbricks-thumbnail.png",
      pdf: "/projects/pdf/Magicbrick_casestudy.pdf",
    },
    {
      title: "Bumble - Increase ARPU",
      description: "A deck made to show the JTBD to increase the ARPU of dating app Bumble.",
      image: "/projects/bumble.png",
      pdf: "/projects/pdf/Bumble_Increase ARPU.pdf",
    },
    {
      title: "Medium - Increase MAU",
      description: "A deck made to show the JTBD to increase the MAU of Medium circle webapp.",
      image: "/projects/Medium.png",
      pdf: "/projects/pdf/Medium _Increase MAU.pdf",
    },
    {
      title: "Swiggy's Instamart - Increase AOV",
      description: "A product case solution to show how we can increase the Average Order Value of Swiggy's Instamart.",
      image: "/projects/Swiggy Instamart.png",
      pdf: "/projects/pdf/Instamart_Increase AOV.pdf",
    },
    {
      title: "Zomato - Milestone 1",
      description: "Setting milestone 1 as increasing the text review count in the food delivery vertical for Zomato.",
      image: "/projects/Zomato.png",
      pdf: "/projects/pdf/Zomato-Milestone.pdf",
    },
    {
      title: "Pharmeasy - Teardown",
      description: "Pharmeasy product teardown for ordering an item section.",
      image: "/projects/Pharmeasy.png",
      pdf: "/projects/pdf/Pharmeasy - Product Teardown.pdf",
    },
    {
      title: "Zepto Product Teardown",
      description: "A detailed teardown of Zepto's product discovery and search experience.",
      image: "/projects/Zepto.png",
      pdf: "/projects/pdf/Zepto Product Teardown.pdf",
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
    <section id="projects" className="py-20 px-4 bg-white text-black"
    style={{ backgroundImage: "url('/projects/background.png')" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2cf393] via-[#10d09d] to-[#0ba17a] drop-shadow-sm">
  My Projects
</h2>
          <p className="text-gray-700">
            From SaaS products to internal tools — blending product thinking and full-stack skills.
          </p>
        </div>

        {Object.entries(projectGroups).map(([groupTitle, projects], i) => (
          <div key={i} className="mb-16 animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6 text-black">{groupTitle}</h3>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {projects.map((proj, j) => (
                <a
                  key={j}
                  href={proj.pdf || proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer transform hover:scale-[1.02] transition-all bg-white border border-gray-200"
                >
                  {proj.image && (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-52 object-cover"
                    />
                  )}

                  <div className="bg-gray-100 p-3 text-center">
                    <h3 className="text-lg font-semibold">{proj.title}</h3>
                  </div>

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