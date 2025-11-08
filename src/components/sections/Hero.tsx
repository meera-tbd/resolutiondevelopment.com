import Button from '@/components/ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section 
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        backgroundImage: "url('/assets/images/technology-technical-assistance-repair-conceopt (1).jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      aria-label={`${title} - ${subtitle}. ${description || 'Innovative IT solutions and technology services.'}`}
      role="banner"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-800/50 to-cyan-900/60"></div>
      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-amber-200 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-lg animate-fade-in-up">
            {title}
          </h1>
          <p className="mt-6 text-xl text-amber-100 sm:text-2xl md:text-3xl font-medium drop-shadow-md animate-fade-in-up animation-delay-200">
            {subtitle}
          </p>
          {description && (
            <p className="mt-6 text-lg text-amber-50 sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-400">
              {description}
            </p>
          )}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            {primaryCTA && (
              <Button 
                href={primaryCTA.href} 
                size="lg" 
                variant="primary"
                className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {primaryCTA.text}
              </Button>
            )}
            {secondaryCTA && (
              <Button 
                href={secondaryCTA.href} 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {secondaryCTA.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

