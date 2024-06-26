'use client';

interface SelectButtonProps {
  selected?: boolean;
  label?: string;
  onClick?: () => void;
}

const SelectButton = ({ selected, label, onClick }: SelectButtonProps) => {
  return (
    <button
      className={`flex h-[29px] items-center justify-center overflow-hidden whitespace-nowrap rounded-md p-2 text-xs font-medium ${
        selected ? 'bg-orange-1 text-gray-5' : 'bg-gray-13 text-gray-30'
      }`}
      onClick={onClick}
    >
      <h2>{label}</h2>
    </button>
  );
};
export default SelectButton;
