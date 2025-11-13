interface Service {
  title: string;
  image?: string;
}

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  services: Service[];
  bgColor?: string;
}

const ServiceSection = ({ id, title, description, services, bgColor = "bg-background" }: ServiceSectionProps) => {
  return (
    <section id={id} className={`py-20 px-4 ${bgColor}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gradient-card rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-smooth">
                {/* Image Placeholder */}
                {service.image ? (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={`${service.title} - Upload your custom image here`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                  </div>
                ) : (
                  <div className="h-56 bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-smooth">
                    <div className="text-center p-6">
                      <p className="text-sm text-muted-foreground font-medium">
                        📸 Upload Image {index + 1}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Click to add your photo
                      </p>
                    </div>
                  </div>
                )}

                {/* Service Title */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-center group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
