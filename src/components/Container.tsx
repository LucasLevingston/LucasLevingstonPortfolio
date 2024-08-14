import React from 'react';

interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export default function Container({
	children,
	className,
}: ContainerProps): JSX.Element {
	return (
		<div
			className={`ml-auto mr-0 h-full flex-1 bg-aboutBgColor p-[50px] sm:max-w-[75%] ${className}`}
		>
			<div className="overflow-y-auto">{children}</div>
		</div>
	);
}
