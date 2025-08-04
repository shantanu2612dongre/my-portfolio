import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    position: "Product Consultant ",
    company: "Makepositive Software Solutions Ltd",
    duration: "Jan 2022 - Nov 2023",
    description: [
      " Shipped High-Impact Salesforce Features across Service, Sales, Marketing, and Community Clouds by defining user stories with PMs and ensuring QA alignment, enabling 4 major enterprise go-lives.",
	"Mapped B2B CRM Journeys and designed scalable test cases for workflows like lead conversion, case routing, email automation, and partner onboarding improving coverage across 5+ Salesforce modules.",
		" Led End-to-End QA Strategy, combining manual and automated tests for Lightning components, validation rules, Flows, Apex triggers, and API integrations , increased release confidence by 35%.",
		"Reduced Bug Leakage by 40% by implementing a proactive QA loop: pre-UAT functional test cycles, regression sweeps, and stakeholder sign offs before sandbox refreshes.",
		"	Enhanced User Experiences by collaborating with UI/UX and product design teams to test and iterate community portals and self-service experiences , resulting in 28% higher user satisfaction scores.",
	"Streamlined Release Operations: Integrated CI/CD test feedback into JIRA workflows and set up dashboards to track sprint velocity, blocker resolution, and release burndown.",
	"Validated Complex Marketing Journeys with Journey Builder, Pardot, and dynamic email campaigns — ensuring accurate lead scoring and engagement logic for over 50,000 users.",
  " Partnered with Product Managers in backlog grooming, sprint planning, and prioritization — balancing business urgency with QA bandwidth and risk thresholds."
    ],
  },
  {
    position: "Trainee Associate Engineer ",
    company: "Wipro Limited",
    duration: "2021 - 2021",
    description: [
      "Designed architecture diagrams for ETL pipelines, improving efficiency by 40%.",
      "Implemented CI/CD pipelines reducing deployment time by 60%.",
      "Assisted in cloud migration projects using AWS Lambda and EC2.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-white text-black"
    // style={{ backgroundImage: "url('/projects/background.png')" }}
    >
      <div className="section-container">
        <div className="text-center mb-12">
        <h2 className="text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2cf393] via-[#10d09d] to-[#0ba17a] drop-shadow-sm">
  Work Experience
</h2>
          <p className="text-#2cf393-700 max-w-2xl mx-auto">
            My professional journey and the impactful contributions I've made along the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-10 max-w-4xl mx-auto">
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Card key={index} className="backdrop-blur-sm border border-amber-200 shadow-lg text-black p-7 rounded-xl"
              style={{ backgroundColor: "rgba(238, 255, 247, 0.1)" }}>
                <CardContent className="p-6">
                  <div className="flex flex-wrap justify-between mb-1">
                    <h4 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2cf393] via-[#10d09d] to-[#0ba17a] drop-shadow-sm">{experience.position}</h4>
                    <span className="text-xl text-gray-600 font-semibold">
                      
                      {experience.duration}
                    </span>
                  </div>
                  <p className="text-white-900 font-bold mb-3">{experience.company}</p>
                  <ul className="space-y-3 ml-4 list-disc marker:text-[#10d09d] text-[17px] leading-relaxed text-black">
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