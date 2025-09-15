import FileUpload from "@/core/components/FileUpload";
import type {
  ImageInputFile,
  ImageInputFiles,
} from "@/core/components/FileUpload/file.types";
import fileUploadImage from "@/assets/app/file-upload-icon.webp";
import fileUploading from "@/assets/app/uploading.svg";
import uploadingCompleted from "@/assets/app/completed.svg";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";
import pdf from "./assets/pdf.svg";
import doc from "./assets/doc.svg";
import xls from "./assets/xls.svg";

type Props = {
  value: ImageInputFiles;
  onChange: (value: ImageInputFiles, addUpdatedIndex?: number[]) => void;
  multiple?: boolean;
  acceptType: string[];
};

export const imageExtensions = [
  "jpg",
  "jpeg",
  "png",
  "webp",
  "gif",
  "bmp",
  "svg",
];
export const pdfExtensions = ["pdf"];
export const wordExtensions = ["doc", "docx"];
export const excelExtensions = ["xls", "xlsx"];
export const pptExtensions = ["ppt", "pptx"];
export const textExtensions = ["txt"];
export const csvExtensions = ["csv"];
export const archiveExtensions = ["zip", "rar", "7z"];
export const videoExtensions = ["mp4", "mov", "avi", "mkv", "webm"];
export const audioExtensions = ["mp3", "wav", "ogg", "aac"];
export const codeExtensions = [
  "js",
  "ts",
  "jsx",
  "tsx",
  "html",
  "css",
  "json",
  "xml",
];

export default function FileInput({
  onChange,
  value,
  acceptType = ["image/png", "image/jpeg", "image/webp"],
  multiple,
}: Props) {
  const displayAcceptedTypes = acceptType?.map((type) => type.split("/")[1]);
  function formatFileSize(bytes: number) {
    const kb = bytes / 1024;
    const mb = bytes / (1024 * 1024);

    if (mb >= 1) {
      return mb.toFixed(2) + " MB";
    } else {
      return kb.toFixed(2) + " KB";
    }
  }

  function getFilePreviewUrl(file: ImageInputFile) {
    const fileType = file.file?.type.split("/")[1];
    if (pdfExtensions.includes(fileType ?? "")) {
      return pdf;
    }
    if (wordExtensions.includes(fileType ?? "")) {
      return doc;
    }
    if (excelExtensions.includes(fileType ?? "")) {
      return xls;
    }

    return file.dataURL;
  }

  return (
    <FileUpload
      onChange={onChange}
      value={value}
      multiple={multiple}
      acceptType={acceptType ?? []}
    >
      {({
        fileList,
        onImageUpload,
        onImageRemove,
        dragProps,
        progress,
        uploadStatus,
        error,
      }) => (
        <>
          <div>
            <div {...dragProps} className="bg-[#F5F5F5] w-full">
              <button
                type="button"
                onClick={onImageUpload}
                className="cursor-pointer w-full h-full py-2 md:py-[0.35rem] lg:py-[0.467rem] xl:py-[0.583rem] 2xl:py-[0.7rem] 3xl:py-[0.875rem] grid place-items-center"
              >
                <div className="flex flex-col items-center gap-4 md:gap-[0.2rem] lg:gap-[0.267rem] xl:gap-[0.333rem] 2xl:gap-[0.4rem] 3xl:gap-[0.5rem]">
                  <img
                    className="w-[27px] md:w-[1.15rem] lg:w-[1.533rem] xl:w-[1.917rem] 2xl:w-[2.3rem] 3xl:w-[2.875rem] h-[24px] md:h-[1rem] lg:h-[1.333rem] xl:h-[1.667rem] 2xl:h-[2rem] 3xl:h-[2.5rem]"
                    src={fileUploadImage.src}
                    alt="File upload"
                    loading="lazy"
                  />
                  <div>
                    <p className="cursor-pointer text-black text-[10px] md:text-[0.35rem] lg:text-[0.467rem] xl:text-[0.583rem] 2xl:text-[0.7rem] 3xl:text-[0.875rem]">
                      Drag & drop files or{" "}
                      <span className="text-primary underline">Browse</span>
                    </p>
                    <p className="text-[#676767] text-[8px] md:text-[0.3rem] lg:text-[0.4rem] xl:text-[0.5rem] 2xl:text-[0.6rem] 3xl:text-[0.75rem] mt-1.5">
                      Supported formates:{" "}
                      {displayAcceptedTypes?.map((item) => (
                        <span key={item}>{item}, </span>
                      ))}
                    </p>
                    <p className="text-[#676767] text-[8px] md:text-[0.3rem] lg:text-[0.4rem] xl:text-[0.5rem] 2xl:text-[0.6rem] 3xl:text-[0.75rem] mt-1.5">
                      Max Size: 1Mb
                    </p>
                  </div>
                </div>
              </button>
            </div>
            {fileList?.map((item, index) => (
              <div
                key={index}
                className="bg-[#FCFDFF] p-2 md:p-[0.4rem] lg:p-[0.533rem] xl:p-[0.667rem] 2xl:p-[0.8rem] 3xl:p-[1rem]"
              >
                <div className="flex gap-4 md:gap-[0.4rem] lg:gap-[0.533rem] xl:gap-[0.667rem] 2xl:gap-[0.8rem] 3xl:gap-[1rem]">
                  <img
                    className="object-cover size-8 md:size-[1rem] lg:size-[1.333rem] xl:size-[1.667rem] 2xl:size-[2rem] 3xl:size-[2.5rem] rounded-[2.4px] md:rounded-[0.075rem] lg:rounded-[0.1rem] xl:rounded-[0.125rem] 2xl:rounded-[0.15rem] 3xl:rounded-[0.188rem]"
                    src={getFilePreviewUrl(item)}
                    alt="image-preview"
                    loading="lazy"
                  />
                  <div className="relative flex-1">
                    <p className="text-[#313131] font-medium text-[12px] md:text-[0.35rem] lg:text-[0.467rem] xl:text-[0.583rem] 2xl:text-[0.7rem] 3xl:text-[0.875rem]">
                      {item?.file?.name}
                    </p>
                    <div className="flex items-center mt-1 gap-1 md:gap-[0.4rem] lg:gap-[0.533rem] xl:gap-[0.667rem] 2xl:gap-[0.8rem] 3xl:gap-[1rem]">
                      <p className="text-[#A9ACB4] text-[10px] md:text-[0.3rem] lg:text-[0.4rem] xl:text-[0.5rem] 2xl:text-[0.6rem] 3xl:text-[0.75rem]">
                        {formatFileSize(item?.file?.size ?? 0)} •
                      </p>
                      <div className="flex items-center gap-0.5">
                        <img
                          src={
                            item?.status === "Uploading..."
                              ? fileUploading.src
                              : uploadingCompleted.src
                          }
                          alt="uploading"
                          loading="lazy"
                        />
                        <p className="text-[#292D32] text-[10px] md:text-[0.3rem] lg:text-[0.4rem] xl:text-[0.5rem] 2xl:text-[0.6rem] 3xl:text-[0.75rem]">
                          {uploadStatus}
                        </p>
                      </div>
                    </div>
                    <button
                      disabled={uploadStatus === "Uploading..."}
                      className="cursor-pointer absolute top-0 right-0"
                      onClick={() => onImageRemove(index)}
                    >
                      <X color="black" size={20} />
                    </button>
                  </div>
                </div>
                <div className="mt-4 md:mt-[0.4rem] lg:mt-[0.533rem] xl:mt-[0.667rem] 2xl:mt-[0.8rem] 3xl:mt-[1rem]">
                  <Progress
                    className="h-[5px] bg-[#CBD0DC]"
                    value={item?.progress}
                  />
                </div>
              </div>
            ))}
          </div>
          {error && (
            <div className="px-4 py-2 bg-red-100 border border-red-400 text-red-700 rounded text-sm w-full mx-auto">
              <strong className="font-medium">Error:</strong> {error}
            </div>
          )}
        </>
      )}
    </FileUpload>
  );
}
