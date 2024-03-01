import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const StorageKey = 'active-friend';

interface IFriendStateContent {
  id: number;
  name: string;
}
interface IFriendStoreState {
  friend: IFriendStateContent;
  setFriend: (state: IFriendStateContent) => void;
}

export const useFriendStore = create(
  persist<IFriendStoreState>(
    (set) => ({
      friend: {
        id: 0,
        name: '',
      },

      setFriend: (state: IFriendStateContent) => {
        set({ friend: state });
      },
    }),
    {
      name: StorageKey,
    },
  ),
);
