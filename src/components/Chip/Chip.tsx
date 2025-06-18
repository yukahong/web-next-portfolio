type ChipProps = {
  text: string;
  size?: "small" | "base" | "large";
};

export const Chip = (props: ChipProps) => {
  const { text = "text", size = "base" } = props;

  const chipSize = {
    small: "py-1 px-2 text-sm",
    base: " py-2 px-4 text-base",
    large: "py-3 px-5 text-lg",
  };

  return (
    <span
      className={`w-fit align-middle text-body bg-primary shadow-sm rounded-full
      ${chipSize[size]}`}
    >
      {text}
    </span>
  );
};

export default Chip;
