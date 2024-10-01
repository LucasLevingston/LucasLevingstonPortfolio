import React from 'react';
import { BsJournalText } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

export function ResumeButton() {
	const { t } = useTranslation();

	return (
		<div className="flex w-full justify-center">
			<a
				className="flex w-[170px] items-center justify-center rounded-[5px] border-[2px]  border-mainColor 
             bg-mainColor p-[12px] text-[16px]  font-bold text-mainTextColor  transition-[0.5s] 
             hover:bg-transparent hover:text-mainColor"
				href="https://docs.google.com/document/d/12krEMbPJzIrSUoN4tKSt3C5REMoSwNpGPSmVNa9UE9I/edit?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span className="pr-2 text-bioBgColor dark:text-mainTextColor ">
					{t('resume.viewResume')}
				</span>
				<BsJournalText className="text-[18px]" />
			</a>
		</div>
	);
}
