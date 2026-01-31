import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Award, ExternalLink, CheckCircle } from "lucide-react";

const publications = [
  {
    title: "AI Virtual Mouse Using Hand Gesture Recognition",
    journal: "International Research Journal on Advanced Engineering Hub (IRJAEH)",
    date: "May 2025",
    link: "https://irjaeh.com/index.php/journal/article/view/833",
    description: "Research paper exploring computer vision techniques for touchless human-computer interaction using hand gesture recognition.",
  },
];

const certifications = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    icon: "☁️",
    link: "https://drive.google.com/file/d/1w2xGH97TEjIhuiZVSqqxMHoQlzrsOmUr/view?usp=drivesdk",
  },
  {
    title: "AWS Academy Data Engineering",
    issuer: "Amazon Web Services",
    icon: "📊",
    link: "https://drive.google.com/file/d/1w519tTFcdEIQSHmc9wLQWw93F7bmG6US/view?usp=drivesdk",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    icon: "📈",
    link: "https://drive.google.com/file/d/1fx0UL4eCYzKkHiuV1G1MZ5A8i_us--UE/view?usp=drivesdk",
  },
  {
    title: "Developer Job Simulation",
    issuer: "Accenture",
    icon: "💼",
    link: "https://drive.google.com/file/d/13zxbEPAaGWa0Zzl0C1B3EDXR_vHDRYPI/view?usp=drivesdk",
  },
  {
    title: "Java Foundations",
    issuer: "Oracle",
    icon: "☕",
    link: "https://drive.google.com/file/d/16YAeGwHrcEkWD16qSNbYluPrs31SuPAJ/view?usp=drivesdk",
  },
  {
    title: "Code to Cloud : AI Edition",
    issuer: "Google Developer Groups",
    icon: "🌐",
    link: "https://drive.google.com/file/d/1jWELQaX7mL0leFqwA4iBWCuSXUcAYkJP/view?usp=drivesdk",
  },
  {
    title: "Introduction to Natural Language Processing",
    issuer: "Great Learning Academy",
    icon: "💡",
    link: "https://drive.google.com/file/d/143gdqkZYZwCiN07znO58-bRyoLMakP47/view?usp=drivesdk",
  },
  {
    title: "AI-ML Virtual Internship",
    issuer: "All India Council for Technical Education (AICTE)",
    icon: "📚",
    link: "https://drive.google.com/file/d/14i0q1vp-HrTPesm0vp-wC2ePoAHjUxuZ/view?usp=drivesdk",
  },
  {
    title: "Process Mining Virtual Internship",
    issuer: "All India Council for Technical Education (AICTE)",
    icon: "⚙️",
    link: "https://drive.google.com/file/d/14kd-rz6wK8qVo9847jac7-8heKELLJEp/view?usp=drivesdk",
  },
  {
    title: "International Conference on Advancement in Science, Engineering & Management (ICSEM)",
    issuer: "Global Conference Hub x Vidya Vihar Institute of Technology",
    icon: "🌍",
    link: "https://drive.google.com/file/d/1LQUV2SS2LQ1j99qM4itn_64k_AuUvshb/view?usp=drivesdk",
  },
  {
    title: "MERN Internship",
    issuer: "EY x Edunet Foundation",
    icon: "🖥️",
    link: "https://drive.google.com/file/d/1nuQG9G0u0axN9hXfXIoGQjqbTHERr2dr/view?usp=drivesdk",
  },
  {
    title: "Summer of AI Internship Program",
    issuer: "IIIT-H x Swecha",
    icon: "💻",
    link: "https://drive.google.com/file/d/13zrENCvhkzHE-VAczNgFEfFpmDDNy42D/view?usp=drivesdk",
  },
  {
    title: "AI Advanced Bootcamp",
    issuer: "IIIT-H x Swecha",
    icon: "🎓",
    link: "https://drive.google.com/file/d/1uElTrKsFpGtF0euDVjarLG6NxzzViT3g/view?usp=drivesdk",
  },
  {
    title: "Robotics Workshop",
    issuer: "Sphoorthy Engineering College",
    icon: "🤖",
    link: "https://drive.google.com/file/d/1tWGm3CkLU-3gb7luoueXKPNXWcQM1saJ/view?usp=drivesdk",
  },
];

const PublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Publications & Certifications</h2>
          <p className="section-subtitle">Research work and professional credentials</p>
        </motion.div>

        <div className="space-y-12">
          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Publications</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4 max-w-3xl mx-auto">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 card-3d text-center"
                >
                  <h4 className="text-lg font-bold text-foreground mb-2">{pub.title}</h4>
                  <p className="text-sm text-primary font-medium mb-2">{pub.journal}</p>
                  <p className="text-sm text-muted-foreground mb-4">{pub.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{pub.date}</span>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      View Publication
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 flex items-center gap-4 card-3d group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm truncate">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <a
                   href={cert.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="relative z-20 text-primary hover:text-primary/80 transition-colors cursor-pointer"
                  >
                   <ExternalLink className="w-5 h-5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
