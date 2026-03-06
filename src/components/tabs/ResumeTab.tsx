import { Briefcase, BookOpen, GraduationCap } from "lucide-react";

const experience = [
  {
    title: "Full Stack Developer",
    place: "Tech Solutionor",
    period: "AUG 2025 — Present",
    desc: "Lead full-stack development of enterprise management systems and custom business solutions. Architect scalable web applications using PHP, Laravel, and MySQL with focus on performance optimization and code quality.",
  },
  {
    title: "Laravel Developer",
    place: "artisanAi Solution",
    period: "DEC 2024 — AUG 2026",
    desc: "Developed robust web applications using Laravel framework with advanced features including API integrations, authentication systems, and database optimization. Collaborated on cross-functional teams using Git workflows.",
  },
  {
    title: "PHP Developer", 
    place: "NN Software House",
    period: "Mar 2023 — Jun 2024",
    desc: "Built dynamic web applications using core PHP and MySQL. Implemented business automation solutions, database design. Delivered projects within tight deadlines while maintaining code standards.",
  },
  {
    title: "Junior Full Stack Developer",
    place: "Various Client Projects",
    period: "2021 — 2022",
    desc: "Developed custom web applications for local businesses using PHP, and MySQL. Created responsive user interfaces with Bootstrap and implemented business logic for automation tools and reporting systems.",
  },
];

const education = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "The University of Faisalabad (TUF)",
    period: "2021 — 2025",
    field: "Software Engineering",
  },
  {
    degree: "Intermediate (ICS)",
    institution: "Pak Junior School Khurrianwala",
    period: "2019 — 2021",
    field: "Intermediate in Computer Science",
  },
  {
    degree: "Matriculation",
    institution: "High Secondary School Khurrianwala",
    period: "2017 — 2019",
    field: "Computer Science",
  },
];

const skills = [
  { name: "PHP", level: 95 },
  { name: "Laravel", level: 92 },
  { name: "MySQL", level: 88 },
  { name: "JavaScript", level: 85 },
  { name: "HTML/CSS", level: 90 },
  { name: "Bootstrap", level: 85 },
  { name: "jQuery", level: 82 },
  { name: "Git", level: 80 },
];

const ResumeTab = () => {
  return (
    <div>
      {/* SEO Hidden Content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Shafan Tufail Resume - Full Stack Developer CV Pakistan</h2>
        <p>Shafan Tufail Resume: Full Stack Developer with 2+ years experience. 
        Currently working at Tech Solutionor as Full Stack Developer (Aug 2025 - Present). 
        Previously Laravel Developer at artisanAi Solution (Dec 2024 - Aug 2026), 
        PHP Developer at NN Software House (Mar 2023 - Jun 2024). 
        Education: BS Software Engineering from The University of Faisalabad (TUF) 2021-2025, 
        ICS from Pak Junior School Khurrianwala 2019-2021, 
        Matric Computer Science from High Secondary School Khurrianwala 2017-2019. 
        Skills: PHP 95%, Laravel 92%, MySQL 88%, HTML/CSS 90%, JavaScript 85%, Bootstrap 85%, jQuery 82%, Git 80%.
        Download CV of Shafan Tufail - Laravel Developer - PHP Expert - Full Stack Developer Pakistan</p>
      </div>
      <h2 className="text-2xl font-semibold mb-1">Resume</h2>
      <div className="golden-line mb-8" />

      {/* Experience */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Briefcase className="text-primary" size={18} />
          </div>
          <h3 className="text-lg font-semibold">Experience</h3>
        </div>

        <div className="space-y-6 ml-5 border-l border-border pl-6">
          {experience.map((item) => (
            <div key={item.title} className="relative">
              <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-card" />
              <h4 className="font-medium text-sm">{item.title}</h4>
              <p className="text-xs text-primary mb-1">{item.period}</p>
              <p className="text-xs text-muted-foreground">{item.place}</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <GraduationCap className="text-primary" size={18} />
          </div>
          <h3 className="text-lg font-semibold">Education</h3>
        </div>

        <div className="space-y-6 ml-5 border-l border-border pl-6">
          {education.map((item) => (
            <div key={item.degree} className="relative">
              <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-card" />
              <h4 className="font-medium text-sm">{item.degree}</h4>
              <p className="text-xs text-primary mb-1">{item.period}</p>
              <p className="text-xs text-muted-foreground">{item.institution}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.field}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <BookOpen className="text-primary" size={18} />
          </div>
          <h3 className="text-lg font-semibold">My Skills</h3>
        </div>

        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1.5">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeTab;
