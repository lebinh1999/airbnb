"use client";
interface Props {
  title: string;
  subTitle?: string;
  center?: string;
}

const Heading: React.FC<Props> = ({ title, subTitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subTitle}</div>
    </div>
  );
};

export default Heading;
