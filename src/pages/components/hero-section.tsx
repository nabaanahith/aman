"use client";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
   <section className="relative rounded-xl  ">
    
    </section>

  );
}
