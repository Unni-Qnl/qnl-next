"use client";

import { COMMON_API_URL } from "@/constants";
import { ApiResponse } from "@/types/global.type";
import { TMetaTags } from "@/types/modules.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext, type ReactNode } from "react";

type ModuleKey =
  | "home"
  | "what_we_do"
  | "who_we_are"
  | "insight"
  | "qnl_bpm"
  | "career"
  | "harmony"
  | "csr_and_sustainability"
  | "contact_us"
  | "join_us";

type MetaMap = {
  [key in ModuleKey]: {
    title: string;
    description: string;
    keywords: string;
  };
};

type MetaContextType = {
  value: MetaMap | undefined;
};

// Create the context
const MetaContext = createContext<MetaContextType | undefined>(undefined);

type MetaProviderProps = {
  children: ReactNode;
};

export default function MetaProvider({ children }: MetaProviderProps) {
  async function getMetaTags() {
    try {
      const response = (
        await axios.get<ApiResponse<TMetaTags[]>>(
          `${COMMON_API_URL}seo/web/listing`,
        )
      ).data;

      if (response?.data && response?.status) {
        const updatedMeta = response?.data?.results?.reduce(
          (acc, item) => {
            if (item?.module) {
              acc[item.module as ModuleKey] = {
                title: item.seo_title,
                description: item.seo_description,
                keywords: item?.seo_keywords,
              };
            }
            return acc;
          },
          {} as {
            [key in ModuleKey]: {
              title: string;
              description: string;
              keywords: string;
            };
          },
        );

        return updatedMeta;
      }
    } catch (error) {
      console.error(error);
    }
  }

  const { data } = useQuery({
    queryKey: ["sdf"],
    queryFn: getMetaTags,
  });

  return (
    <MetaContext.Provider value={{ value: data }}>
      {children}
    </MetaContext.Provider>
  );
}

// Custom hook to access the meta context
export const useMeta = () => {
  const context = useContext(MetaContext);
  if (!context) throw new Error("useMeta must be used within a MetaProvider");
  return context;
};
