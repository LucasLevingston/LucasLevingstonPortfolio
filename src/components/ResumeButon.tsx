import React from 'react';
import { BsJournalText } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import CustomButton from './CustomButton';

export function ResumeButton({ url }: { url: string }) {
	const { t } = useTranslation();

	return (
		<div className="flex w-full justify-center">
			<CustomButton icon={<BsJournalText />} className="w-[170px]" link={url}>
				{t('resume.viewResume')}
			</CustomButton>
		</div>
	);
}
