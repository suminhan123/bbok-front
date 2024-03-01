'use client';

import { NavTopBar } from '@components/top-bar';
import { useGetMyChecklist } from '@hooks/queries/member';
import useCustomRouter from '@hooks/useCustomRouter';

import FriendCriteria from './friend-criteria';

const MyCriteriaList = () => {
  const { data } = useGetMyChecklist();
  const { push } = useCustomRouter();
  return (
    <>
      <NavTopBar label="나의 친구 기준" onClick={() => push('./')} />
      <div className="mb-5 mt-[26px] px-6">
        {data?.data && <FriendCriteria type="bad" list={data?.data.badChecklist} />}
      </div>
      <div className="px-6">{data?.data && <FriendCriteria type="good" list={data?.data.goodChecklist} />}</div>
    </>
  );
};
export default MyCriteriaList;
