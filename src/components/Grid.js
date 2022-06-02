import React from 'react';
import Link from '@docusaurus/Link';

import { RiExternalLinkLine } from 'react-icons/ri';

export const Grid = ({ className, columns, children }) => {
	return (
		// I really don't like hardcoding the `columns`, but I can't figure out how
		// to have PurgeCSS not purse the classes because they're created with
		// string concatenation.
		// https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
		<div
			className={`safe grid grid-cols-1 gap-8
        ${columns == 2 && columns && 'md:grid-cols-2'}
        ${columns == 3 && columns && 'md:grid-cols-3'}
        ${columns == 4 && columns && 'md:grid-cols-4'}
        ${className && className}
      `}
		>
			{children}
		</div>
	);
};

export const Box = ({ className, to, title, cta, image, children }) => {
	// If there's a `to` prop, then we make this Box into a `Link`. Otherwise,
	// it's a `div` to avoid nested `a` elements.
	const Element = to ? Link : `div`;

	return (
		<Element
			to={to}
			className={`group relative p-8 border border-gray-200 rounded !no-underline shadow-sm dark:bg-gray-dark:border-gray-500 ${
				className && className
			}`}
		>
			<h2
				className={`text-xl xl:text-2xl font-semibold !mt-0 !mb-2 ${
					to && 'group-hover:text-gray-500 dark:group-hover:text-gray-100'
				}`}
			>
				{title}
			</h2>
			<div
				className={`markdown font-normal leading-relaxed ${
					cta ? 'mb-4' : 'mb-0'
				} dark:text-gray-100`}
			>
				{children}
			</div>
			{cta && (
				<button className="relative text-text bg-gray-200 px-4 py-2 rounded">
					<span className="z-10 relative font-semibold group-hover:text-gray-100">
						{cta}
					</span>
					<div className="opacity-0 group-hover:opacity-100 transition absolute z-0 inset-0 bg-gradient-to-r from-gray-300 to-gray-500 rounded" />
				</button>
			)}

		</Element>
	);
};

export const BoxList = ({ children }) => (
	<div className="block first:!pt-2">{children}</div>
);

export const BoxListItem = ({ to, title, separator }) => (
	<div className={`block py-1 ${separator && 'list-none'}`}>
		{!separator ? (
			<Link to={to}>
				{title}
				{to.startsWith('http') && (
					<RiExternalLinkLine className="inline-block ml-1" />
				)}
			</Link>
		) : (
			<span className="block w-full h-0.5 mt-2 mb-2 bg-gray-200 bg-clip-content dark:bg-gray-700"></span>
		)}
	</div>
);
