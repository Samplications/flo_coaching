import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      nameKey: "services.plans.starter.name",
      subtitleKey: "services.plans.starter.subtitle",
      price: "99",
      featuresKey: "services.plans.starter.features",
      popular: false,
    },
    {
      nameKey: "services.plans.transform.name",
      subtitleKey: "services.plans.transform.subtitle",
      price: "199",
      featuresKey: "services.plans.transform.features",
      popular: true,
    },
    {
      nameKey: "services.plans.elite.name",
      subtitleKey: "services.plans.elite.subtitle",
      price: "349",
      featuresKey: "services.plans.elite.features",
      popular: false,
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            {t("services.tagline")}
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
            {t("services.headline1")}
            <br />
            <span className="text-gradient">{t("services.headline2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const features = t(service.featuresKey, { returnObjects: true }) as string[];
            
            return (
              <div
                key={service.nameKey}
                className={`relative p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 ${
                  service.popular
                    ? "bg-primary/5 border-primary shadow-glow"
                    : "bg-card border-border/50 hover:border-primary/30"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                      {t("services.mostPopular")}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-display text-3xl mb-1">{t(service.nameKey)}</h3>
                  <p className="text-muted-foreground text-sm">{t(service.subtitleKey)}</p>
                </div>

                <div className="mb-8">
                  <span className="font-display text-5xl">€{service.price}</span>
                  <span className="text-muted-foreground">{t("services.perMonth")}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={service.popular ? "hero" : "heroOutline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="#contact">
                    {t("services.getStarted")}
                    <ArrowRight className="ml-2" size={18} />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;