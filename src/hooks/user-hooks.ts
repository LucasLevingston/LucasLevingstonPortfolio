import { userBr, userEn } from '@/data/userData';
import { UserType } from '@/types/UserType';
import { create } from 'zustand';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

interface useUserStoreProps {
	user: UserType;
	setUser: (language: string) => void;
}

const useUserStore = create<useUserStoreProps>((set) => ({
	user: userBr,
	setUser: (language) => {
		const user = language === 'en' ? userEn : userBr;
		set({ user });
	},
}));

export const useUser = () => {
	const { i18n } = useTranslation();
	const user = useUserStore((state) => state.user);
	const setUser = useUserStore((state) => state.setUser);

	useEffect(() => {
		setUser(i18n.language);
	}, [i18n.language, setUser]);

	return user;
};

export default useUserStore;
