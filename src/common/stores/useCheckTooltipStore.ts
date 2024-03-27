import { LocalStorageKey } from '@libs/local-storage/localStorageKey';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ICheckTooltipStoreState {
  isCheckFriend: boolean;
  isCheckDiary: boolean;
  setIsCheckFriend: (state: boolean) => void;
  setIsCheckDiary: (state: boolean) => void;
}

export const useCheckTooltipStore = create(
  persist<ICheckTooltipStoreState>(
    (set) => ({
      isCheckFriend: false,
      isCheckDiary: true,
      setIsCheckFriend: (state: boolean) => {
        set({ isCheckFriend: state });
      },
      setIsCheckDiary: (state: boolean) => {
        set({ isCheckDiary: state });
      },
    }),
    {
      name: LocalStorageKey.homeTooltip,
    },
  ),
);
