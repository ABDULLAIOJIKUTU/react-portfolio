import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory management, payment processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI-Powered Chat Application",
      description: "Real-time messaging app with AI-powered features including smart replies, sentiment analysis, and automatic translation using OpenAI GPT-4.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
      tags: ["Next.js", "OpenAI", "WebSocket", "MongoDB", "TailwindCSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Fitness Tracking Dashboard",
      description: "Mobile-first fitness application with workout tracking, nutrition logging, and progress visualization. Includes social features and gamification.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Chart.js", "Expo"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management platform with Kanban boards, time tracking, and team communication features. Built for modern remote teams.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Express", "Socket.io", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on Ethereum blockchain. Features include voter verification, real-time results, and immutable vote records.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      tags: ["Solidity", "Web3.js", "React", "Metamask"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Analytics Platform",
      description: "Advanced weather forecasting platform with machine learning predictions, interactive maps, and climate data visualization for agricultural planning.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tags: ["Python", "TensorFlow", "D3.js", "Flask", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across various technologies and domains
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass border-glass-border overflow-hidden group hover:shadow-glow transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="glass" className="w-10 h-10 p-0">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="glass" className="w-10 h-10 p-0">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-sm bg-surface-glass rounded-lg text-foreground/80 border border-glass-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="glass-intense">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gradient">More Projects</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="glass border-glass-border group hover:shadow-glow transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="glass" className="w-8 h-8 p-0">
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="glass" className="w-8 h-8 p-0">
                      <Github className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs bg-surface-glass rounded text-foreground/70 border border-glass-border"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="glass-intense border-gradient hover:shadow-glow transition-all duration-500 px-8 py-3"
          >
            <span className="text-gradient mr-2">View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
