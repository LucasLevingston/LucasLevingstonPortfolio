import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
	const { t } = useTranslation();
	const location = useLocation();

	const [activeButton, setActiveButton] = useState<string>('/');

	useEffect(() => {
		setActiveButton(location.pathname);
	}, [location]);

	const getButtonClass = (path: string) =>
		`flex justify-center text-[16px] hover:bg-transparent hover:text-aboutBgColor dark:hover:text-mainTextColor ${
			activeButton === path ? 'bg-transparent' : 'bg-mainColor'
		} w-[80px] rounded-[5px] border-[2px] border-mainColor p-3 transition-[0.5s]`;

	return (
		<div>
			<div className="flex list-none justify-center gap-3 text-center font-bold no-underline md:flex-col lg:flex-row">
				<button>
					<Link className={getButtonClass('/about')} to="/about">
						{t('navbar.about')}
					</Link>
				</button>
				<button>
					<Link className={getButtonClass('/')} to="/">
						{t('navbar.home')}
					</Link>
				</button>
				<li>
					<Link className={getButtonClass('/projects')} to="/projects">
						{t('navbar.projects')}
					</Link>
				</li>
			</div>
		</div>
	);
}
