import { Link } from 'react-router-dom';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import useUserStore from '@/hooks/user-hooks';
import { generalImages } from '@/assets/images';

export function Navbar() {
	const { t, i18n } = useTranslation();
	const [activeButton, setActiveButton] = useState<string>('/');
	const { user } = useUserStore();

	useEffect(() => {
		setActiveButton(location.pathname);
	}, [i18n.language]);

	const project: {
		title: string;
		description: string;
		id: string;
	}[] = [
		{
			title: user.projects[0].title,
			description: user.projects[0].description,
			id: user.projects[0].title,
		},
		{
			title: user.projects[1].title,
			description: user.projects[1].description,
			id: user.projects[1].title,
		},
		{
			title: user.projects[2].title,
			description: user.projects[2].description,
			id: user.projects[2].title,
		},
		{
			title: user.projects[3].title,
			description: user.projects[3].description,
			id: user.projects[3].title,
		},
	];

	const aboutSections: {
		title: string;
		description: string;
		id: string;
	}[] = [
		{
			title: t('about.experiencesTitle'),
			description: t('about.experiencesDescription'),
			id: t('about.experiencesTitle'),
		},
		{
			title: t('about.educationTitle'),
			description: t('about.educationDescription'),
			id: t('about.educationTitle'),
		},
		{
			title: t('about.certificatesTitle'),
			description: t('about.certificatesDescription'),
			id: t('about.certificatesTitle'),
		},
	];

	const getButtonClass = (path: string) =>
		`flex justify-center text-[14px] hover:bg-transparent hover:text-aboutBgColor dark:hover:text-mainTextColor ${
			activeButton === path ? 'bg-transparent' : 'bg-mainColor'
		} w-[90px] rounded-[5px] border-[2px] border-mainColor p-0 px-2 transition-[0.5s] font-bold`;

	const navigationContent = (
		<NavigationMenuList className="flex flex-row gap-2">
			<NavigationMenuItem>
				<NavigationMenuTrigger className={getButtonClass('/about')}>
					<Link to={'/about'}>{t('navbar.about')}</Link>
				</NavigationMenuTrigger>
				<NavigationMenuContent className="dark:bg-bioBgColor">
					<ul className="grid gap-8 p-4 md:w-[400px] lg:w-[300px] lg:grid-cols-[.75fr_1fr]">
						<li className="row-span-3">
							<NavigationMenuLink asChild>
								<Link
									className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
									to={`/about?${t('about.technologiesTitle')}`}
								>
									<img src={generalImages.logo} className="rounded-full" />
									<div className="mb-2 mt-4 text-lg font-medium">
										{t('about.technologiesTitle')}
									</div>
									<p className="text-sm leading-tight text-muted-foreground">
										{t('about.technologiesDescription')}
									</p>
								</Link>
							</NavigationMenuLink>
						</li>
						{aboutSections.map((section) => (
							<ListItem
								className="bg-main border-[2px] border-mainColor bg-mainColor hover:bg-transparent hover:text-aboutBgColor dark:hover:text-mainTextColor"
								key={section.title}
								title={section.title}
								href="/about?"
							>
								{section.description}
							</ListItem>
						))}
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuLink
					href="/"
					className={
						'font-bold' + navigationMenuTriggerStyle() + getButtonClass('/')
					}
				>
					{t('navbar.home')}
				</NavigationMenuLink>
			</NavigationMenuItem>
			<NavigationMenuItem>
				<NavigationMenuTrigger className={getButtonClass('/projects')}>
					<Link to="/projects">{t('navbar.projects')}</Link>
				</NavigationMenuTrigger>
				<NavigationMenuContent className="dark:bg-bioBgColor">
					<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[300px]">
						{project.map((project) => (
							<ListItem
								key={project.title}
								href="/projects?search="
								title={project.title}
							>
								{project.description}
							</ListItem>
						))}
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
		</NavigationMenuList>
	);

	return (
		<>
			<div className="hidden md:block">
				<NavigationMenu>{navigationContent}</NavigationMenu>
			</div>

			<div className="md:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<button className="flex h-10 w-10 items-center justify-center rounded-md border border-mainColor bg-mainColor text-white hover:bg-transparent hover:text-mainColor">
							<Menu className="h-6 w-6" />
							<span className="sr-only">Toggle menu</span>
						</button>
					</SheetTrigger>
					<SheetContent
						side="right"
						className="w-[80%] dark:bg-bioBgColor sm:w-[350px]"
					>
						<div className="mt-6">
							<NavigationMenu className="w-full">
								{navigationContent}
							</NavigationMenu>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
	return (
		<li>
			<Link to={`${href}${title}`}>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md border-[2px] border-mainColor bg-mainColor p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className="text-sm font-bold leading-none">{title}</div>
					<p className="line-clamp-2 text-xs leading-snug text-black dark:text-white">
						{children}
					</p>
				</a>
			</Link>
		</li>
	);
});
ListItem.displayName = 'ListItem';
