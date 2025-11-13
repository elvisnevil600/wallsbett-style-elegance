import { Scissors, Users, Sparkles, ShoppingBag, Shirt, Baby } from "lucide-react";
import salonImg from "@/assets/salon-placeholder.jpg";
import kinyoziImg from "@/assets/kinyozi-placeholder.jpg";
import nailsImg from "@/assets/nails-placeholder.jpg";
import boutiqueImg from "@/assets/boutique-placeholder.jpg";
import clothesImg from "@/assets/clothes-placeholder.jpg";
import babyshopImg from "@/assets/babyshop-placeholder.jpg";

const categories = [
  {
    id: "salon",
    title: "Salon",
    icon: Scissors,
    image: salonImg,
    description: "Professional hair care and styling",
  },
  {
    id: "kinyozi",
    title: "Kinyozi",
    icon: Users,
    image: kinyoziImg,
    description: "Expert men's grooming services",
  },
  {
    id: "nails",
    title: "Pedicure & Manicure",
    icon: Sparkles,
    image: nailsImg,
    description: "Pamper your hands and feet",
  },
  {
    id: "boutique",
    title: "Boutique",
    icon: ShoppingBag,
    image: boutiqueImg,
    description: "African elegance meets fashion",
  },
  {
    id: "clothes",
    title: "Clothes",
    icon: Shirt,
    image: clothesImg,
    description: "Trendy wear for all occasions",
  },
  {
    id: "babyshop",
    title: "Baby Shop",
    icon: Baby,
    image: babyshopImg,
    description: "Everything for your little one",
  },
];

const ServiceCategories = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 px-4 bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of professional beauty and fashion services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-card hover:shadow-hover transition-smooth bg-card">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={`${category.title} service at Wallsbett Parlour - Upload your own image`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    
                    {/* Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-card/90 rounded-full flex items-center justify-center shadow-soft">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
