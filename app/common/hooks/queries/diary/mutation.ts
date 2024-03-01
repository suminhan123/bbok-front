import { FRIEND_KEYS } from '@constants/queryKeys';
import useCustomRouter from '@hooks/useCustomRouter';
import diaryApi from '@requests/diary/diary.client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDiaryMutation = () => {
  const queryClient = useQueryClient();
  const { push } = useCustomRouter();
  /**
   * 일화 등록
   */
  const postDiary = useMutation({
    mutationFn: diaryApi.post,
    onSuccess: () => {
      // 친구 리스트 바로 실행
      queryClient.invalidateQueries({ queryKey: FRIEND_KEYS.lists() });
      push('./diarylist');
    },
  });

  return { postDiary };
};
