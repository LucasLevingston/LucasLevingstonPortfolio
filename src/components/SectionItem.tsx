import React from 'react';

interface SectionItemProps {
	children: React.ReactNode;
	title?: string | React.ReactNode;
	className?: string;
}

export default function SectionItem({
	children,
	title,
	className,
}: SectionItemProps): JSX.Element {
	return (
		<div className={` ${className} space-y-1`}>
			<h3 className="border-l-[5px] border-mainColor pl-2 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
				{title}
			</h3>
			<div className={`pl-7`}>{children}</div>
		</div>
	);
}
