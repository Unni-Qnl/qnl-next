export interface ImageInputFile {
  dataURL?: string;
  file?: File;
  // [key: string]: any;
  progress?: number; // add progress
  status?: "idle" | "Uploading..." | "Completed" | "error"; // add status
}

export type ImageInputFiles = ImageInputFile[];

export interface ImageInputExport {
  fileList: ImageInputFiles;
  onImageUpload: () => void;
  onImageRemoveAll: () => void;
  onImageUpdate: (index: number) => void;
  onImageRemove: (index: number) => void;
  isDragging: boolean;
  uploadStatus: "idle" | "Uploading..." | "Completed";
  progress: number;
  dragProps: {
    onDrop: (e: any) => void;
    onDragEnter: (e: any) => void;
    onDragLeave: (e: any) => void;
    onDragOver: (e: any) => void;
    onDragStart: (e: any) => void;
  };
  error: any;
}

export type FileProgress = {
  name: string;
  progress: number;
  status: "idle" | "uploading" | "complete" | "error";
};
