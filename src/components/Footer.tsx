import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@portfolio.dev", label: "Email" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-16 px-6 bg-surface border-t border-glass-border">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary animate-glow" />
              <span className="text-2xl font-bold text-gradient">Portfolio</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Passionate developer creating innovative digital solutions. 
              Let's collaborate to bring your next project to life with modern technologies and creative design.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group"
                    aria-label={social.label}
                  >
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:hello@portfolio.dev"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  hello@portfolio.dev
                </a>
              </div>
              <p className="text-muted-foreground text-sm">
                Available for freelance work and full-time opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-gradient">Stay Updated</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Subscribe to get notified about new projects, articles, and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-surface-glass border border-glass-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
            />
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-glass-border">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4 md:mb-0">
            <span>© {currentYear} Portfolio. Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>using React & Three.js</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </Button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;