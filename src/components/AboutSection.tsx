import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Lightbulb, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI/ML Focus",
    description: "Specialized in machine learning, deep learning, and computer vision applications",
  },
  {
    icon: Code,
    title: "Full Stack",
    description: "Building end-to-end solutions from React frontends to Python backends",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant, scalable solutions",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Constantly exploring new technologies and pushing boundaries",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Crafting the future with code and AI</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Mohammed Thaqib Ul Rahman</span>, 
              a passionate AI/ML Engineer and Full-Stack Enthusiast, and a B.Tech graduate in <span className="text-primary">Computer Science and Engineering (AI & ML specialization)</span> from Sphoorthy Engineering College.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech is driven by a deep curiosity for how machines can learn and adapt. 
              From building intelligent systems using <span className="text-primary">Computer Vision</span> and 
              <span className="text-primary"> Natural Language Processing</span> to crafting scalable web applications, 
              I love bridging the gap between cutting-edge research and practical solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not training models or debugging code, you'll find me exploring new frameworks, 
              contributing to open-source projects, and continuously expanding my technical horizons.
            </p>

            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                {["Python", "TensorFlow", "React", "Node.js", "OpenCV"].map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 card-3d group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
