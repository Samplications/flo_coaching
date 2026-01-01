import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const reviews = t("testimonials.reviews", { returnObjects: true }) as Array<{
    name: string;
    role: string;
    content: string;
  }>;

  const stats = [
    { value: "500+", labelKey: "testimonials.stats.clients" },
    { value: "98%", labelKey: "testimonials.stats.success" },
    { value: "5+", labelKey: "testimonials.stats.experience" },
    { value: "4.9", labelKey: "testimonials.stats.rating" },
  ];

  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            {t("testimonials.tagline")}
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
            {t("testimonials.headline1")}
            <br />
            <span className="text-gradient">{t("testimonials.headline2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("testimonials.description")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2">
                <Quote className="w-12 h-12 text-primary/20" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-display text-xl">{testimonial.name}</p>
                <p className="text-primary text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.labelKey}>
              <p className="font-display text-4xl md:text-5xl text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;