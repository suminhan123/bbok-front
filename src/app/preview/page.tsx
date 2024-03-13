'use client';

import { RoundButton, SelectButton, SignInButton } from '@components/buttons';
import BoxButton from '@components/buttons/box-button';
import CheckBox from '@components/check-box';
import { CheckList } from '@components/check-list';
import DatePicker from '@components/date-picker';
import Popup from '@components/popup';
import RadioButton from '@components/radio-button';
import TagLabel from '@components/tag-label';
import DiaryField from '@components/text-field';
import ToggleButton from '@components/toggle-button';
import { ButtonTopBar, DiaryTopBar } from '@components/top-bar';
import { useState } from 'react';

const PreviewPage = () => {
  const [tag, setTag] = useState(false);
  const [check, setCheck] = useState(false);
  // toggle 버튼 상태
  const [toggleChecked, setToggleChecked] = useState(false);
  // radio button
  const [radio, setRadio] = useState(false);
  // datepicker 상태
  const [date, setDate] = useState('');

  // textfield 상태
  const [textFieldValue, setTextFieldValue] = useState('');

  // 모달
  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <div className="flex flex-col">
      <div className="m-7">
        <Popup isOpen={modal} onClose={closeModal} label="확인" onClick={() => {}} title="정말 관계를 정리하시겠어요?">
          <p className="text-caption-1 text-center text-gray-40">
            관계정리를 하면 더 이상 일기를 쓸 수 없어요.
            <br />
            일기를 되살리고 싶다면 고객센터에 문의해주세요.
          </p>
        </Popup>
        <BoxButton
          onClick={() => {
            setModal(true);
          }}
          text="모달 열기"
        />
      </div>
      <div className="m-2">
        <BoxButton text="친구 생성" onClick={() => {}} />
      </div>
      <div className="m-2">
        <BoxButton text="친구 생성" border={true} onClick={() => {}} />
      </div>
      <div className="m-2">
        <BoxButton text="친구 생성" border={true} disabled={true} onClick={() => {}} />
      </div>
      <div className="m-2">
        <BoxButton text="삭제" onClick={() => {}} bg="alert" />
      </div>
      <div className="m-2">
        <BoxButton text="취소" onClick={() => {}} bg="gray15" color="gray55" />
      </div>
      <div className="m-2">
        <BoxButton text="일기쓰러 가기" typo="title4" size="large" onClick={() => {}} bg="orange4" />
      </div>
      <div className="m-2">
        <BoxButton text="+나만의 기준추가" onClick={() => {}} bg="orange6" color="orange1" />
      </div>
      <div className="m-2">
        <BoxButton text="나의 친구 기준 보기" size="small" onClick={() => {}} bg="orange6" color="orange1" />
      </div>
      <div className="m-2">
        <BoxButton size="small" onClick={() => {}} bg="yellow">
          <div className="flex justify-between pl-5 pr-3">
            <h5 className="text-title-3 text-orange-1">가시를 뽁! 뽑기 (관계 정리하기)</h5>
            <img src="/images/icon/ui/back-orange.svg" alt="" />
          </div>
        </BoxButton>
      </div>
      {/* Sign in button */}
      <div className="m-2">
        <SignInButton />
      </div>
      {/* tag button */}
      <div className="m-4 flex gap-2">
        <SelectButton
          selected={tag}
          label="태그1"
          onClick={() => {
            setTag(!tag);
          }}
        />
      </div>
      <h1 className="m-2">tag label</h1>
      {/* tag label */}

      <TagLabel label="태그" type="orange" />
      <TagLabel label="태그" type="gray" />

      <h1 className="m-2">check box</h1>
      <div className="m-4 flex gap-2">
        <CheckBox
          selected={check}
          onClick={() => {
            setCheck(!check);
          }}
        />
      </div>
      <h1 className="m-2">check list</h1>
      <div className="m-2">
        {/* checklist */}
        <CheckList label={'친구 타입1'} selected={false} onClick={() => {}} />
      </div>
      <div className="m-2">
        <CheckList label={'친구 타입1'} selected={true} onClick={() => {}} />
      </div>
      <h1 className="m-2">etc buttons</h1>

      {/* round button */}
      <div className="m-2 flex gap-2">
        <RoundButton onClick={() => {}} type="secondary" label="친구생성" />
        <RoundButton onClick={() => {}} type="primary" label="설정" />
      </div>
      <h1 className="m-2">toggle button</h1>
      {/* Toggle Button */}
      <div className="m-2">
        <ToggleButton isChecked={toggleChecked} setIsChecked={setToggleChecked} />
      </div>
      <h1 className="m-2">radio button</h1>
      {/* Radio Button */}
      <div className="m-2">
        <RadioButton
          isChecked={radio}
          setIsChecked={() => {
            setRadio(!radio);
          }}
        />
      </div>

      <h1 className="m-2">input</h1>

      <h1 className="m-2">date picker</h1>
      {/* date picker */}
      <div className="m-2">
        <DatePicker date={date} setDate={setDate} />
      </div>

      <h1 className="m-2">diary field</h1>
      {/* diary field */}
      <div className="m-2">
        <DiaryField input={textFieldValue} setInput={setTextFieldValue} maxLength={1000} />
      </div>

      <h1 className="m-2">top bar</h1>
      {/* button top bar */}
      <div className="m-2">
        <ButtonTopBar label="친구생성" name="닫기" onClick={() => {}} />
      </div>
      {/* diary top bar */}
      <div className="m-2">
        <DiaryTopBar label="일기장" settingClick={() => {}} />
      </div>

      <h1 className="m-2">modal</h1>
      {/* modal */}
    </div>
  );
};
export default PreviewPage;