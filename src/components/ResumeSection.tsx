import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, Eye, GraduationCap, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Tech CSE (AI & ML)",
    subtitle: "Sphoorthy Engineering College, 2021-2025",
  },
  {
    icon: Briefcase,
    title: "Internships",
    value: "3+ Internships",
    subtitle: "AI/ML Development Experience",
  },
];

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">My professional summary at a glance</p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="glass-card p-6 text-center card-3d w-full sm:min-w-[360px] md:min-w-[420px]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{item.value}</h3>
              <p className="text-sm text-primary font-medium mb-1">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 border-gradient">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <FileText className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Mohammed Thaqib Ul Rahman
                </h3>
                <p className="text-muted-foreground mb-4">
                  AI/ML Engineer & Full Stack Enthusiast
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <motion.a
                    href="/MyResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Eye size={18} />
                    View Resume
                  </motion.a>
                  
                  <motion.a
                    href="/MyResume.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 border border-primary/50 hover:border-primary text-foreground rounded-xl font-semibold transition-colors"
                  >
                    <Download size={18} />
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
