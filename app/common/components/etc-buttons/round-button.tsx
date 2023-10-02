interface RoundProps {
  type: 'red' | 'orange';
  onClick?: () => void;
  label: string;
}

const RoundButton = ({ onClick, type, label }: RoundProps) => {
  const options = {
    red: {
      backgroundColor: 'bg-red',
      textColor: 'text-gray-55',
      hoverColor: '',
    },
    orange: {
      backgroundColor: 'bg-orange-1',
      textColor: 'text-gray-5',
      hoverColor: 'hover:bg-orange-hover',
    },
  };
  const { backgroundColor, hoverColor, textColor } = options[type];
  return (
    <button
      className={`${backgroundColor} ${hoverColor} ${textColor} rounded-[39px] px-[13px]  py-2 text-center text-xs font-medium leading-none hover:shadow-sm active:opacity-[0.85]`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default RoundButton;