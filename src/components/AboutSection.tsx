import { Target, Heart, Zap, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      titleKey: "about.values.identityFirst.title",
      descriptionKey: "about.values.identityFirst.description",
    },
    {
      icon: Heart,
      titleKey: "about.values.holistic.title",
      descriptionKey: "about.values.holistic.description",
    },
    {
      icon: Zap,
      titleKey: "about.values.proven.title",
      descriptionKey: "about.values.proven.description",
    },
    {
      icon: Users,
      titleKey: "about.values.personal.title",
      descriptionKey: "about.values.personal.description",
    },
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            {t("about.tagline")}
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
            {t("about.headline1")}
            <br />
            <span className="text-gradient">{t("about.headline2")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("about.description")}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.titleKey}
              className="group p-8 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-3">{t(value.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(value.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;