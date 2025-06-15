type LinkProps = {
  text: string;
  url: string;
  style?: "base" | "secondary";
  isCircle?: boolean;
  icon?: React.ReactElement;
};

export const Link = (props: LinkProps) => {
  const { text = "text", url, style = "base", isCircle = false, icon } = props;

  const linkStyles = {
    base: "text-body bg-primary hover:bg-secondary hover:text-white",
    secondary:
      "text-body bg-white border-primary border-solid border-[1px] hover:bg-primary hover:text-white",
  };

  const circleStyle = "!p-2 w-10 h-10";

  return (
    <a
      type="button"
      href={url}
      className={`
            flex justify-center items-center py-2 px-4 text-base font-medium shadow-sm rounded-full
            ${linkStyles[style]} ${isCircle && circleStyle} ${icon && "gap-2"}
        `}
    >
      {text}
      {icon}
    </a>
  );
};

export default Link;
