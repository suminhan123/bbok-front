import type { ICheckItem, IDiaryCheckListItem, IMyCheckListResponse } from '@interfaces/checklist';

/**
 * 일화 리스트 초기 배열 return
 */
export const getInitialDiaryList = (list: IMyCheckListResponse<number>): IDiaryCheckListItem[] => {
  const goodList = list.goodChecklist
    .filter((goodItem) => goodItem.isUsed)
    .map((item) => {
      return {
        id: item.id,
        isChecked: false,
        isGood: true,
      };
    });

  const badList = list.badChecklist
    .filter((badItem) => badItem.isUsed)
    .map((item) => {
      return {
        id: item.id,
        isChecked: false,
        isGood: false,
      };
    });

  return [...goodList, ...badList];
};

/**
 * 일화 상세 페이지에서 체크리스트 배열 반환
 */
export const getDiaryCheckList = (badlist: ICheckItem[], goodlist: ICheckItem[]): IDiaryCheckListItem[] => {
  const goodList = goodlist.slice(0, 5).map((goodItem) => {
    return {
      id: goodItem.id,
      isChecked: goodItem.isChecked,
      isGood: true,
    };
  });
  const badList = badlist.slice(0, 5).map((badItem) => {
    return {
      id: badItem.id,
      isChecked: badItem.isChecked,
      isGood: false,
    };
  });

  return [...goodList, ...badList];
};

/**
 * 일화 디테일 배열 return
 */
export const getDiaryChecklist = (badChecklist: ICheckItem[], goodChecklist: ICheckItem[]): IDiaryCheckListItem[] => {
  const checklist: IDiaryCheckListItem[] = [];
  badChecklist.forEach((baditem) =>
    checklist.push({
      id: baditem.id,
      isChecked: baditem.isChecked,
      isGood: false,
    }),
  );

  goodChecklist.forEach((gooditem) =>
    checklist.push({
      id: gooditem.id,
      isChecked: gooditem.isChecked,
      isGood: true,
    }),
  );

  return checklist;
};

/**
 * 일화 체크리스트 update
 */
export const updateDiaryChecklist = (id: number, list: IDiaryCheckListItem[]): IDiaryCheckListItem[] => {
  const updateDiary = list.map((checklist) => {
    if (checklist.id === id) {
      return {
        ...checklist,
        isChecked: !checklist.isChecked,
      };
    }
    return checklist;
  });

  return updateDiary;
};
