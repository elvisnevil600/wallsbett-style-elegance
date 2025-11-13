const Gallery = () => {
  const galleryItems = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our beautiful moments captured in one place
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="gradient-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-smooth aspect-square">
                <div className="w-full h-full bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-smooth cursor-pointer">
                  <div className="text-center p-4">
                    <p className="text-sm text-muted-foreground font-medium">
                      📸 Gallery Image {item}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Upload here
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

export default Gallery;
