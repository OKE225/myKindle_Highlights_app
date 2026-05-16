import { createClient } from "./supabase/client";

export async function addBookWithHighlights(bookData: {
  title: string;
  author: string;
  highlights: { text: string; createdAt: Date }[];
}) {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || userError) {
    throw new Error(
      "Nie jesteś zalogowany: " + (userError?.message || "brak użytkownika"),
    );
  }

  const { data: book, error: bookError } = await supabase
    .from("books")
    .insert({
      user_id: user.id,
      title: bookData.title,
      author: bookData.author,
      highlights_count: bookData.highlights.length,
    })
    .select()
    .single();

  if (bookError) throw bookError;

  const highlightsToInsert = bookData.highlights.map((h) => ({
    book_id: book.id,
    text: h.text,
    createdAt: h.createdAt.toISOString(),
  }));

  if (highlightsToInsert.length > 0) {
    const { error: highlightsError } = await supabase
      .from("highlights")
      .insert(highlightsToInsert);

    if (highlightsError) throw highlightsError;
  }

  return book;
}

export async function getBooks() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("books")
    .select(
      `
      *,
      highlights (*)
    `,
    )
    .order("createdAt", { ascending: false });

  if (error) throw error;
  return data;
}

export async function deleteAllBooks() {
  const supabase = createClient();

  const { data: books } = await supabase.from("books").select("id");
  if (!books) return;

  for (const book of books) {
    await supabase.from("books").delete().eq("id", book.id);
  }
}
