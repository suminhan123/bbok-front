'use client';

import BoxButton from '@components/buttons/box-button';
import Input from '@components/input';
import Popup from '@components/popup';
import { ButtonTopBar } from '@components/top-bar';
import { DefaultLayout } from '@components/ui/layout';
import { WritingEmojiForm, WritingTagsList, WritingTextForm } from '@features/diary/components/writing';
import WritingDateForm from '@features/diary/components/writing/date-form';
import { useDiaryMutation } from '@hooks/queries/diary';
import useCustomRouter from '@hooks/useCustomRouter';
import useModal from '@hooks/useModal';
import { IDiaryRequestBody } from '@interfaces/diary';
import { useFriendStore } from '@stores/useFriendStore';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const WritingDiaryPage = () => {
  const [check, setCheck] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isOpen, onClose, onOpen } = useModal();
  const { push } = useCustomRouter();
  const { friend } = useFriendStore();
  const { getValues } = useFormContext<IDiaryRequestBody>();
  const { postDiary } = useDiaryMutation();
  const { tags, content, date, emoji } = getValues();

  const handleCreateDiary = async () => {
    setIsLoading(true);
    const result = { content, sticker: '', tags, emoji, date, checklist: [], id: friend.id };
    await postDiary.mutateAsync(result);
  };

  return (
    <>
      <Popup
        isOpen={isOpen}
        onClose={onClose}
        label="삭제"
        onClick={() => {
          push('/diarylist');
        }}
        title="정말 작성을 취소하시겠어요?"
      >
        <p className="text-caption-1 text-center text-gray-40">삭제한 일화는 다시 복구할 수 없어요.</p>
      </Popup>
      <ButtonTopBar label={'일화 작성'} onClick={onOpen} name={'닫기'} />
      <DefaultLayout>
        <h2 className="mb-3 mt-[15px] text-base font-medium text-gray-65">친구</h2>
        <Input disabled={true} inputValue={friend.name} />
        <WritingDateForm />
        <WritingTextForm />
        <WritingTagsList />
        <WritingEmojiForm check={check} setCheck={setCheck} />

        <BoxButton
          text="완료"
          disabled={!tags || content.length === 0 || !date || !emoji}
          isLoading={isLoading}
          onClick={() => {
            if (check) {
              push('./checklist');
            } else {
              handleCreateDiary();
            }
          }}
          className="mb-8"
        />
      </DefaultLayout>
    </>
  );
};
export default WritingDiaryPage;
