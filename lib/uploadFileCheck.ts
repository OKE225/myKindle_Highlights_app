"use server";

const maxSize = 2.5 * 1024 * 1000; // 3 MB

export async function uploadFileCheck(file: File | null) {
  if (!file) {
    return { ok: false, error: "No file selected" };
  }

  if (file.size > maxSize) {
    return {
      ok: false,
      error: "File must be no larger than 2.5 MB",
    };
  }

  const isTxt = file.name.toLowerCase().endsWith(".txt");
  if (!isTxt) {
    return {
      ok: false,
      error: "Only .txt files are allowed",
    };
  }

  return { ok: true, error: "" };
}
