import React from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import i18n from '@/i18n';
import useUserStore from '@/hooks/user-hooks';

const LanguageToggle: React.FC = () => {
	const setUser = useUserStore((state) => state.setUser);

	const handleLanguageChange = (checked: boolean) => {
		i18n.changeLanguage(checked ? 'br' : 'en');
		setUser(i18n.language);
	};

	return (
		<div className="flex items-center justify-center">
			<Label htmlFor="language-toggle" className="flex items-center gap-2">
				<Switch
					id="language-toggle"
					checked={i18n.language === 'br'}
					onCheckedChange={handleLanguageChange}
				/>
				<span>
					{i18n.language === 'en' ? (
						<span className="flex items-center gap-2">
							<span className="fi fi-us fis rounded-full text-[25px]"></span>
						</span>
					) : (
						<span className="flex items-center gap-2">
							<span className="fi fi-br fis rounded-full text-[25px]"></span>
						</span>
					)}
				</span>
			</Label>
		</div>
	);
};

export default LanguageToggle;
