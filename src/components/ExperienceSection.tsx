import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "AI/ML Intern",
    company: "People Tech Group",
    location: "Hyderabad, India",
    duration: "Jan 2026 - Present",
    description: [
      "Working on AI/ML solutions for enterprise applications",
      "Developing and deploying machine learning models for real-world use cases",
      "Collaborating with cross-functional teams on AI-driven projects",
    ],
    type: "Current",
  },
  {
    role: "AI Developer Intern",
    company: "Viswam.AI (IIIT Hyderabad)",
    location: "Hyderabad, India",
    duration: "2025",
    description: [
      "Worked on AI solution development for industry-specific problems",
      "Gained hands-on experience with TensorFlow and PyTorch",
      "Participated in code reviews and agile development practices",
    ],
    type: "Internship",
  },
  {
    role: "AI Developer Intern",
    company: "Swecha (IIIT Hyderabad)",
    location: "Hyderabad, India",
    duration: "May - June 2024",
    description: [
      "Developed AI-powered applications using Python and deep learning frameworks",
      "Collaborated with senior engineers on computer vision and NLP projects",
      "Contributed to open-source AI initiatives and research prototypes",
    ],
    type: "Internship",
  },
  {
    role: "Machine Learning Intern",
    company: "Bharat Intern",
    location: "Remote",
    duration: "Nov - Dec 2023",
    description: [
      "Built and trained machine learning models for real-world classification tasks",
      "Implemented data preprocessing pipelines using Pandas and NumPy",
      "Deployed ML models using Flask for API-based predictions",
    ],
    type: "Internship",
  },
];

const ExperienceCard = ({ experience, index, isEven }: { experience: typeof experiences[0]; index: number; isEven: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Timeline dot - Mobile */}
      <div className="flex md:hidden items-start gap-4">
        <div className="flex flex-col items-center">
          <div className="timeline-dot" />
          <div className="w-px flex-1 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
        <div className="flex-1">
          <ExperienceContent experience={experience} />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-1 justify-end">
        {!isEven && <ExperienceContent experience={experience} />}
      </div>

      {/* Timeline dot - Desktop */}
      <div className="hidden md:flex flex-col items-center">
        <div className="timeline-dot" />
      </div>

      <div className="hidden md:flex flex-1">
        {isEven && <ExperienceContent experience={experience} />}
      </div>
    </motion.div>
  );
};

const ExperienceContent = ({ experience }: { experience: typeof experiences[0] }) => (
  <div className="glass-card p-6 max-w-lg w-full card-3d">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-foreground">{experience.role}</h3>
        <p className="text-primary font-medium">{experience.company}</p>
      </div>
      <span className="tech-badge text-xs">{experience.type}</span>
    </div>

    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
      <span className="flex items-center gap-1">
        <MapPin size={14} />
        {experience.location}
      </span>
      <span className="flex items-center gap-1">
        <Calendar size={14} />
        {experience.duration}
      </span>
    </div>

    <ul className="space-y-2">
      {experience.description.map((item, i) => (
        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - Desktop */}
          <div className="hidden md:block timeline-line" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={`${exp.company}-${exp.role}`}
                experience={exp}
                index={index}
                isEven={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
