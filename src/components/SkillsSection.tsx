import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "SASS"],
      color: "text-blue-400"
    },
    {
      title: "Backend Development", 
      icon: Server,
      skills: ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs"],
      color: "text-green-400"
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes"],
      color: "text-purple-400"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Firebase"],
      color: "text-orange-400"
    },
    {
      title: "Design & Tools",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch", "Principle"],
      color: "text-pink-400"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust"],
      color: "text-cyan-400"
    }
  ];

  const languages = [
    { name: "English", level: "Native", percentage: 100 },
    { name: "Spanish", level: "Fluent", percentage: 90 },
    { name: "French", level: "Intermediate", percentage: 70 },
    { name: "German", level: "Beginner", percentage: 40 }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-primary mr-4 group-hover:animate-glow">
                    <IconComponent className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm bg-surface-glass rounded-lg text-foreground/80 border border-glass-border hover:border-primary/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages Section */}
        <div className="glass rounded-2xl p-8 animate-slide-up">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">Languages</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((language, index) => (
              <div key={language.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-foreground">{language.name}</span>
                  <span className="text-sm text-muted-foreground">{language.level}</span>
                </div>
                <div className="w-full bg-surface-glass rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${language.percentage}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;