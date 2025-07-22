'use client'

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Star, Sparkles, Stars } from "lucide-react";
import vikramDevatha from "@/app/Assets/Vikram Devatha.jpeg"
import Logo from "@/app/Assets/logo.png";
import { Suspense, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';


export default function Home() {
  const Hero = () => {
    const [firstName, setFirstName] = useState("")
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [intention, setIntention] = useState("");
    const [contribute, setContribute] = useState("");


    const searchParams = useSearchParams();
    const utmSource = searchParams.get('utm_source');
    const utmMedium = searchParams.get('utm_medium');
    const utmCampaign = searchParams.get('utm_campaign');
    const utmContent = searchParams.get('utm_content');
    const utmTerm = searchParams.get('utm_term');
    const formName = "Intermediate Vedic Astrology"


    const ghlApiKey = process.env.NEXT_PUBLIC_GHL_API_KEY;
    const locationId = process.env.NEXT_PUBLIC_LOCATION_ID;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!firstName || !phone || !email || !intention || !contribute) {
        alert("Please fill in all fields.");
        return;
      }

      const data = {
        firstName,
        phone,
        email,
        locationId,
        customField: [
          { id: "fiOzpg6xUl7yyzg4lElv", value: contribute },
          { id: "iKM5QdSljhjiK9KoZZjW", value: intention },
          { id: "UyiGeJrMqGO0PYYGnNYv", value: formName },
          { id: "CJhE66CUrGN8gJnvQBXz", value: utmCampaign },
          { id: "5Bh4fW9zm6lS9We56bnz", value: utmSource },
          { id: "qMytAIk17N8kjcQzzXUs", value: utmTerm },
          { id: "OyBLd3HqI5M7nl87cnNN", value: utmMedium },
          { id: "w7DjJU9HZ5ambtmcGAKi", value: utmContent },
        ]
      };

      try {
        const response = await axios.post(
          `https://rest.gohighlevel.com/v1/contacts/`,
          data,
          {
            headers: {
              'Authorization': `Bearer ${ghlApiKey}`,
              'Content-Type': 'application/json'
            }
          }
        );

        console.log('Form submitted successfully:', response);

        if (response.status === 200) {
          window.location.href = "/thankyou";
        }
        setFirstName("");
        setPhone("");
        setEmail("");
        setIntention("");
        setContribute("");
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };



    return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-lavender/30 via-background to-cosmic-mint/20"></div>

        <div className="absolute top-20 left-20 animate-pulse">
          <Star className="h-4 w-4 text-cosmic-gold" />
        </div>
        <div className="absolute top-40 right-32 animate-pulse delay-1000">
          <Sparkles className="h-6 w-6 text-cosmic-royal" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-pulse delay-500">
          <Star className="h-3 w-3 text-cosmic-sunset" />
        </div>

        <div className="container flex flex-col md:flex-row items-center justify-between gap-12 py-20">
          <div className="relative col z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="mb-8">
              <Image src={Logo} alt="All Things Vedic Logo" className="h-28 w-auto mx-auto mb-4" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cosmic-deep via-cosmic-royal to-cosmic-deep bg-clip-text mb-6 leading-tight">
                Awaken Your Soul's Journey
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-cosmic-deep mb-8">
                Through Vedic Astrology
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A 52-week online and retreat-based program to help you decode your karmic path,
                align with cosmic rhythms, and step into your highest purpose.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://wa.me/919843948288">
                <Button variant="cosmic" size="lg" className="group !text-[var(--foreground)] !border-[var(--foreground)] hover:bg-[var(--foreground)] hover:!text-[var(--background)]">
                  <span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg></span>
                  Ask About the Program
                  <Star className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                </Button>
              </a>
            </div>

          </div>
          <div className="col">
            <Card className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl border-0">
              <form className="relative flex flex-col gap-5 max-w-md mx-auto p-8 bg-transparent rounded-2xl"
                onSubmit={handleSubmit}>
                <label htmlFor="fullName" className="flex flex-col gap-3">
                  Full Name
                  <input
                    type="text"
                    id="fullName"
                    required
                    className="shadow-lg bg-white/30 backdrop-blur-md rounded px-4 py-2 border border-white/30 focus:outline-none"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>

                <label htmlFor="phoneNumber" className="flex flex-col gap-1">
                  Cell number (with country code)
                  <input
                    type="tel"
                    id="phoneNumber"
                    className="shadow-lg bg-white/30 backdrop-blur-md rounded px-4 py-2 border border-white/30 focus:outline-none"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    maxLength={13}
                  />
                </label>


                <label htmlFor="email" className="flex flex-col gap-1">
                  Email
                  <input
                    type="email"
                    id="email"
                    required
                    className="shadow-lg bg-white/30 backdrop-blur-md rounded px-4 py-2 border border-white/30 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                <label htmlFor="intention" className="flex flex-col gap-1">
                  Please share the deeper intention behind your decision to join this program. This will help me tailor the year to suit your needs
                  <textarea
                    rows={4}
                    required
                    id="intention"
                    className="shadow-lg bg-white/30 backdrop-blur-md rounded px-4 py-2 border border-white/30 focus:outline-none"
                    value={intention}
                    onChange={(e) => setIntention(e.target.value)}
                  ></textarea>
                </label>

                <label htmlFor="support" className="flex flex-col gap-1">
                  How much can you contribute?
                  <select
                    id="support"
                    name="support"
                    className="shadow-lg bg-white/30 backdrop-blur-md rounded px-4 py-2 border border-white/30 focus:outline-none"
                    value={contribute}
                    onChange={(e) => setContribute(e.target.value)}
                    style={{ whiteSpace: 'wrap', textOverflow: 'ellipsis' }}
                  >
                    <option value="" disabled>
                      Select your contribution
                    </option>
                    <option value="0">₹0 - I need full support at this time. I will contribute later.</option>
                    <option value="5000">₹1 to ₹5,000 - I am in between jobs / low income.</option>
                    <option value="20000">₹5,001 to ₹20,000 - I have moderate means.</option>
                    <option value="50000">₹20,001 to ₹50,000 - I am comfortable and wish to pay the sustaining fee.</option>
                    <option value="100000">₹50,001 to ₹1,00,000+ - I am able to support this work and others who need help.</option>
                  </select>
                </label>
                <button
                  type="submit"
                  className="mt-5 bg-white/70  text-cosmic-deep hover:bg-cosmic-sunset text-lg px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cosmic-gold/50 focus:ring-offset-2"
                >Join the Journey</button>
              </form>
            </Card>
          </div>

        </div>
      </section >
    );
  };

  // Intro Section Component
  const IntroSection = () => {
    return (
      <section className="py-10 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center ">
            <h2 className="text-4xl md:text-5xl font-bold text-cosmic-deep mb-8">
              Why Vedic Astrology?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cosmic-gold to-cosmic-sunset mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-foreground mb-8 leading-relaxed">
              Vedic astrology, or <span className="font-normal text-cosmic-royal">Jyotish Shastra</span>,
              is one of the oldest and most profound systems of cosmic wisdom. Unlike Western astrology,
              which focuses on personality, Vedic astrology reveals the deeper karmic patterns shaping
              your life — past, present, and future.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-cosmic-lavender to-background p-8 rounded-2xl border border-cosmic-lavender/50">
                <h3 className="text-2xl font-bold text-cosmic-deep mb-4">This is not about fortune-telling.</h3>
                <p className="text-muted-foreground">
                  We move beyond predictions into the realm of understanding and transformation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cosmic-mint to-background p-8 rounded-2xl border border-cosmic-mint/50">
                <h3 className="text-2xl font-bold text-cosmic-deep mb-4">This is about self-realization.</h3>
                <p className="text-muted-foreground">
                  Understanding why you are here, what you came to heal, and how to align with the divine flow.
                </p>
              </div>
            </div>

            <p className="text-xl text-foreground leading-relaxed">
              If you've felt called to explore beyond sun signs and horoscopes,
              Vedic astrology offers a gateway into your soul's true map.
            </p>
          </div>
        </div>
      </section>
    );
  };

  // Inspirational Banner Component
  const InspirationalBanner = () => {
    return (
      <section className="py-10 bg-gradient-to-r from-cosmic-deep via-cosmic-royal to-cosmic-deep relative overflow-hidden">
        {/* Cosmic overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Stars className="h-12 w-12 text-cosmic-gold mx-auto mb-6 animate-pulse" />
            <blockquote className="text-3xl md:text-4xl font-light mb-6 italic leading-relaxed">
              "You are not just under the stars. You are made of them."
            </blockquote>
            <p className="text-xl text-white/80">
              — Discover the timeless wisdom of Jyotish to understand your destiny.
            </p>
          </div>

          <a href="#hero">
            <Button variant="cosmicOutline" size="lg" className="!text-[var(--foreground)] border-black hover:bg-[var(--foreground)] hover:!text-[var(--background)]  hover:text-cosmic-deep backdrop-blur-sm mx-auto">
              <span className="mr-2">👉</span>
              Start Now
            </Button>
          </a>
        </div>
      </section>
    );
  };

  // Program Features Component
  const ProgramFeatures = () => {
    const features = [
      {
        icon: <span className="text-2xl">🌿</span>,
        title: "Weekly Guided Learning",
        description: "Understand charts, signs, planets, karmic cycles, and the spiritual laws behind them.",
        gradient: "from-cosmic-mint to-cosmic-mint/50"
      },
      {
        icon: <span className="text-2xl">🌺</span>,
        title: "Live Q&A and Community",
        description: "Connect with seekers, share insights, and deepen your learning in a supportive circle.",
        gradient: "from-cosmic-lavender to-cosmic-lavender/50"
      },
      {
        icon: <span className="text-2xl">🕉</span>,
        title: "Optional Retreats",
        description: "Join us in sacred spaces to practice rituals, chant mantras, and experience the teachings in embodied ways.",
        gradient: "from-cosmic-gold/20 to-cosmic-sunset/20"
      }
    ];

    return (
      <section className="py-10 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cosmic-deep mb-8">
              What Makes This Program Unique?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our 52-week journey is not just a course — it's a sacred container for your awakening.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className={`bg-gradient-to-br ${feature.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-cosmic-deep mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-normal text-cosmic-royal bg-cosmic-lavender/50 inline-block px-8 py-4 rounded-full">
              This is for anyone ready to walk the path, not just learn the theory.
            </p>
          </div>
        </div>
      </section>
    );
  };

  // About Section Component
  const AboutSection = () => {
    return (
      <section className="py-10 px-6 bg-gradient-to-br from-cosmic-lavender/30 via-background to-cosmic-mint/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-5">
            <h2 className="text-4xl md:text-5xl font-bold text-cosmic-deep mb-8">
              <span className="text-2xl">🌸</span> About Vikram Devatha
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cosmic-gold to-cosmic-sunset rounded-3xl opacity-20 blur"></div>
              <img
                src={vikramDevatha.src}
                alt="Vikram Devatha - Vedic Life Coach"
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I am <span className="font-bold text-cosmic-royal">Vikram Devatha</span>, a Vedic Life Coach with over
                <span className="font-normal text-cosmic-deep"> 25 years of experience</span> weaving together astrology,
                education, business, data science, and the timeless wisdom of the Vedas.
              </p>

              <div className="bg-gray-600 backdrop-blur-sm rounded-2xl p-6 border border-cosmic-lavender/30">
                <p className="text-muted-foreground leading-relaxed text-white">
                  With a <span className="font-normal text-cosmic-deep ">PhD in Vedic Astrology</span> from Shree Maharshi College
                  of Vedic Astrology and a <span className="font-normal text-cosmic-deep">gold medal in Data Science</span> from
                  the Indian School of Business, my journey bridges the ancient and the modern.
                </p>
              </div>

              <p className="text-lg text-foreground leading-relaxed">
                My approach is not about predicting your future — it's about <span className="font-bold text-cosmic-royal">empowering you</span>.
                Using your birth chart as a sacred map, I help you navigate relationship dynamics, career transitions,
                health challenges, and personal growth.
              </p>

              <div className="bg-gradient-to-r from-cosmic-gold/20 to-cosmic-sunset/20 rounded-2xl p-6">
                <p className="text-foreground leading-relaxed">
                  Each remedy I offer is tailored to your unique path and lifestyle — blending Indian philosophy,
                  Vedic Astrology, and mythology with deep coaching.
                </p>
              </div>

              <p className="text-lg text-foreground leading-relaxed">
                Over the years, I have guided hundreds through year-long programs, intimate workshops, and transformational retreats.
              </p>

              <div className="text-center lg:text-left">
                <p className="text-xl font-normal text-cosmic-deep italic">
                  I invite you to step into this world of cosmic wisdom — to not just understand your destiny,
                  but to actively shape it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Experience Section Component
  const ExperienceSection = () => {
    const experiences = [
      "Decode your Janma Kundali (birth chart)",
      "Uncover karmic lessons and past-life influences",
      "Explore the Navagrahas (nine planetary energies) shaping your mind, body, and spirit",
      "Understand the nakshatras (lunar constellations) and their subtle power",
      "Apply Vedic remedies — mantras, rituals, gemstones, meditations — to harmonize your path"
    ];

    return (
      <section className="py-10 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-5">
            <h2 className="text-4xl md:text-5xl font-bold text-cosmic-deep mb-8">
              What You'll Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cosmic-royal to-cosmic-gold mx-auto"></div>
          </div>

          <div className="space-y-6 mb-5">
            {experiences.map((experience, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 mt-1">
                  <span className="text-2xl">✨</span>
                </div>
                <p className="text-lg text-foreground leading-relaxed group-hover:text-cosmic-royal transition-colors">
                  {experience}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-cosmic-lavender to-cosmic-mint p-8 rounded-3xl">
              <p className="text-xl font-normal text-cosmic-deep">
                You'll walk away not only with knowledge, but with tools to transform your life.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Call to Action Component
  const CallToAction = () => {
    return (
      <section className="py-10 px-6 bg-gradient-to-br from-cosmic-deep via-cosmic-royal to-cosmic-deep relative overflow-hidden">
        {/* Cosmic background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 animate-pulse">
            <Star className="h-6 w-6 text-cosmic-gold" />
          </div>
          <div className="absolute top-32 right-20 animate-pulse delay-700">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-pulse delay-300">
            <Star className="h-4 w-4 text-cosmic-gold" />
          </div>
          <div className="absolute bottom-40 right-1/3 animate-pulse delay-1000">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            The cosmos is already speaking to you.
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light">
            Are you ready to listen?
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#hero">
              <Button
                variant="cosmicOutline"
                size="lg"
                className="text-cosmic-deep hover:bg-cosmic-gold text-lg px-8 py-6 h-auto group !text-[var(--foreground)] !border-[var(--foreground)] hover:bg-[var(--foreground)] hover:!text-[var(--background)]">

                <span className="mr-3">👉</span>
                Join the 52-Week Journey Today
                <Sparkles className="ml-3 h-5 w-5" />
              </Button>
            </a>

            <a href="https://wa.me/919843948288">
              <Button
                variant="cosmicOutline"
                size="lg"
                className="text-cosmic-deep hover:bg-cosmic-gold text-lg px-8 py-6 h-auto group !text-[var(--foreground)] !border-[var(--foreground)] hover:bg-[var(--foreground)] hover:!text-[var(--background)]">
                <span className="mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg></span>
                Ask About the Program
                <Star className="ml-3 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    );
  };

  // FAQ Component
  const FAQ = () => {
    const faqs = [
      {
        question: "Do I need any prior astrology knowledge?",
        answer:
          "No! We guide you from the basics — whether you're a curious beginner or already familiar with Western astrology.",
      },
      {
        question: "What if I can't attend all the live sessions?",
        answer:
          "All sessions are recorded, and you'll have lifetime access. Go at your own pace, on your own time.",
      },
      {
        question: "How are the offline retreats structured?",
        answer:
          "Our retreats are optional but deeply enriching — combining temple visits, sacred rituals, and immersive group practices.",
      },
      {
        question: "Will I be able to read charts for others?",
        answer:
          "Yes. By the end, you'll have the foundation to understand charts for yourself and begin practicing with others.",
      },
      {
        question: "What makes this program different?",
        answer:
          "This is not just an information course. It's a spiritual initiation into Vedic wisdom — blending deep knowledge with lived experience and transformation.",
      },
    ];

    return (
      <section className="py-10 px-6 bg-cosmic-lavender/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-5">
            <h2 className="text-4xl md:text-5xl font-bold text-cosmic-deep mb-8">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cosmic-royal to-cosmic-sunset mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-600 backdrop-blur-sm rounded-xl border border-cosmic-lavender/50 px-6"
              >
                <AccordionTrigger
                  value={`item-${index}`}
                  className="text-left text-white text-lg font-normal text-cosmic-deep hover:text-cosmic-royal py-6"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  value={`item-${index}`}
                  className="text-muted-foreground pb-6 leading-relaxed text-white"
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };


  // Final CTA Component
  const FinalCTA = () => {
    return (
      <section className="py-10 px-6 bg-gradient-to-r from-cosmic-sunset via-cosmic-gold to-cosmic-sunset relative overflow-hidden">
        {/* Starfield effect */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 animate-pulse delay-200">
            <Star className="h-3 w-3 text-white/60" />
          </div>
          <div className="absolute top-40 right-1/3 animate-pulse delay-800">
            <Sparkles className="h-4 w-4 text-white/40" />
          </div>
          <div className="absolute bottom-32 left-1/6 animate-pulse delay-500">
            <Star className="h-5 w-5 text-white/50" />
          </div>
          <div className="absolute bottom-40 right-1/4 animate-pulse delay-1200">
            <Sparkles className="h-3 w-3 text-white/60" />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg">
            The stars are calling.
          </h2>
          <p className="text-3xl md:text-4xl text-gray-600 mb-12 font-light drop-shadow">
            Will you answer?
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#hero">
              <Button
                variant="cosmicOutline"
                size="lg"
                className="bg-white hover:bg-black text-black  border-white text-xl px-10 py-8 hover:scale-105 transform-all transition duration-300">
                <span className="mr-3">👉</span>
                Join the 52-Week Vedic Astrology Journey
                <Sparkles className="ml-3 h-6 w-6" />
              </Button>
            </a>

            <a href="https://wa.me/919843948288">              <Button
              variant="cosmicOutline"
              size="lg"
              className="bg-white hover:bg-black text-black border-white text-xl px-10 py-8 hover:scale-105 transform-all transition duration-300">
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </span>
              Ask About the Program
              <Star className="ml-3 h-6 w-6" />
            </Button>
            </a>
          </div>
        </div>
      </section>
    );
  };

  return (
    <Suspense fallback={<div className="loader"></div>}>

      <div className="min-h-screen bg-background">
        <Hero />
        <IntroSection />
        <InspirationalBanner />
        <ProgramFeatures />
        <AboutSection />
        <ExperienceSection />
        <CallToAction />
        <FAQ />
        <FinalCTA />
      </div>
    </Suspense>
  );
};


