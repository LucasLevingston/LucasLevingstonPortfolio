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
			className={`ml-auto mr-0 h-full flex-1 p-6 sm:max-w-[75%] sm:p-[50px] dark:bg-aboutBgColor ${className} text-bioBgColor dark:text-bioBorderColor`}
		>
			<div className="overflow-y-auto">{children}</div>
		</div>
	);
}
