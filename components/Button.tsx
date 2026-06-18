import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  magnetic?: boolean;
};

type Props = CommonProps &
  (
    | { href: string; external?: boolean; onClick?: never; type?: never }
    | { href?: never; onClick?: () => void; type?: "button" | "submit" }
  );

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-glow-sm hover:brightness-110 hover:shadow-glow",
  secondary:
    "border border-line bg-surface/40 text-foreground hover:border-accent/60 hover:text-accent",
  ghost: "text-foreground hover:text-accent",
};

export function Button({
  children,
  variant = "primary",
  className,
  withArrow = false,
  magnetic = true,
  ...rest
}: Props) {
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  const classes = cn(base, variants[variant], className);

  let node: React.ReactNode;

  if ("href" in rest && rest.href) {
    const { href, external } = rest;
    node = external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  } else {
    const { onClick, type = "button" } = rest as {
      onClick?: () => void;
      type?: "button" | "submit";
    };
    node = (
      <button type={type} onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  return magnetic ? (
    <Magnetic className="inline-block" strength={0.25}>
      {node}
    </Magnetic>
  ) : (
    node
  );
}
