import { useTranslation } from "react-i18next";
import InstagramEmbed from "./InstagramEmbed";

const InstaSection = () => {
    const { t } = useTranslation();


  return (
    <section id="instagram" className="section-padding">
        <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            {t("instagram.tagline")}
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6">
            {t("instagram.headline1")}
            <br />
            <span className="text-gradient">{t("instagram.headline2")}</span>
          </h2>
        </div>

        <InstagramEmbed postUrl={"https://www.instagram.com/florewienen/"} />
        </div>
      
    </section>
  )
}

export default InstaSection
