interface ProductGridProps {
  id: string;
  title: string;
  description: string;
  itemCount?: number;
  bgColor?: string;
}

const ProductGrid = ({ id, title, description, itemCount = 6, bgColor = "bg-accent" }: ProductGridProps) => {
  const items = Array.from({ length: itemCount }, (_, i) => i + 1);

  return (
    <section id={id} className={`py-20 px-4 ${bgColor}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={item}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth aspect-square">
                <div className="w-full h-full bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-smooth">
                  <div className="text-center p-4">
                    <p className="text-sm text-muted-foreground font-medium">
                      📸 Upload {title} Image {item}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Click to add your photo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
