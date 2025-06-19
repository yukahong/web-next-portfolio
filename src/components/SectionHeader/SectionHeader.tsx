type SectionHeaderProps = {
  text: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  const { text = "" } = props;
  return <h2 className="px-4 text-primary font-semibold text-3xl">{text}</h2>;
};

export default SectionHeader;
