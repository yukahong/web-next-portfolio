type ButtonProps = {
  text: string;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;

  disable?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { text = "text", disable = false, onClick } = props;
  return (
    <button
      type="button"
      disabled={disable}
      className="flex justify-center items-center py-2 px-4 text-base text-body bg-primary shadow-sm rounded-full hover:bg-secondary hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
