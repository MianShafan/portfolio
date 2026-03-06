import { Code2, Database, Globe, Layers, Monitor, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Full-stack web applications with PHP, Laravel & modern frontend technologies.",
  },
  {
    icon: Layers,
    title: "Management Systems",
    desc: "Custom ERP solutions — School, College, Business management platforms.",
  },
  {
    icon: Monitor,
    title: "POS Systems",
    desc: "Point of Sale with inventory, barcode scanning, multi-store & analytics.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Optimized MySQL schemas, complex queries & data architecture.",
  },
  {
    icon: Code2,
    title: "API Development",
    desc: "RESTful APIs, third-party integrations & backend services.",
  },
  {
    icon: Wrench,
    title: "Custom Software",
    desc: "Tailored solutions for industrial units, billing & HR tools.",
  },
];

const AboutTab = () => {
  return (
    <div>
      {/* SEO Hidden Content */}
      <div className="sr-only" aria-hidden="true">
        <h1>Shafan Tufail - Full Stack Developer & Laravel Expert Pakistan</h1>
        <p>Shafan Tufail is a professional Full Stack Developer and Laravel Expert from Khurrianwala, Faisalabad, Pakistan. 
        Specializing in PHP, Laravel, MySQL, JavaScript, Bootstrap and custom business software development. 
        Available for hire for web development projects, management systems, POS software, ERP solutions, and business automation tools. 
        With 2+ years of professional experience at Tech Solutionor, artisanAi Solution, and NN Software House, 
        Shafan has delivered 15+ live production projects serving real customers across Pakistan. 
        Contact Shafan Tufail at shafanmian486@gmail.com or call +92-308-0399-194 for web development services.</p>
        <p>Services: Web Development, Laravel Development, PHP Development, Management Systems, POS Systems, 
        Database Design, API Development, Custom Software, School Software, College Software, Business Software, 
        ERP Development, Inventory Management, Billing Software, HR Software, Property Management Software</p>
      </div>
      <h2 className="text-2xl font-semibold mb-1">About Me</h2>
      <div className="golden-line mb-6" />

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        I'm a passionate Software Developer specializing in building robust management systems 
        and business solutions. From school & college management to point-of-sale systems and 
        industrial software — I build custom solutions that streamline operations and drive efficiency.
        Currently maintaining live systems including <a href="https://college.javidcompany.pk/login.php" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">College Management System</a> with financial modules.
      </p>
      <p className="text-muted-foreground text-sm leading-relaxed mb-10">
        With 2+ years of professional experience including roles at artisanAi Solution and NN Software House, 
        I've delivered 15+ custom software projects that are actively running for businesses and institutions across Pakistan. 
        My experience spans from PHP development to modern Laravel applications, including live college management systems with balance sheets, 
        debit/credit entries, property management solutions, and real-world applications serving actual customers daily.
      </p>

      <h3 className="text-xl font-semibold mb-1">What I'm Doing</h3>
      <div className="golden-line mb-6" />

      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="service-card rounded-2xl p-5 flex gap-4 items-start hover:border-primary/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <service.icon className="text-primary" size={20} />
            </div>
            <div>
              <h4 className="font-medium text-sm mb-1">{service.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTab;
