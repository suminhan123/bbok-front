import { DIARY_KEYS } from '@constants/queryKeys';
import { IDiaryDetailResponse, IDiaryInfiniteRequest, IDiaryListResponse, IDiaryTagReponse } from '@interfaces/diary';

import { ResponseDTO } from '@interfaces/common';
import diaryApi from '@apis/diary/diary.client';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetDiaryList = (body: IDiaryInfiniteRequest) => {
  return useInfiniteQuery<ResponseDTO<IDiaryListResponse>, AxiosError>({
    queryKey: DIARY_KEYS.list([{ ...body }]),
    queryFn: ({ pageParam = 0 }) => diaryApi.list({ ...body, offset: pageParam as number }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.data.pageNumber === lastPage.data.totalPages - 1 ? undefined : lastPage.data.pageNumber + 1;
    },
  });
};

export const useGetDiaryTagList = (id: number) => {
  return useQuery<ResponseDTO<IDiaryTagReponse>, AxiosError>({
    queryKey: DIARY_KEYS.list([{ id }]),
    queryFn: () => diaryApi.tag(id),
  });
};

export const useGetDiaryDetail = (id: number) => {
  return useQuery<ResponseDTO<IDiaryDetailResponse>, AxiosError>({
    queryKey: DIARY_KEYS.detail([{ id }]),
    queryFn: () => diaryApi.detail(id),
  });
};
