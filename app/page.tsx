import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Star, Sparkles, Stars } from "lucide-react";
import vikramDevatha from "@/app/Assets/Vikram Devatha.avif"

export default function Home() {
  const Hero = () => {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
        {/* Cosmic background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-lavender/30 via-background to-cosmic-mint/20"></div>

        {/* Floating stars */}
        <div className="absolute top-20 left-20 animate-pulse">
          <Star className="h-4 w-4 text-cosmic-gold" />
        </div>
        <div className="absolute top-40 right-32 animate-pulse delay-1000">
          <Sparkles className="h-6 w-6 text-cosmic-royal" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-pulse delay-500">
          <Star className="h-3 w-3 text-cosmic-sunset" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-5xl text-white md:text-7xl font-bold bg-gradient-to-r from-cosmic-deep via-cosmic-royal to-cosmic-deep bg-clip-text text-transparent mb-6 leading-tight">
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
            <Button variant="cosmic" size="lg" className="group">
              <span className="mr-2">👉</span>
              Join the Journey
              <div className="ml-2 transition-transform group-hover:scale-110">
                <Sparkles className="h-5 w-5" />
              </div>
            </Button>

            <Button variant="cosmicOutline" size="lg" className="group">
              <span className="mr-2">✨</span>
              Attend a Free Info Session
              <Star className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
            </Button>
          </div>
        </div>
      </section>
    );
  };

  // Intro Section Component
  const IntroSection = () => {
    return (
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cosmic-deep mb-8">
              Why Vedic Astrology?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cosmic-gold to-cosmic-sunset mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-foreground mb-8 leading-relaxed">
              Vedic astrology, or <span className="font-semibold text-cosmic-royal">Jyotish Shastra</span>,
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
      <section className="py-20 bg-gradient-to-r from-cosmic-deep via-cosmic-royal to-cosmic-deep relative overflow-hidden">
        {/* Cosmic overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Stars className="h-12 w-12 text-cosmic-gold mx-auto mb-6 animate-pulse" />
            <blockquote className="text-3xl md:text-4xl font-light text-white mb-6 italic leading-relaxed">
              "You are not just under the stars. You are made of them."
            </blockquote>
            <p className="text-xl text-white/80">
              — Discover the timeless wisdom of Jyotish to understand your destiny.
            </p>
          </div>

          <Button variant="cosmicOutline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:!text-black hover:text-cosmic-deep backdrop-blur-sm mx-auto">
            <span className="mr-2">👉</span>
            Start Now
          </Button>
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
      <section className="py-20 px-6 bg-background">
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
            <p className="text-xl font-semibold text-cosmic-royal bg-cosmic-lavender/50 inline-block px-8 py-4 rounded-full">
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
      <section className="py-20 px-6 bg-gradient-to-br from-cosmic-lavender/30 via-background to-cosmic-mint/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
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
                <span className="font-semibold text-cosmic-deep"> 25 years of experience</span> weaving together astrology,
                education, business, data science, and the timeless wisdom of the Vedas.
              </p>

              <div className="bg-gray-600 backdrop-blur-sm rounded-2xl p-6 border border-cosmic-lavender/30">
                <p className="text-muted-foreground leading-relaxed">
                  With a <span className="font-semibold text-cosmic-deep">PhD in Vedic Astrology</span> from Shree Maharshi College
                  of Vedic Astrology and a <span className="font-semibold text-cosmic-deep">gold medal in Data Science</span> from
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
                <p className="text-xl font-semibold text-cosmic-deep italic">
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
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cosmic-deep mb-8">
              What You'll Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cosmic-royal to-cosmic-gold mx-auto"></div>
          </div>

          <div className="space-y-6 mb-12">
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
              <p className="text-xl font-semibold text-cosmic-deep">
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
      <section className="py-20 px-6 bg-gradient-to-br from-cosmic-deep via-cosmic-royal to-cosmic-deep relative overflow-hidden">
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
            <Button
              variant="cosmicOutline"
              size="lg"
              className="bg-white hover:bg-black text-black hover:text-white  text-cosmic-deep hover:bg-cosmic-gold border-white text-lg px-8 py-6 h-auto"
            >
              <span className="mr-3">👉</span>
              Join the 52-Week Journey Today
              <Sparkles className="ml-3 h-5 w-5" />
            </Button>

            <Button
              variant="cosmicOutline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white hover:!text-black hover:text-cosmic-deep text-lg px-8 py-6 h-auto backdrop-blur-sm"
            >
              <span className="mr-3">✨</span>
              Or attend a Free Info Session
              <Star className="ml-3 h-5 w-5" />
            </Button>
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
        answer: "No! We guide you from the basics — whether you're a curious beginner or already familiar with Western astrology."
      },
      {
        question: "What if I can't attend all the live sessions?",
        answer: "All sessions are recorded, and you'll have lifetime access. Go at your own pace, on your own time."
      },
      {
        question: "How are the offline retreats structured?",
        answer: "Our retreats are optional but deeply enriching — combining temple visits, sacred rituals, and immersive group practices."
      },
      {
        question: "Will I be able to read charts for others?",
        answer: "Yes. By the end, you'll have the foundation to understand charts for yourself and begin practicing with others."
      },
      {
        question: "What makes this program different?",
        answer: "This is not just an information course. It's a spiritual initiation into Vedic wisdom — blending deep knowledge with lived experience and transformation."
      }
    ];

    return (
      <section className="py-20 px-6 bg-cosmic-lavender/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
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
                <AccordionTrigger className="text-left text-lg font-semibold text-cosmic-deep hover:text-cosmic-royal py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
      <section className="py-20 px-6 bg-gradient-to-r from-cosmic-sunset via-cosmic-gold to-cosmic-sunset relative overflow-hidden">
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
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
            The stars are calling.
          </h2>
          <p className="text-3xl md:text-4xl text-white/95 mb-12 font-light drop-shadow">
            Will you answer?
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="cosmicOutline"
              size="lg"
              className="bg-white hover:bg-black text-black hover:text-white text-cosmic-deep hover:bg-cosmic-deep border-white text-xl px-10 py-8 h-auto shadow-2xl hover:shadow-cosmic transition-all duration-300 hover:scale-105"
            >
              <span className="mr-3">👉</span>
              Join the 52-Week Vedic Astrology Journey
              <Sparkles className="ml-3 h-6 w-6" />
            </Button>

            <Button
              variant="cosmicOutline"
              size="lg"
              className="bg-transparent text-white hover:!text-black border-white hover:bg-white hover:text-cosmic-sunset text-xl px-10 py-8 h-auto backdrop-blur-sm shadow-xl"
            >
              <span className="mr-3">✨</span>
              Or reserve your spot at our next Free Info Session
              <Star className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>
    );
  };

  return (
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
  );
};


