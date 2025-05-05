"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Illustrations from "./Illustrations";
import  Navbar  from "./navbar";
import {
  getLocalizedContent,
  useLanguageStore,
} from "../../app/store/useLanguageStore";
import CheckoutButton from "./paymentInput";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguageStore();
  const localizedData = getLocalizedContent(language);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
  
  );
}
