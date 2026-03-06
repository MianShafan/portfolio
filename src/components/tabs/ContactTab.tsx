import { useState } from "react";
import { Send, Mail, MapPin, Linkedin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ContactTab = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact: Message from ${form.name}`;
    const body = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}

---
This message was sent from your portfolio contact form.
    `.trim();
    
    const mailtoLink = `mailto:shafanmian486@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client in same window
    window.location.href = mailtoLink;
    
    // Show success message
    toast({ 
      title: "Email Opening!", 
      description: "Your email client will open with the message ready to send." 
    });
    
    // Reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
    <div>
      <h2 className="text-2xl font-semibold mb-1">Contact</h2>
      <div className="golden-line mb-8" />

      {/* Map placeholder */}
      <div className="w-full h-48 rounded-2xl bg-muted mb-8 flex items-center justify-center overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618000!2d67.0!3d30.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzAwLjAiTiA2N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "1rem", filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen
          loading="lazy"
          title="Location"
        />
      </div>

      {/* Contact Info Row */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <a href="mailto:shafanmian486@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-muted hover:bg-primary/5 transition-colors">
          <Mail className="text-primary shrink-0" size={16} />
          <div className="min-w-0">
            <p className="text-[10px] text-muted-foreground uppercase">Email</p>
            <p className="text-xs font-medium truncate">shafanmian486@gmail.com</p>
          </div>
        </a>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-muted">
          <MapPin className="text-primary shrink-0" size={16} />
          <div>
            <p className="text-[10px] text-muted-foreground uppercase">Location</p>
            <p className="text-xs font-medium">Pakistan</p>
          </div>
        </div>
        <a href="tel:+923080399194" className="flex items-center gap-3 p-3 rounded-xl bg-muted hover:bg-primary/5 transition-colors">
          <Phone className="text-primary shrink-0" size={16} />
          <div>
            <p className="text-[10px] text-muted-foreground uppercase">Phone</p>
            <p className="text-xs font-medium">+92 308-0399-194</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/shafan-tufail-0135a3265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-muted hover:bg-primary/5 transition-colors">
          <Linkedin className="text-primary shrink-0" size={16} />
          <div>
            <p className="text-[10px] text-muted-foreground uppercase">LinkedIn</p>
            <p className="text-xs font-medium">Shafan Tufail</p>
          </div>
        </a>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-muted border-border rounded-xl text-sm"
            required
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-muted border-border rounded-xl text-sm"
            required
          />
        </div>
        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          required
          className="flex w-full rounded-xl border border-border bg-muted px-3 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
        />
        <Button type="submit" className="rounded-xl font-medium gap-2 px-8">
          <Send size={14} /> Send Message
        </Button>
      </form>

      {/* SEO Hidden Content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Contact Shafan Tufail - Hire Full Stack Developer Pakistan</h2>
        <p>Contact Shafan Tufail - Full Stack Developer & Laravel Expert from Khurrianwala, Pakistan. 
        Email: shafanmian486@gmail.com | Phone: +92-308-0399-194 | 
        LinkedIn: linkedin.com/in/shafan-tufail-0135a3265. 
        Hire Shafan Tufail for web development, Laravel projects, PHP development, 
        custom management systems, POS software, school/college ERP, property management, 
        inventory systems, billing software, HR tools and all kinds of custom business software in Pakistan. 
        Available for freelance projects, remote work and on-site opportunities in Faisalabad, Khurrianwala and across Pakistan. 
        Shafan Tufail - trusted, professional, fast delivery, affordable web developer Pakistan.</p>
      </div>
    </div>
    </>
  );
};

export default ContactTab;
