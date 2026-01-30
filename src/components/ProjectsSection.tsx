import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    title: "AI Virtual Mouse",
    role: "Solo Developer",
    description:
      "Hand gesture recognition system using computer vision that enables touchless computer control. Published research in IRJAEH journal.",
    tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    github: "https://github.com/thaqibrahman",
    image: "cv",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Medicine Recommendation System",
    role: "ML Developer",
    description:
      "Intelligent system that recommends medicines based on symptoms using machine learning algorithms and Flask backend.",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas"],
    github: "https://github.com/thaqibrahman",
    image: "ml",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Retronex Cyberdeck",
    role: "Hardware & Security Developer",
    description:
      "Custom-built portable hacking station using Raspberry Pi for security testing and penetration testing workflows.",
    tech: ["Raspberry Pi", "Linux", "Python", "Networking"],
    github: "https://github.com/thaqibrahman",
    image: "security",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "E-Commerce Web Application Using MERN Stack",
    role: "Full Stack Developer",
    description:
      "Full-featured e-commerce platform with user authentication, product management, cart functionality and payment integration using modern web technologies.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/thaqibrahman",
    image: "web",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(10px)`
          : "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)",
        transition: "transform 0.3s ease-out",
      }}
      className="glass-card overflow-hidden group"
    >
      {/* Project Image/Gradient Background */}
      <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
            {project.image === "cv" && (
              <Eye className="w-12 h-12 text-primary" />
            )}
            {project.image === "ml" && (
              <svg className="w-12 h-12 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            )}
            {project.image === "security" && (
              <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            )}
            {project.image === "web" && (
              <svg className="w-12 h-12 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            )}
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            <Github size={20} />
            View on GitHub
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>
        <p className="text-sm text-primary font-medium mb-3">{project.role}</p>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge text-xs">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Building solutions that make a difference</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
