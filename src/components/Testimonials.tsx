import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Grace Mwangi",
    text: "Wallsbett Parlour transformed my look! The braiding service is exceptional and the staff is so welcoming. I always leave feeling beautiful.",
    rating: 5,
  },
  {
    name: "David Ochieng",
    text: "Best kinyozi in Nairobi! Clean, professional, and the barbers really know their craft. I won't go anywhere else.",
    rating: 5,
  },
  {
    name: "Faith Njeri",
    text: "The boutique has the most beautiful African fashion pieces. I got my wedding outfit here and received so many compliments!",
    rating: 5,
  },
  {
    name: "Sarah Kamau",
    text: "Love the baby shop! Everything my little one needs in one place, and the quality is amazing. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from those who trust us with their beauty and style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="gradient-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Client Image Placeholder */}
              <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">📸 Client</p>
                  <p className="text-xs text-muted-foreground">Image {index + 1}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground text-center mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Client Name */}
              <p className="text-center font-semibold text-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
