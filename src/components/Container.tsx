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
			className={`z-0 ml-auto h-full  p-6 dark:bg-aboutBgColor sm:max-w-[75%] sm:p-[50px] ${className} text-bioBgColor dark:text-bioBorderColor`}
		>
			<div className="min-h-screen ">{children}</div>
		</div>
	);
}
