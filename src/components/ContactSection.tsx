import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, AtSign } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import InstagramEmbed from "./InstagramEmbed";

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("contact.form.success"));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-4">
              {t("contact.tagline")}
            </p>
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              {t("contact.headline1")}
              <br />
              <span className="text-gradient">{t("contact.headline2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              {t("contact.description")}
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.email")}</p>
                  <p className="text-foreground">letsgo@flocoaching.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.phone")}</p>
                  <p className="text-foreground">+32 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <AtSign className="w-5 h-5 text-primary"/>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.insta")}</p>
                  <p className="text-foreground">@florewienen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card p-8 md:p-10 rounded-2xl border border-border/50">
            <h3 className="font-display text-2xl mb-6">{t("contact.form.title")}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  {t("contact.form.name")}
                </label>
                <Input
                  id="name"
                  placeholder={t("contact.form.namePlaceholder")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  {t("contact.form.emailLabel")}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  {t("contact.form.message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={t("contact.form.messagePlaceholder")}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>
              <Button variant="hero" size="xl" type="submit" className="w-full">
                {t("contact.form.submit")}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;