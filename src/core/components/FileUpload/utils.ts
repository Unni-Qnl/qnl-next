import type { ImageInputFiles } from "./file.types";

export const getBase64 = async (file: File): Promise<string> => {
  const reader = new FileReader();
  return await new Promise((resolve) => {
    reader.addEventListener("load", () => {
      resolve(String(reader.result));
    });
    reader.readAsDataURL(file);
  });
};

export const getListFiles = async (
  files: FileList,
  dataURLKey: string,
): Promise<ImageInputFiles> => {
  const promiseFiles: Array<Promise<string>> = [];
  for (let i = 0; i < files.length; i += 1) {
    promiseFiles.push(getBase64(files[i]));
  }
  return await Promise.all(promiseFiles).then((fileListBase64: string[]) => {
    const fileList: ImageInputFiles = fileListBase64.map((base64, index) => ({
      [dataURLKey]: base64,
      file: files[index],
    }));
    return fileList;
  });
};

export const getAcceptTypeString = (
  acceptType?: string[],
  allowNonImageType?: boolean,
) => {
  if (acceptType?.length) return acceptType.join(", ");
  if (allowNonImageType) return "";
  return "image/*";
};
