'use client';

import BoxButton from '@components/buttons/box-button';
import { DiaryTopBar } from '@components/top-bar';
import { useGetFriend } from '@hooks/queries/friend';
import useCustomRouter from '@hooks/useCustomRouter';
import { showErrorToast } from '@libs/showToast';

import { EmptyFriend, FriendCard, KeyFriendCard } from '../component';
import useHandleFriendCard from '../hooks/useHandleFriendCard';

const FriendCardPage = () => {
  const { data } = useGetFriend();
  const { push } = useCustomRouter();

  const { handleFriendType, friendList, id, name } = useHandleFriendCard(data?.data.friends!);
  const type = handleFriendType();

  return (
    <div>
      <DiaryTopBar
        label={'MY일기장'}
        settingClick={() => {
          if (type === 'BothActiveFriend' || type === 'OneFriend') {
            push({ pathname: '/setting', query: { id, name } });
          } else {
            showErrorToast('친구를 먼저 생성해주세요');
            push('/friend');
          }
        }}
      />
      {/* 친구가 아예 없는 경우 */}
      {type === 'NoFriend' && (
        <div className="mx-9 mt-9">
          <EmptyFriend />
        </div>
      )}
      {/* 활성화 친구 오직 한명인 경우 */}
      {type === 'OneFriend' && (
        <div className="flex gap-4 overflow-x-scroll px-9 py-4 scrollbar-hide">
          {friendList.map((friend) => (
            <>
              <FriendCard
                key={friend?.id}
                countingDiary={friend?.countingDiary!}
                startedAt={friend?.startedAt!}
                name={friend?.name!}
                score={friend?.score!}
                url={friend?.characterUrl!}
              />
              <KeyFriendCard name={friend?.name!} lock={true} />
            </>
          ))}
        </div>
      )}

      {/* 활성화 친구 와 비활성화 친구가 있는 경우 */}
      {type === 'BothActiveFriend' && (
        <div className="flex gap-4 overflow-x-scroll px-9 py-4 scrollbar-hide">
          {friendList.map((friend) => (
            <FriendCard
              key={friend?.id}
              countingDiary={friend?.countingDiary!}
              startedAt={friend?.startedAt!}
              name={friend?.name!}
              score={friend?.score!}
              url={friend?.characterUrl!}
              active={friend?.active!}
            />
          ))}
        </div>
      )}

      {/* 비활성화 친구만 있는 경우 */}
      {type === 'NoActiveFriend' && (
        <div className="flex gap-4 overflow-x-scroll px-9 py-4 scrollbar-hide">
          <KeyFriendCard name={''} lock={false} />
          {friendList.map((friend) => (
            <FriendCard
              key={friend?.id}
              countingDiary={friend?.countingDiary!}
              startedAt={friend?.startedAt!}
              name={friend?.name!}
              score={friend?.score!}
              url={friend?.characterUrl!}
              active={friend?.active!}
            />
          ))}
        </div>
      )}

      <div className="mx-6 mb-[46px] mt-[53px]">
        <BoxButton
          text="나의 친구 기준 보기"
          size="small"
          onClick={() => {
            push('/criteria');
          }}
          bg="orange6"
          color="orange1"
        />
      </div>
    </div>
  );
};
export default FriendCardPage;
