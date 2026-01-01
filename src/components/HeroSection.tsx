import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-6 pt-24 pb-12">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {t("hero.tagline")}
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {t("hero.headline1")}
            <br />
            <span className="text-gradient">{t("hero.headline2")}</span>
            <br />
            {t("hero.headline3")}
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <Trans i18nKey="hero.slogan" components={{ 1: <span className="text-primary font-semibold" /> }} />
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-xl mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                {t("hero.cta")}
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#about">
                <Play className="mr-2" size={18} />
                {t("hero.learnMore")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;