import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import AboutTab from "./tabs/AboutTab";
import ResumeTab from "./tabs/ResumeTab";
import PortfolioTab from "./tabs/PortfolioTab";
import ContactTab from "./tabs/ContactTab";

const tabs = ["About", "Resume", "Portfolio", "Contact"];

const ContentTabs = () => {
  const [active, setActive] = useState("About");
  const today = new Date().toISOString().slice(0, 10);

  const pageTitles: Record<string, string> = {
    About: "Shafan Tufail | Full Stack Developer & Laravel Expert Pakistan",
    Resume: "Resume - Shafan Tufail | PHP Laravel Developer CV Pakistan",
    Portfolio: "Portfolio - Shafan Tufail | Live Projects | Management Systems & POS",
    Contact: "Contact Shafan Tufail | Hire Full Stack Developer Pakistan",
  };

  useEffect(() => {
    document.title = pageTitles[active];
  }, [active]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex-1 bg-card border border-border rounded-2xl overflow-hidden"
    >
      {/* Tab Nav */}
      <nav className="flex items-center justify-end gap-1 p-3 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors relative ${
              active === tab
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
            {active === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary rounded-full"
              />
            )}
          </button>
        ))}
        <a
          href="/resume.pdf"
          download={`Shafan_Tufail_CV_${today}.pdf`}
          className="ml-2 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors"
        >
          <Download size={13} />
          Download Resume
        </a>
      </nav>

      {/* Tab Content */}
      <div className="p-6 lg:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {active === "About" && <AboutTab />}
            {active === "Resume" && <ResumeTab />}
            {active === "Portfolio" && <PortfolioTab />}
            {active === "Contact" && <ContactTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ContentTabs;
