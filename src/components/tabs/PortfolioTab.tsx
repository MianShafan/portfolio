import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";

const categories = ["All", "Management", "POS", "Custom"];

const projects = [
  {
    title: "School Management System",
    category: "Management",
    description: "Complete school ERP with student enrollment, attendance tracking, fee management, exam results, and parent portal.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    link: "https://oxford.pjsc.com.pk/",
  },
  {
    title: "College Management System",
    category: "Management",
    description: "Full-featured college administration platform with department management, timetable scheduling, and student records.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    link: "https://college.javidcompany.pk/login.php",
  },
  {
    title: "POS — PHP (with Delivery)",
    category: "POS",
    description: "Retail POS system with inventory management, sales tracking, receipt printing, delivery tracking and daily reporting.",
    tech: ["PHP", "MySQL", "HTML/CSS", "jQuery"],
    link: "https://sheraz.javidcompany.pk/login.php",
  },
  {
    title: "POS — Advanced (Permissions)",
    category: "POS",
    description: "Advanced POS with role-based permissions, multi-user access, barcode scanning, and comprehensive analytics.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    link: "https://posdemo.techatooz.com/login.php",
  },
  {
    title: "MAT Stitching Unit Software",
    category: "Custom",
    description: "Custom industrial management for stitching units — order tracking, production workflow, and inventory control.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    link: "https://mat.pjsc.com.pk/",
  },
  {
    title: "POS — Laravel",
    category: "POS",
    description: "Modern POS rebuilt in Laravel with role-based access, barcode scanning, multi-store support, and analytics.",
    tech: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    link: "https://laravelpos.techatooz.com/",
  },
  {
    title: "Custom Business Solutions",
    category: "Custom",
    description: "Various tailored software solutions for local businesses including billing systems, HR tools, and reporting dashboards.",
    tech: ["Laravel", "PHP", "MySQL", "REST API"],
    link: "https://javidcompany.pk/login.php",
  },
];

const PortfolioTab = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      {/* SEO Hidden Content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Shafan Tufail Portfolio - Live Projects by Laravel & PHP Developer Pakistan</h2>
        <p>Portfolio of Shafan Tufail - Full Stack Developer from Pakistan. 
        Live projects: School Management System at oxford.pjsc.com.pk, 
        College Management System at college.javidcompany.pk, 
        POS System with delivery at sheraz.javidcompany.pk, 
        Advanced POS with permissions at posdemo.techatooz.com, 
        MAT Stitching Unit Software at mat.pjsc.com.pk. 
        Shafan Tufail builds custom management systems, POS software, ERP solutions, 
        property management systems, inventory systems, billing software and enterprise web applications. 
        All projects are live and serving real customers across Pakistan. 
        Hire Shafan Tufail for your next web development project in Pakistan.</p>
      </div>
      <h2 className="text-2xl font-semibold mb-1">Portfolio</h2>
      <div className="golden-line mb-6" />

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
              filter === cat
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="group service-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
          >
            {/* Header with gradient */}
            <div className="h-32 bg-gradient-to-br from-primary/10 via-muted to-primary/5 flex items-center justify-center relative">
              <span className="text-3xl font-bold text-primary/20">{project.category === "POS" ? "POS" : project.category === "Management" ? "ERP" : "DEV"}</span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-card/80 flex items-center justify-center text-muted-foreground hover:text-primary opacity-0 group-hover:opacity-100 transition-all"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            <div className="p-4">
              <h4 className="font-medium text-sm mb-1">{project.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                >
                  <Eye size={12} /> View Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTab;
