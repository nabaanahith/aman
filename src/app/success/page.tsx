'use client'
import Link from "next/link"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { useLanguageStore, getLocalizedContent } from "../store/useLanguageStore";

export default function SuccessPage() {
    const { language } = useLanguageStore();
    const localizedData = getLocalizedContent(language);
  
  return (
    <div className="container mx-auto py-12">
      <div className="w-full max-w-md mx-auto">
        <Card>
          <CardHeader className="flex flex-col items-center gap-2">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <CardTitle className="text-center">{localizedData.paymentSuccess}</CardTitle>
          </CardHeader>

          <CardContent className="text-center space-y-2">
            <p>{localizedData.thankYouMessage}</p>
            <p className="text-gray-600">{localizedData.confirmationEmail}</p>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Link href="/" passHref>
              <Button asChild>
                <a>{localizedData.returnHome}</a>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
