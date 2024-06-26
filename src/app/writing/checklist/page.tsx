'use client';

import { NavTopBar } from '@components/top-bar';
import { FooterButtonLayout } from '@components/ui/layout';
import { LoadingPage } from '@components/ui/pages';
import { ChecklistForm } from '@features/diary/components/writing';
import { CHECKLIST_TABS, TYPE_CHECLIST_COMMENT } from '@features/diary/constants';
import type { IDiaryContextBody } from '@features/diary/contexts/type';
import { CheckNotNextPage } from '@features/diary/utils/check-next-page';
import { getInitialDiaryList } from '@features/diary/utils/get-diary-checklist';
import { useDiaryMutation } from '@hooks/queries/diary';
import { useGetMyChecklist } from '@hooks/queries/member';
import useCustomRouter from '@hooks/useCustomRouter';
import { useTabs } from '@hooks/useTabs';
import type { TQuery } from '@interfaces/enums';
import { TypeQuery } from '@interfaces/enums';
import { useFriendStore } from '@stores/useFriendStore';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const WritingChecklistPage = () => {
  const { back, replace } = useCustomRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { currentItem, changeItem } = useTabs<TQuery>(0, CHECKLIST_TABS);
  const { tab } = currentItem;
  const { friend } = useFriendStore();
  const { postDiary } = useDiaryMutation();
  const { getValues } = useFormContext<IDiaryContextBody>();
  const { tags, content, date, emoji } = getValues();

  useEffect(() => {
    if (CheckNotNextPage({ tags, content, date, emoji })) {
      replace('/writing/diary');
    }
  }, []);

  const { data, isSuccess, isLoading } = useGetMyChecklist();

  if (isLoading) {
    return <LoadingPage />;
  }

  const handleCreateDiary = async () => {
    const { checklist } = getValues();
    setLoading(true);
    const result = { content, sticker: '', tags, emoji, date, id: friend.id, checklist };
    await postDiary.mutateAsync(result);
  };

  const TAB_CONTROL = {
    [TypeQuery.bad]: {
      onClick: () => changeItem(1),
      multiClick: () => changeItem(1),
      navClick: () => back(),
    },
    [TypeQuery.good]: {
      onClick: () => handleCreateDiary(),
      multiClick: () => handleCreateDiary(),
      navClick: () => changeItem(0),
    },
  };

  return (
    <FooterButtonLayout
      text={TYPE_CHECLIST_COMMENT[tab].bottom}
      multi={true}
      isLoading={loading}
      border={false}
      onClick={TAB_CONTROL[tab].onClick}
      multiOnClick={TAB_CONTROL[tab].multiClick}
    >
      <NavTopBar onClick={TAB_CONTROL[tab].navClick} label={TYPE_CHECLIST_COMMENT[tab].title} />
      {isSuccess && data.data && (
        <ChecklistForm
          initialValue={getInitialDiaryList(data.data)}
          tab={tab}
          goodChecklist={data?.data.goodChecklist}
          badChecklist={data?.data.badChecklist}
        />
      )}
    </FooterButtonLayout>
  );
};
export default WritingChecklistPage;
