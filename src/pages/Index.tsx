import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import ServiceSection from "@/components/ServiceSection";
import ProductGrid from "@/components/ProductGrid";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const salonServices = [
    { title: "Hair Styling & Braiding" },
    { title: "Relaxing & Retouch" },
    { title: "Dreadlocks Maintenance" },
    { title: "Bridal Hair Design" },
  ];

  const kinyoziServices = [
    { title: "Classic Haircuts" },
    { title: "Beard Trimming" },
    { title: "Line Ups" },
    { title: "Kids' Cuts" },
  ];

  const nailServices = [
    { title: "Classic Manicure" },
    { title: "Gel Polish" },
    { title: "Pedicure Spa" },
    { title: "Nail Art" },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <ServiceCategories />
      
      {/* Salon Section */}
      <ServiceSection
        id="salon"
        title="Salon Services"
        description="Experience expert care, hair styling, and treatments made just for you."
        services={salonServices}
        bgColor="bg-background"
      />

      {/* Kinyozi Section */}
      <ServiceSection
        id="kinyozi"
        title="Men's Grooming & Kinyozi"
        description="Sharp cuts, clean fades, and confident looks for every gentleman."
        services={kinyoziServices}
        bgColor="bg-accent"
      />

      {/* Pedicure & Manicure Section */}
      <ServiceSection
        id="nails"
        title="Pedicure & Manicure"
        description="Pamper your hands and feet with relaxing, elegant nail care."
        services={nailServices}
        bgColor="bg-background"
      />

      {/* Boutique Section */}
      <ProductGrid
        id="boutique"
        title="Wallsbett Boutique"
        description="Where elegance meets African fashion — dresses, shoes, and accessories."
        itemCount={6}
        bgColor="bg-accent"
      />

      {/* Clothes Section */}
      <ProductGrid
        id="clothes"
        title="Clothes Collection"
        description="Trendy wear for all occasions — made to fit your lifestyle."
        itemCount={6}
        bgColor="bg-background"
      />

      {/* Baby Shop Section */}
      <ProductGrid
        id="babyshop"
        title="Wallsbett Baby Shop"
        description="Everything your little one deserves — from clothes to toys."
        itemCount={6}
        bgColor="bg-accent"
      />

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
