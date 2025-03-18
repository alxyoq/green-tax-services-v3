"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: (string | ReactNode)[];
  popular?: boolean;
  className?: string;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
  className,
}: PricingCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all",
      popular && "border-primary shadow-lg",
      className
    )}>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="text-xs font-medium bg-primary text-white py-1 px-3 rounded-bl-lg">
            Popular
          </div>
        </div>
      )}

      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{price}</div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
              <div className="text-sm text-muted-foreground">
                {feature}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
