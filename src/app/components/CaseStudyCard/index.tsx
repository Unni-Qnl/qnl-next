"use client";

import { appRoutes } from "@/core/approutes";
import { useRouter } from "next/navigation";

type Props = {
  heading: string;
  image: string;
  slug: string;
};

export default function CaseStudyCard({ image, heading, slug }: Props) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`${appRoutes.caseStudy}/${slug}`)}
      className="cursor-pointer md:w-[8.9rem] lg:w-[11.867rem] xl:w-[14.833rem] 2xl:w-[17.8rem] 3xl:w-[22.25rem]"
    >
      <div className="h-[13.759rem] md:h-[13.275rem] lg:h-[17.7rem] xl:h-[22.125rem] 2xl:h-[26.55rem] 3xl:h-[33.188rem] relative group overflow-hidden">
        <div className="w-full h-full relative">
          <img
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={image}
            alt=""
          />
          <div
            style={{
              background: `
            linear-gradient(180deg, rgba(0, 0, 0, 0) 57.82%, #000000 100%),
            linear-gradient(338.12deg, rgba(0, 0, 0, 0) 79.22%, rgba(0, 0, 0, 0.7) 96.19%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))
            `,
            }}
            className="cursor-pointer absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          >
            <svg
              className="size-5 md:size-[1rem] lg:size-[1.333rem] xl:size-[1.667rem] 2xl:size-[2rem] 3xl:size-[2.5rem]"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.75 20C33.4185 20 33.1005 20.1317 32.8661 20.3661C32.6317 20.6005 32.5 20.9185 32.5 21.25V36.25C32.5 36.5815 32.3683 36.8995 32.1339 37.1339C31.8995 37.3683 31.5815 37.5 31.25 37.5H3.75C3.41848 37.5 3.10054 37.3683 2.86612 37.1339C2.6317 36.8995 2.5 36.5815 2.5 36.25V8.75C2.5 8.41848 2.6317 8.10054 2.86612 7.86612C3.10054 7.6317 3.41848 7.5 3.75 7.5H18.75C19.0815 7.5 19.3995 7.3683 19.6339 7.13388C19.8683 6.89946 20 6.58152 20 6.25C20 5.91848 19.8683 5.60054 19.6339 5.36612C19.3995 5.1317 19.0815 5 18.75 5H3.75C1.6825 5 0 6.6825 0 8.75V36.25C0 38.3175 1.6825 40 3.75 40H31.25C33.3175 40 35 38.3175 35 36.25V21.25C35 20.9185 34.8683 20.6005 34.6339 20.3661C34.3995 20.1317 34.0815 20 33.75 20Z"
                fill="white"
              />
              <path
                d="M38.7501 0H28.7501C28.4186 0 28.1007 0.131696 27.8662 0.366117C27.6318 0.600537 27.5001 0.918479 27.5001 1.25C27.5001 1.58152 27.6318 1.89946 27.8662 2.13388C28.1007 2.3683 28.4186 2.5 28.7501 2.5H35.7326L17.8651 20.365C17.7489 20.4812 17.6567 20.6192 17.5938 20.771C17.5309 20.9229 17.4985 21.0856 17.4985 21.25C17.4985 21.4144 17.5309 21.5771 17.5938 21.729C17.6567 21.8808 17.7489 22.0188 17.8651 22.135C18.0998 22.3697 18.4182 22.5016 18.7501 22.5016C18.9145 22.5016 19.0772 22.4692 19.2291 22.4063C19.3809 22.3434 19.5189 22.2512 19.6351 22.135L37.5001 4.2675V11.25C37.5001 11.5815 37.6318 11.8995 37.8662 12.1339C38.1006 12.3683 38.4186 12.5 38.7501 12.5C39.0816 12.5 39.3996 12.3683 39.634 12.1339C39.8684 11.8995 40.0001 11.5815 40.0001 11.25V1.25C40.0001 0.918479 39.8684 0.600537 39.634 0.366117C39.3996 0.131696 39.0816 0 38.7501 0Z"
                fill="white"
              />
            </svg>
          </div>
          <div
            style={{
              background: `
          linear-gradient(180deg, rgba(0, 0, 0, 0) 57.82%, #000000 100%),
          linear-gradient(338.12deg, rgba(0, 0, 0, 0) 79.22%, rgba(0, 0, 0, 0.7) 96.19%),
          linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
          `,
            }}
            className="w-full h-full absolute inset-0 p-[0.486rem] md:p-[0.6rem] lg:p-[0.8rem] xl:p-[1rem] 2xl:p-[1.2rem] 3xl:p-[1.5rem]"
          >
            <div className="py-0.5 border-b-[1px] border-b-primary w-fit">
              <p className="text-[0.625rem] md:text-[0.5rem] lg:text-[0.667rem] xl:text-[0.833rem] 2xl:text-[1rem] 3xl:text-[1.25rem]">
                CASE STUDY
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-[0.75rem] md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
          {heading}
        </p>
      </div>
    </div>
  );
}
