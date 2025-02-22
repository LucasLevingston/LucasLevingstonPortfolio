import { useUser } from '@/hooks/user-hooks';
import { motion } from 'framer-motion';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface PhotoProps {
	className?: string;
}

const Photo = ({ className }: PhotoProps) => {
	const { profilePicture } = useUser();
	return (
		<div
			className={twMerge(
				'sm:w-h-44 relative h-[175px] w-[175px] sm:h-44',
				className
			)}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 1, duration: 0.1, ease: 'easeIn' },
				}}
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 1, duration: 0.1, ease: 'easeInOut' },
					}}
					className="absolute inset-0 flex items-center justify-center"
				>
					<img
						src={profilePicture}
						alt="Photo"
						className={twMerge(
							'sm:w-h-44 h-[175px] w-[175px] rounded-full object-contain sm:h-44',
							className
						)}
					/>
				</motion.div>
				<motion.svg
					className={twMerge(
						'sm:w-h-44 absolute inset-0 h-[175px] w-[175px] sm:h-44',
						className
					)}
					fill="transparent"
					viewBox="0 0 506 506"
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.circle
						cx="253"
						cy="253"
						r="250"
						stroke="#ff2200"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ strokeDasharray: '24 10 0 0 ' }}
						animate={{
							strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
							rotate: [120, 360],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					/>
				</motion.svg>
			</motion.div>
		</div>
	);
};

export default Photo;
