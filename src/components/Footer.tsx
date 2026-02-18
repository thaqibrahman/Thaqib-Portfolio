import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/thaqibrahman",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/thaqibrahman",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:thaqibrahman@gmail.com",
    label: "Email",
  },
  {
    icon: Phone,
    href: "tel:+919390084918",
    label: "Phone",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="social-icon"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>



          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground"
          >
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Mohammed Thaqib Ul Rahman. Made with{" "}
            <Heart className="w-4 h-4 text-destructive fill-destructive" /> and lots of{" "}
            <span className="text-primary">{"<code/>"}</span>
          </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
