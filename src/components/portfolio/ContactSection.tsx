import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:rayen.guesmi@esprit.tn" className="text-lg">rayen.guesmi@esprit.tn</a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <a href="tel:+21629046070" className="text-lg">+216 29 046 070</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
