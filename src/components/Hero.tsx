import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Wallsbett Parlour elegant salon interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose/30 via-transparent to-gold/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground drop-shadow-lg">
            Welcome to Wallsbett Parlour
          </h1>
          <p className="text-4xl md:text-5xl font-serif mb-4 text-rose-dark">
            Where Style Meets Comfort 💖
          </p>
          <p className="text-xl md:text-2xl mb-10 text-foreground/90 max-w-2xl mx-auto">
            A one-stop beauty and fashion destination for the whole family.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToServices}
            className="animate-scale-in"
          >
            Explore Our Services
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
