import type { FieldValues, Path, UseFormSetError } from "react-hook-form";
import type z from "zod";

export const formatToTitleCase = (segment: string) => {
  return segment
    .split("-") // Split by hyphen
    .filter((word) => isNaN(Number(word))) // Remove numeric segments
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join with spaces
};

export function openInNewTab(url: string) {
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function sanitizeImageUrl(url: string): string {
  try {
    // Use encodeURI to encode unsafe characters (like (), &, spaces) but preserve slashes
    return encodeURI(url);
  } catch (e) {
    console.error("Failed to sanitize image URL:", url, e);
    return url; // Fallback to original if something fails
  }
}

export function setZodServerErrors<T extends z.ZodTypeAny>(
  errors: Record<string, string[]>,
  setError: UseFormSetError<z.infer<T> & FieldValues>,
) {
  for (const key in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, key)) {
      setError(key as Path<z.infer<T> & FieldValues>, {
        type: "manual",
        message: errors[key][0],
      });
    }
  }
}
