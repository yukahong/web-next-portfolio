type ChipProps = {
  text: string;
};

export const Chip = (props: ChipProps) => {
  const { text = "text" } = props;
  return (
    <span
      className="w-fit align-middle py-1 px-2 text-sm text-body bg-primary shadow-sm rounded-full"
    >
      {text}
    </span>
  );
};

export default Chip;
