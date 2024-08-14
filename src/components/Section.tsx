import React from 'react';

interface SectionProps {
	children: React.ReactNode;
	className?: string;
}

export default function Section({
	children,
	className,
}: SectionProps): JSX.Element {
	return (
		<div
			className={`space-y-2 border-b-[1px] border-solid border-borderColor py-4 pl-3 ${className}`}
		>
			{children}
		</div>
	);
}
