type Props = {
  children: React.ReactNode;
  required?: boolean;
};

export default function FormLabel({ children, required = false }: Props) {
  return (
    <label className="uppercase text-black text-[12px] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem]">
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );
}
