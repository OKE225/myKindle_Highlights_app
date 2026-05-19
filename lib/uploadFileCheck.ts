"use server";

const maxSize = 2.5 * 1024 * 1000; // 3 MB

export async function uploadFileCheck(file: File | null) {
  if (!file) {
    return { ok: false, error: "Nie wybrano pliku" };
  }

  if (file.size > maxSize) {
    return {
      ok: false,
      error: "Plik może mieć maksymalnie 2.5 MB",
    };
  }

  const isTxt = file.name.toLowerCase().endsWith(".txt");
  if (!isTxt) {
    return {
      ok: false,
      error: "Dozwolony jest tylko plik z rozszerzeniem .txt",
    };
  }

  return { ok: true, error: "" };
}
