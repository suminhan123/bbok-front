'use client';

import { NavTopBar } from '@components/top-bar';
import { ModifyChecklistFormProvider } from '@features/checklist/contexts';
import useCustomRouter from '@hooks/useCustomRouter';
import { PropsWithChildren } from 'react';

const ModifyChecklistLayout = ({ children }: PropsWithChildren) => {
  const { push } = useCustomRouter();
  return (
    <>
      <NavTopBar
        label="기준 수정"
        onClick={() => {
          push('/checklist/detail');
        }}
      />
      <ModifyChecklistFormProvider>{children}</ModifyChecklistFormProvider>
    </>
  );
};
export default ModifyChecklistLayout;
