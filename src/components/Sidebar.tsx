import { Mail, MapPin, Linkedin, Github, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card border border-border rounded-2xl p-6 lg:p-8 w-full lg:w-[300px] xl:w-[340px] lg:sticky lg:top-8 self-start"
    >
      {/* Avatar */}
      <div className="flex justify-center mb-5">
        <div className="w-28 h-28 rounded-2xl bg-muted flex items-center justify-center text-4xl font-bold text-primary overflow-hidden">
          ST
        </div>
      </div>

      {/* Name */}
      <h1 className="text-xl font-semibold text-center mb-1">Shafan Tufail</h1>
      <div className="flex justify-center mb-5">
        <span className="text-xs bg-muted text-muted-foreground px-4 py-1.5 rounded-lg font-medium">
          Software Developer
        </span>
      </div>

      <div className="vcard-separator" />

      {/* Contact Info */}
      <div className="space-y-5 mt-5">
        <a href="mailto:shafanmian486@gmail.com" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
            <Mail className="text-primary" size={16} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Email</p>
            <p className="text-xs font-medium truncate">shafanmian486@gmail.com</p>
          </div>
        </a>

        <a href="tel:+923080399194" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
            <Phone className="text-primary" size={16} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Phone</p>
            <p className="text-xs font-medium truncate">+92 308-0399-194</p>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
            <Calendar className="text-primary" size={16} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Experience</p>
            <p className="text-xs font-medium">2+ Years</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
            <MapPin className="text-primary" size={16} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Location</p>
            <p className="text-xs font-medium">Pakistan</p>
          </div>
        </div>
      </div>

      <div className="vcard-separator" />

      {/* Social Links */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <a
          href="https://www.linkedin.com/in/shafan-tufail-0135a3265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
        >
          <Linkedin size={16} />
        </a>
        <a
          href="https://github.com/shafantufail"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
        >
          <Github size={16} />
        </a>
        <a
          href="mailto:shafanmian486@gmail.com"
          className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
        >
          <Mail size={16} />
        </a>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
