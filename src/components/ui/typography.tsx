import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("font-inter text-gray-900", {
  variants: {
    variant: {
      h1: "text-heading font-bold",
      body: "text-body",
      caption: "text-xs",
    },
    weight: {
      regular: "font-regular",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body",
    weight: "regular",
  },
});

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>;

const variantToElement: Record<TypographyVariant, keyof JSX.IntrinsicElements> =
  {
    h1: "h1",
    body: "p",
    caption: "span",
  };

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Typography({
  variant = "body",
  weight,
  className,
  children,
}: TypographyProps) {
  const Component = variantToElement[variant];

  return (
    <Component
      className={cn(typographyVariants({ variant, weight }), className)}
    >
      {children}
    </Component>
  );
}
