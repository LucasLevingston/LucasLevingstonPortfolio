import React from 'react';
import { Button } from './ui/button';

interface CustomButtonProps {
	icon?: React.ReactNode;
	link: string;
	children: React.ReactNode;
	className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	icon,
	link,
	children,
	className,
}) => {
	const defaultClassNameButton =
		'flex w-[150px] h-[50px] items-center  space-x-1 rounded-md border-[3px] border-solid border-mainColor bg-mainColor p-3 text-[13px] font-bold text-mainTextColor no-underline transition-[0.5s] hover:bg-transparent hover:text-mainColor';

	return (
		<Button className={defaultClassNameButton + className}>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="flex justify-between space-x-1"
			>
				<span className="text-2xl">{icon}</span>
				<p className="text-bioBgColor dark:text-mainTextColor">{children}</p>
			</a>
		</Button>
	);
};

export default CustomButton;
