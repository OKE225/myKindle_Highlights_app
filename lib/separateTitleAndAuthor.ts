export const separateTitleAndAuthor = (bookTitle: string) => {
  const normalized = bookTitle.trim();

  const authorMatch = normalized.match(/^(.*)\s*\(([^)]+)\)$/);

  if (authorMatch) {
    const title = authorMatch[1].trim();
    const authorsRaw = authorMatch[2].trim();

    const authors = authorsRaw
      .split(/;\s*|,\s*| i /)
      .map((author) => author.trim().replace(/;$/, ""))
      .filter(Boolean);

    return {
      title,
      author: authors.length === 1 ? authors[0] : authors.join(", "),
    };
  }

  return { title: normalized, author: "" };
};
