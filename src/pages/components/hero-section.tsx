"use client";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguageStore();
  const localizedData = getLocalizedContent(language);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
   <section className="relative rounded-xl  ">
    
    </section>

  );
}
