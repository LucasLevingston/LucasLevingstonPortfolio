import type React from 'react';
import { cn } from '@/lib/utils/cn';

interface DesktopFrameProps {
	children: React.ReactNode;
	className?: string;
}

export function DesktopFrame({ children, className }: DesktopFrameProps) {
	return (
		<div
			className={cn(
				'relative mx-auto aspect-[16/9] w-full max-w-full overflow-hidden rounded-xl border-8 border-gray-800 bg-gray-900 shadow-lg dark:border-gray-200 dark:bg-gray-100',
				className
			)}
		>
			<div className="absolute inset-0 flex items-center justify-center">
				{children}
			</div>
			{/* Monitor stand */}
			<div className="absolute bottom-0 left-1/2 h-2 w-1/3 -translate-x-1/2 rounded-b-lg bg-gray-700 dark:bg-gray-300" />
		</div>
	);
}
