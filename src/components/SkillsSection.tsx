import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Brain, 
  Layers, 
  Monitor, 
  Database, 
  Wrench,
  Users
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "C", "Java", "R", "JavaScript"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI / ML & Data Science",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["Flask", "React", "Node.js", "Express", "OpenCV", "MediaPipe"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Frontend Technologies",
    icon: Monitor,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "AWS", "Google Colab", "VS Code", "Linux", "Docker", "Cursor"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Leadership", "Team Collaboration", "Communication", "Emotional Intelligence", "Empathy", "Critical Thinking", "Adaptability"],
    color: "from-teal-500 to-cyan-500",
  },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 card-3d group"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-[1px] mb-5`}>
        <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
          <category.icon className="w-7 h-7 text-primary" />
        </div>
      </div>

      <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 + i * 0.03 }}
            viewport={{ once: true }}
            className="tech-badge text-xs"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
