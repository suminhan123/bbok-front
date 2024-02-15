import BoxButton from '@components/buttons/box-button';

interface IFooterButtonLayoutProps {
  children: React.ReactNode;
  disabled?: boolean;
  text: string;
  border?: boolean;
  onClick: () => void;
}
const FooterButtonLayout = ({ children, disabled, text, onClick, border = true }: IFooterButtonLayoutProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col">{children}</div>
      <footer className="sticky bottom-0 mt-24 h-[90px]">
        <BoxButton disabled={disabled} text={text} border={border} onClick={onClick} />
      </footer>
    </div>
  );
};
export default FooterButtonLayout;
