import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import Hero3D from './Hero3D';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Hero3D />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-foreground/90">Creative</span>
            <span className="block text-gradient">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that blend creativity with cutting-edge technology. 
            Transforming ideas into beautiful, functional realities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group relative bg-gradient-primary border-0 hover:shadow-glow transition-all duration-500 px-8 py-6 text-lg font-semibold"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-intense border-gradient hover:shadow-accent transition-all duration-500 px-8 py-6 text-lg font-semibold"
            >
              <span className="text-gradient">Download CV</span>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default HeroSection;