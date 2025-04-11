
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    position: "Technical Consultant ",
    company: "Makepositive Software Solutions Ltd",
    duration: "Jan 2022 - Nov 2023",
    description: [
      "Led Agile Scrum ceremonies (daily standups, sprint planning, retrospectives) to drive cross-functional alignment, feature prioritization, and timely product delivery",
      "Collaborated with Product Owners and stakeholders to define user stories, acceptance criteria, and MVP scopes, aligning development with business goals.",
      "	Conducted thorough end-to-end testing, functional testing, and UAT for Salesforce Sales, Service, and Marketing Clouds, ensuring seamless user experience and compliance with business requirements",
      "Implemented and managed a JIRA-based defect tracking system, incorporating automated bug reporting, status tracking, and resolution workflows",
      "Reduced average issue resolution time by 30% through strategic defect triaging, risk-based prioritization, and coordination with developers and business teams",
      "Designed and executed detailed test plans, test cases, and regression suites to validate product stability across multiple releases",
      "Performed API testing and data validation using Postman, Salesforce Workbench, and Swagger, ensuring system integration integrity and backend reliability.",
      "Championed quality assurance best practices, including continuous feedback loops, release checklists, and root-cause analysis to drive continuous improvement.",
      "Partnered with UI/UX teams to review wireframes and prototypes, identifying usability issues early in the product lifecyclee.",
      "Contributed to backlog grooming and feature roadmap planning, ensuring prioritization aligned with business impact and user needs."
    ],
  },
  {
    position: "Trainee Associate Engineer ",
    company: "Wipro Limited",
    duration: "2021 - 2021",
    description: [
      "Designed architecture diagrams for ETL pipelines, improving efficiency by 40%..",
      "Implemented CI/CD pipelines reducing deployment time by 60%.",
      "Assisted in cloud migration projects using AWS Lambda and EC2..",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 text-white">
    <div className="section-container">
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          My professional journey and the impactful contributions I've made along the way.
        </p>
      </div>
  
      <div className="grid lg:grid-cols-1 gap-10 max-w-3xl mx-auto">
        <div className="animate-on-scroll space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/10 text-white">
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between mb-1">
                  <h4 className="text-lg font-semibold">{experience.position}</h4>
                  <span className="text-sm text-white/80 font-medium">
                    {experience.duration}
                  </span>
                </div>
                <p className="text-white/70 mb-3">{experience.company}</p>
                <ul className="space-y-2 ml-4 list-disc marker:text-white/50 text-sm">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default ExperienceSection;
