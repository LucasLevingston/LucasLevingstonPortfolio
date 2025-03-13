import React from 'react';

interface SectionProps {
	children: React.ReactNode;
	title?: string;
	className?: string;
	id?: string;
}

export default function Section({
	children,
	title,
	className,
	id,
}: SectionProps): JSX.Element {
	return (
		<div
			id={id}
			className="space-y-3 border-b-[1px] border-solid border-borderColor py-3"
		>
			<div className="text-xl font-bold">{title}</div>
			<div className={`space-y-2 pl-3 ${className}`}>{children}</div>
		</div>
	);
}
