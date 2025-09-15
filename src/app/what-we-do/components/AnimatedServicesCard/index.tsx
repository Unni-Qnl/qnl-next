import { TService } from "@/types/modules.types";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  activeService: {
    index: number;
    data: TService | undefined;
  };
};

export default function AnimatedServicesCard({ activeService }: Props) {
  return (
    <div className="md:w-[16.375rem] lg:w-[21.833rem] xl:w-[27.292rem] 2xl:w-[32.75rem] 3xl:w-[40.938rem]">
      <AnimatePresence mode="wait">
        {activeService?.data?.image && (
          <motion.div
            key={activeService?.data?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundImage: `url("${activeService.data.image}")` }}
            className="bg-cover bg-center bg-no-repeat md:max-h-[21.05rem] lg:max-h-[28.067rem] xl:max-h-[35.083rem] 2xl:max-h-[42.1rem] 3xl:max-h-[52.625rem] h-full"
          >
            <div
              className="w-full h-full grid items-end md:p-[0.6rem] lg:p-[0.8rem] xl:p-[1rem] 2xl:p-[1.2rem] 3xl:p-[1.5rem]"
              style={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)`,
              }}
            >
              <p className="font-normal md:text-[0.7rem] lg:text-[0.933rem] xl:text-[1.167rem] 2xl:text-[1.4rem] 3xl:text-[1.75rem]">
                {activeService?.data?.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
