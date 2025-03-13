import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/components/providers/ThemeProvider';

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	const handleToggle = (checked: boolean) => {
		if (checked) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	return (
		<div className="flex items-center space-x-2">
			<Label htmlFor="language-toggle" className="flex items-center gap-2">
				<Switch
					id="theme-toggle"
					checked={theme === 'dark'}
					onCheckedChange={handleToggle}
				/>
				<Label htmlFor="theme-toggle">
					{theme === 'dark' ? (
						<Moon className="size-[25px]" />
					) : (
						<Sun className="size-[25px]" />
					)}
				</Label>
			</Label>
		</div>
	);
}
