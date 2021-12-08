import { PrismicLink, PrismicLinkProps } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import clsx from "clsx";

export type ButtonLinkProps<
	LinkResolverFunction extends prismicH.LinkResolverFunction = prismicH.LinkResolverFunction,
> = {
	variant?: "green" | "black";
} & PrismicLinkProps<"a", "a", LinkResolverFunction>;

export function ButtonLink<
	LinkResolverFunction extends prismicH.LinkResolverFunction = prismicH.LinkResolverFunction,
>({
	variant = "black",
	children,
	className,
	...restProps
}: ButtonLinkProps<LinkResolverFunction>) {
	return (
		<PrismicLink
			className={clsx("button", `button--${variant}`, className)}
			{...restProps}
		>
			{children}
		</PrismicLink>
	);
}