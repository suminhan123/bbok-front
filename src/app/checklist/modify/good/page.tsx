'use client';

import { DefaultLayout, FooterButtonLayout } from '@components/ui/layout';
import ChecklistCount from '@features/checklist/components/count';
import { DIARY_CRITERIA_TEXT } from '@features/checklist/constants';
import { DATA } from '@features/checklist/dummy';
import { IModifyChecklistContext } from '@features/checklist/types';
import { getChecklistCount } from '@features/checklist/utils';
import { TypeQuery } from '@interfaces/enums';
import { useFormContext, useController } from 'react-hook-form';

const ModifyGoodChecklistPage = () => {
  // const { data } = useGetMyChecklist();
  const { register, control } = useFormContext<IModifyChecklistContext>();
  const { field: addField } = useController({
    name: 'addedBadChecklist',
    control,
    defaultValue: [],
  });
  const { field: modifyField } = useController({
    name: 'modifiedBadChecklist',
    control,
    defaultValue: [],
  });
  return (
    <FooterButtonLayout
      text="완료"
      disabled={getChecklistCount<string>(addField.value) + getChecklistCount<number>(modifyField.value) !== 5}
      onClick={() => {}}
    >
      <DefaultLayout className="px-[33px]">
        <div className="mb-[34px] mt-7 flex items-center justify-between">
          <h1 className="text-title-3 text-gray-70">{DIARY_CRITERIA_TEXT[TypeQuery.good].label}</h1>
          <ChecklistCount num={getChecklistCount(DATA.goodChecklist)} />
        </div>

        <h5 className="text-body-3 mb-4">{DIARY_CRITERIA_TEXT[TypeQuery.good].label}</h5>

        <div {...register('modifiedGoodChecklist')}></div>
        <div {...register('addedGoodChecklist')}></div>
      </DefaultLayout>
    </FooterButtonLayout>
  );
};
export default ModifyGoodChecklistPage;
