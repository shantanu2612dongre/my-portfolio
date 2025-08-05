"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, Book, Star } from "lucide-react";

const skills = {
  product_management: [
    { name: "Product Lifecycle Management [Product Planning, Product Development, Product Launch]", level: 90 },
    { name: "User Story Writing", level: 93 },
    { name: "User Journey", level: 96 },
    { name: "Product Roadmapping", level: 95 },
    { name: "User Research", level: 92 },
    { name: "Writing structured PRDs", level: 97 },
    { name: "KPI Measurement", level: 95 },
  ],
  development: [
    { name: "HTML/CSS/Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "MERN Stack", level: 85 },
    { name: "Python", level: 80 },
    { name: "Django / REST APIs", level: 80 },
    { name: "Git & GitHub", level: 80 },
  ],
  data_visualization:[
    { name: "Dashboard Creation", level: 87 },
    { name: "Excel.Power BI,Tableau", level: 91 },
    { name: "SQL Queries", level: 85 },
    { name: "Lucid Chart", level: 95 },
    { name:"Adobe Analytics", level: 92 },
  ],

  qa_testing: [
    { name: "Postman / API Testing", level: 80 },
    { name: "Regression Testing", level: 80 },
    { name: "Salesforce CRM", level: 85 },
    { name: "Agile / Scrum Methodologies", level: 90 },
    { name: "A/B Testing", level: 92 },
  ],
  soft_skills:[
    { name: "Satkeholder Communication", level: 97 },
    { name: "Customer Interacion", level: 89 },
    { name: "Attention to detail in ETA", level: 94 },
    { name: "Conflict Management", level: 97 },

  ],
  tools:[
    { name: "Figma / Canva /Whimsical /Taiga (Wireframing)", level: 90 },
    { name: "JIRA / Confluence", level: 93 },
    { name: "Mixpanel ", level: 93 },
  
  ],
};

const categoryTitles: Record<string, string> = {
  development: "Development",
  data_visualization:"Data Visualization",
  qa_testing: "QA & Testing",
  product_management: "Product Management",
  soft_skills: "Soft Skills",
  tools: "Tools",
};

const keyFeatures = [

  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Product Strategy",
    description: "Roadmapping, A/B Tests, Project Management.",
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "Product Design",
    description: "User Stories, User Flows, Wireframes, Persona Writing.",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Market & User Research",
    description: "Market Analysis, Experiment Design,Usability Testing.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: " Product Development",
    description: "Building responsive and accessible user interfaces with modern web technologies.",
  },
];

const AboutSection = () => {
  return (
    <section
    id="about"
    className="section-padding bg-white text-black"
      //style={{ backgroundImage: "url('/projects/background.png')" }}
    
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
      <h2 className="text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2cf393] via-[#10d09d] to-[#0ba17a] drop-shadow-sm">
  About Me
</h2>
        <p className="text-gray-700">Let’s dive into my experience & skills</p>
      </div>
  
      <div className="grid md:grid-cols- gap-10 items-start">
        {/* Left - About */}
        <div>
          <div className="bg-white p-8 rounded-2xl border border-amber-200 shadow-xl hover:shadow-2xl transition-all">
          <h3 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2cf393] via-[#10d09d] to-[#0ba17a] drop-shadow-sm">
  Who am I
</h3>
            <p className="text-gray-800 text-[17px]  font-semibold leading-relaxed">
            Product Manager with a certified background in Salesforce and hands-on experience across the full product lifecycle — from discovery to delivery. I bring a strong foundation in user research, roadmap execution, and cross-functional collaboration, backed by a technical edge in platforms like Salesforce (Service, Sales, Marketing, Community Cloud). My strength lies in building scalable, user-first solutions that align product strategy with measurable business outcomes.
            </p>
  
            <div className="grid grid-cols-2 gap-4 mt-8">
              {keyFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white border border-amber-200 p-4 rounded-xl shadow-lg hover:scale-[1.02] transition-all"
                >
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#10d09d] to-[#2cf393] hover:from-[#2cf393] hover:to-[#10d09d] text-white flex items-center justify-center mb-2">
                    
                      {feature.icon}
                    </div>
                    <h4 className="font-medium text-black text-sm">{feature.title}</h4>
                    <p className="text-gray-600 text-xs mt-1">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
  
        {/* Right - Skills */}
        <div>
          <div className="bg-white p-12 min-h-[500px] rounded-2xl border border-amber-200 shadow-xl hover:shadow-2xl transition-all">
          <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2cf393] via-[#10d09d] to-[#0ba17a] drop-shadow-sm">
  My Skills
</h2>
<Tabs defaultValue="product_management" className="w-full">
            <TabsList className="flex flex-wrap gap-2 mb-8 bg-gradient-to-r from-white via-[#e0fff2] to-[#caffea] border border-[#2cf393]/30 rounded-lg p-1 justify-center items-center">

                {Object.keys(skills).map((key) => (
                  <TabsTrigger
                  key={key}
                  value={key}
                  className="text-black data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#2cf393] data-[state=active]:to-[#0ba17a] data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-[#e0fff2] transition-all min-w-[120px] whitespace-nowrap text-center rounded-md px-4 py-2"
                >
                  
                    {categoryTitles[key]}
                  </TabsTrigger>
                ))}
              </TabsList>
  
              {Object.entries(skills).map(([category, skillList]) => (
                <TabsContent key={category} value={category}>
                  <div className="space-y-4 mt-12">
                    {skillList.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1 text-sm font-medium">
                          <span>{skill.name}</span>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
  <div
    className="h-full bg-gradient-to-r from-[#2cf393] via-[#10d09d] to-[#0ba17a] rounded-full transition-all duration-700 ease-in-out hover:shadow-[0_0_8px_#10d09d]"
    style={{ width: `${skill.level}%` }}
  />
</div><div className="h-2 bg-amber-100 rounded-full overflow-hidden">
  <div
    className="h-full bg-gradient-to-r from-[#2cf393] via-[#10d09d] to-[#0ba17a] rounded-full transition-all duration-700 ease-in-out hover:shadow-[0_0_8px_#10d09d]"
    style={{ width: `${skill.level}%` }}
  />
</div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutSection;