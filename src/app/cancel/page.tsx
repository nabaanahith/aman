'use client'
import Link from "next/link";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  getLocalizedContent,
  useLanguageStore,
} from "../store/useLanguageStore";

export default function CancelPage() {
  const { language } = useLanguageStore();
  const localizedData = getLocalizedContent(language);

  return (
    <div className="container mx-auto py-12">
      <div className="w-full max-w-md mx-auto">
        <Card>
          <CardHeader className="flex flex-col items-center gap-2">
            <XCircle className="h-16 w-16 text-red-500" />
            <CardTitle className="text-center">
              {localizedData.paymentCancelled}
            </CardTitle>
          </CardHeader>

          <CardContent className="text-center space-y-2">
            <p>{localizedData.paymentCancelledMessage}</p>
            <p className="text-gray-600">{localizedData.noCharges}</p>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Link href="/payment" passHref>
              <Button asChild>
                <a>{localizedData.tryAgain}</a>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
