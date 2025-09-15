import { useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { getAcceptTypeString, getListFiles } from "./utils";
import type { ImageInputExport, ImageInputFiles } from "./file.types";

type Props = {
  value: ImageInputFiles;
  multiple?: boolean;
  onChange: (value: ImageInputFiles, addUpdatedIndex?: number[]) => void;
  children?: (props: ImageInputExport) => React.ReactNode;
  acceptType: string[];
};

export const DEFAULT_NULL_INDEX = -1;
export const DEFAULT_DATA_URL_KEY = "dataURL";
const MAX_FILE_SIZE_MB = 1;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export default function FileUpload({
  value,
  multiple = false,
  onChange,
  children,
  acceptType,
}: Props) {
  const [error, setError] = useState<string | null>(null);
  const [keyUpdate, setKeyUpdate] = useState<number>(DEFAULT_NULL_INDEX);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "Uploading..." | "Completed"
  >("idle");

  const inValue = value || [];

  const onImageUpload = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };

  // Simulate upload progress
  const simulateProgress = () => {
    let val = 0;
    const interval = setInterval(() => {
      val += 10;
      setProgress(val);
      if (val >= 100) {
        clearInterval(interval);
        setUploadStatus("Completed");
      }
    }, 100);
  };

  const onInputChange = async (
    e: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    await handleChange(e.target.files);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleChange = async (files: FileList | null) => {
    if (!files) return;

    setUploadStatus("Uploading...");
    setProgress(0);
    simulateProgress();

    const validFiles = Array.from(files).filter((file) =>
      acceptType?.includes(file.type),
    );
    const invalidFiles = Array.from(files).filter(
      (file) =>
        !acceptType?.includes(file.type) || file.size > MAX_FILE_SIZE_BYTES,
    );

    if (invalidFiles.length > 0) {
      const typeErrors = invalidFiles
        .filter((file) => !acceptType?.includes(file.type))
        .map((file) => `${file.name} (unsupported type)`);

      const sizeErrors = invalidFiles
        .filter((file) => file.size > MAX_FILE_SIZE_BYTES)
        .map(
          (file) =>
            `${file.name} (size ${(file.size / (1024 * 1024)).toFixed(
              2,
            )}MB exceeds ${MAX_FILE_SIZE_MB}MB)`,
        );

      const errorMessages = [...typeErrors, ...sizeErrors].join(", ");
      setError(`Invalid file(s): ${errorMessages}`);
      return;
    } else {
      setError(null);
    }

    if (!validFiles.length) return;

    const fileList = await getListFiles(files, DEFAULT_DATA_URL_KEY);
    if (!fileList.length) return;
    const fileListWithProgress = fileList.map((file) => ({
      ...file,
      progress: 0,
      status: "Uploading...",
    }));

    // let updatedFileList: ImageInputFiles;
    let updatedFileList: any;

    const updatedIndexes: number[] = [];
    if (keyUpdate > DEFAULT_NULL_INDEX) {
      const [firstFile] = fileListWithProgress;
      updatedFileList = [...inValue];
      updatedFileList[keyUpdate] = firstFile;
      updatedIndexes.push(keyUpdate);
    } else if (multiple) {
      updatedFileList = [...inValue, ...fileListWithProgress];
      for (let i = inValue.length; i < updatedFileList.length; i += 1) {
        updatedIndexes.push(i);
      }
    } else {
      updatedFileList = [fileListWithProgress[0]];
      updatedIndexes.push(0);
    }
    onChange?.(updatedFileList, updatedIndexes);
    // simulate upload progress per file
    updatedIndexes.forEach((i) => {
      let val = 0;
      const interval = setInterval(() => {
        val += 10;
        const newList = [...updatedFileList];
        newList[i] = {
          ...newList[i],
          progress: val,
          status: val >= 100 ? "Completed" : "Uploading...",
        };
        onChange?.(newList, [i]);
        if (val >= 100) clearInterval(interval);
      }, 100);
    });
  };

  const onImageRemove = (index: number | number[]): void => {
    const updatedList = [...inValue];
    if (Array.isArray(index)) {
      index.forEach((i) => {
        updatedList.splice(i, 1);
      });
    } else {
      updatedList.splice(index, 1);
    }
    onChange?.(updatedList);
  };

  const onImageUpdate = (index: number): void => {
    setKeyUpdate(index);
    onImageUpload();
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  };

  const handleDragOut = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleChange(e.dataTransfer.files);
    }
  };

  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.clearData();
  };

  const onImageRemoveAll = () => {
    setError(null);
    onChange?.([]);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={getAcceptTypeString(acceptType)}
        className="hidden"
        onChange={(e) => {
          onInputChange(e);
        }}
      />
      {children?.({
        fileList: inValue,
        onImageUpload,
        onImageRemove,
        onImageUpdate,
        onImageRemoveAll,
        progress: progress,
        uploadStatus: uploadStatus,
        dragProps: {
          onDrop: handleDrop,
          onDragEnter: handleDragIn,
          onDragLeave: handleDragOut,
          onDragOver: handleDrag,
          onDragStart: handleDragStart,
        },
        isDragging,
        error,
      })}
    </>
  );
}
