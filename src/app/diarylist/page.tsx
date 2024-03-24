'use client';

import SearchBar from '@components/search-bar';
import { DefaultLayout, FooterButtonLayout } from '@components/ui/layout';
import { DiarylistOption, TagButtonsList } from '@features/diarylist/components';
import DiarylistCard from '@features/diarylist/components/card';
import EmptyDiarylistCard from '@features/diarylist/components/empty-card';
import NoLengthDiaryListCard from '@features/diarylist/components/empty-card/no-length-card';
import { useGetDiaryListInfiniteQuery } from '@hooks/queries/diary';
import useCustomRouter from '@hooks/useCustomRouter';
import useInput from '@hooks/useInput';
import { type TDate } from '@interfaces/enums';
import { useFriendStore } from '@stores/useFriendStore';
import { useState } from 'react';

const DiaryListPage = () => {
  // const observeBox = useRef<HTMLDivElement>(null);
  const { push } = useCustomRouter();
  const { text, onChange } = useInput('');
  const { friend } = useFriendStore();
  const [tag, setTag] = useState<string>('');
  const [order, setOrder] = useState<TDate>('desc');
  const { data, isSuccess } = useGetDiaryListInfiniteQuery({
    id: friend.id,
    order,
    q: text,
    tag,
  });
  const diaryList = data?.pages ? data.pages.flatMap((page) => page.data.diaries) : [];

  // useIntersectionObserver({
  //  target: observeBox,
  //  onIntersect: fetchNextPage,
  //  enabled: hasNextPage && !isFetchingNextPage,
  // });

  if (isSuccess && diaryList.length === 0 && text === '' && tag === '') {
    return <NoLengthDiaryListCard />;
  }

  return (
    <FooterButtonLayout
      text="일화작성"
      onClick={() => {
        push('./writing/emoji');
      }}
    >
      <div className="py-[10px]">
        <SearchBar input={text} setInput={onChange} onClick={() => {}} href="./" />
      </div>
      <TagButtonsList selectTag={tag} setSelectTag={setTag} />
      <DefaultLayout className="mb-6">
        <DiarylistOption length={diaryList.length} order={order} setOrder={setOrder} />
        {diaryList.length === 0 && <EmptyDiarylistCard />}
        {diaryList.length > 0 && <DiarylistCard diaryList={diaryList} search={text} />}
        {/* {!isLoading && <div ref={observeBox} />} */}
      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default DiaryListPage;
