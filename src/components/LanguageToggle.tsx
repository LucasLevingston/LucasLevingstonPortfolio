import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import i18n from '@/i18n';

const LanguageToggle: React.FC = () => {
	const [language, setLanguage] = useState('en');

	useEffect(() => {
		i18n.changeLanguage(language);
	}, [language]);

	const handleLanguageChange = (checked: boolean) => {
		setLanguage(checked ? 'br' : 'en');
	};

	return (
		<div className="flex items-center justify-center">
			<Label htmlFor="language-toggle" className="flex items-center">
				<Switch
					id="language-toggle"
					checked={language === 'br'}
					onCheckedChange={handleLanguageChange}
				/>
				<span className="ml-2">
					{language === 'en' ? (
						<span className="flex items-center gap-2">
							<span className="fi fi-us fis rounded-full text-[30px]"></span>
						</span>
					) : (
						<span className="flex items-center gap-2">
							<span className="fi fi-br fis rounded-full text-[30px]"></span>
						</span>
					)}
				</span>
			</Label>
		</div>
	);
};

export default LanguageToggle;
