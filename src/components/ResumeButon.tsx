import { useTranslation } from 'react-i18next';
import CustomButton from './CustomButton';
import { useUser } from '@/hooks/user-hooks';
import { Eye } from 'lucide-react';

export function ResumeButton() {
	const { t } = useTranslation();
	const { resumeUrl } = useUser();

	return (
		<CustomButton icon={<Eye />} className="w-[150px]" link={resumeUrl}>
			{t('resume.viewResume')}
		</CustomButton>
	);
}
