'use client';

interface ButtonOptionProps {
  onClick?: () => void;
  type: 'red' | 'gray'; // 배경색이 red 혹은 배경색이 gray
  label: string;
}

const ButtonOption = ({ onClick, type, label }: ButtonOptionProps) => {
  const options = {
    gray: {
      backgroundColor: 'bg-gray-15',
      textColor: 'text-gray-55',
      hoverColor: '',
    },
    red: { backgroundColor: 'bg-alert', textColor: 'text-white', hoverColor: 'hover:bg-alerthover' },
  };

  const { backgroundColor, textColor, hoverColor } = options[type];

  return (
    <button
      type="button"
      className={`rounded-xl ${backgroundColor} ${textColor} ${hoverColor} h-14 w-full text-base font-semibold leading-4 hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default ButtonOption;
