"use client";

import { appRoutes } from "@/core/approutes";
import { formatToTitleCase } from "@/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react/jsx-runtime";

type Props = {};

const restrictedRoutes = ["/case-study", "/apply-now", "/QNL-Newsletter"];

export default function Breadcrumb({}: Props) {
  const router = useRouter();
  const pathname = usePathname(); // ✅ reactive pathname
  const pathSegments = pathname.split("/").filter(Boolean);

  const handelNavigate = (path: string) => {
    if (restrictedRoutes.includes(path)) return;
    router.push(path);
  };

  return (
    <div className="flex items-center gap-4 py-1 md:py-[0.225rem] lg:py-[0.3rem] xl:py-[0.375rem] 2xl:py-[0.45rem] 3xl:py-[0.562rem] px-2 md:px-[0.4rem] lg:px-[0.5rem] xl:px-[0.666rem] 2xl:px-[0.8rem] 3xl:px-[1rem] text-[10px] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.9rem] 2xl:text-[1.125rem] 3xl:text-[0.562rem] bg-[#6E6E6E33] w-fit">
      <p className="cursor-pointer">
        <Link href={appRoutes.home}>Home</Link>
      </p>
      {pathSegments?.map((path, index) => {
        const isLast = index === pathSegments.length - 1;

        return (
          <Fragment key={index}>
            {isNaN(Number(path)) && <p>/</p>}
            {isLast ? (
              <p className="cursor-pointer">{formatToTitleCase(path)}</p>
            ) : (
              <p className="cursor-pointer">
                <span onClick={() => handelNavigate(`/${path}`)}>
                  {formatToTitleCase(path)}
                </span>
              </p>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
