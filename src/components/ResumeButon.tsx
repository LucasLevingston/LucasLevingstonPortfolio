import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from './CustomButton';
import { useUser } from '@/hooks/user-hooks';
import { FiDownload } from 'react-icons/fi';

export function ResumeButton() {
	const { t } = useTranslation();
	const { resumeUrl } = useUser();

	return (
		<CustomButton icon={<FiDownload />} className="w-[150px]" link={resumeUrl}>
			{t('resume.viewResume')}
		</CustomButton>
	);
}
