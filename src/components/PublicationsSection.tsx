import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Award, ExternalLink, CheckCircle } from "lucide-react";

const publications = [
  {
    title: "AI Virtual Mouse Using Hand Gesture Recognition",
    journal: "International Research Journal on Advanced Engineering Hub (IRJAEH)",
    date: "May 2025",
    doi: "https://irjaeh.com/index.php/journal/article/view/833",
    description: "Research paper exploring computer vision techniques for touchless human-computer interaction using hand gesture recognition.",
  },
];

const certifications = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    icon: "☁️",
  },
  {
    title: "AWS Academy Data Engineering",
    issuer: "Amazon Web Services",
    icon: "📊",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    icon: "🤖",
  },
  {
    title: "Developer Job Simulation",
    issuer: "Accenture",
    icon: "💼",
  },
  {
    title: "Java Foundations",
    issuer: "Oracle",
    icon: "☕",
  },
];

const PublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4" ref={ref}>
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
            <div className="flex items-center gap-3 mb-6">
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
                  className="glass-card p-6 card-3d"
                >
                  <h4 className="text-lg font-bold text-foreground mb-2">{pub.title}</h4>
                  <p className="text-sm text-primary font-medium mb-2">{pub.journal}</p>
                  <p className="text-sm text-muted-foreground mb-4">{pub.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{pub.date}</span>
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
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
            <div className="flex items-center gap-3 mb-6">
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
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
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
