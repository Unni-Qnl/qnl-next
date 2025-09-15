import { useLazyBackground } from "@/core/hooks/useLazyBackground";

type Data = {
  id: number;
  title: string;
  image: string;
  bluredImage: string;
};

type Props = {
  data: Data;
};

export default function QnlBpmCard({ data }: Props) {
  const { isVisible, ref } = useLazyBackground<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{
        backgroundImage: isVisible
          ? `url(${data?.image})`
          : `url(${data?.bluredImage})`,
      }}
      className="h-[15.625rem] md:h-[15rem] lg:h-[20rem] xl:h-[25rem] 2xl:h-[30rem] 3xl:h-[37.5rem] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full h-full p-2 md:p-[0.6rem] lg:p-[0.8rem] xl:p-[1rem] 2xl:p-[1.2rem] 3xl:p-[1.5rem] bg-[linear-gradient(180deg,rgba(0,0,0,0)_42.09%,#000_100%),linear-gradient(342.99deg,rgba(0,0,0,0)_80.59%,rgba(0,0,0,0.7)_98.15%)]">
        <p className="font-bold text-[0.625rem] md:text-[0.5rem] lg:text-[0.667rem] xl:text-[0.833rem] 2xl:text-[1rem] 3xl:text-[1.25rem] w-fit uppercase border-b-[1px] border-b-primary">
          {data?.title}
        </p>
      </div>
    </div>
  );
}
