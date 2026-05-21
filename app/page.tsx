import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-5xl w-[95%] mx-auto">
        <div className="flex gap-28 items-center justify-center mt-20">
          <div>
            <h1 className="[font-family:var(--font-crimson-text)] text-[var(--color-brown-100)] text-5xl">
              Organize your favorite Kindle highlights in one place
            </h1>
            <p className="text-[var(--color-brown-400)]">
              Save, browse, and revisit the most important passages from your
              books. All neatly organized in one place
            </p>
            <Link
              href="/books"
              className="block mx-auto mt-12 w-fit bg-[var(--color-brown-700)] text-white text-lg px-3 py-0.5 rounded-full ">
              Start managing your highlights
            </Link>
          </div>
          <Image
            src="/kindle.png"
            alt="kindle e-reader"
            width={250}
            height={300}
            className="brightness-75"
          />
        </div>

        <div className="grid grid-cols-3 gap-1 my-40">
          <div className="bg-[var(--color-brown-950)] p-3 rounded">
            <span className=""></span>
            Better organization of your knowledge: keep the most important book
            passages stored and searchable, not just in your memory
          </div>
          <div className="bg-[var(--color-brown-950)] p-3 rounded">
            <span className=""></span>
            All your highlights in one place, so you can quickly revisit the
            most valuable quotes and passages from your books
          </div>
          <div className="bg-[var(--color-brown-950)] p-3 rounded">
            <span className=""></span>
            Easily rediscover what inspired you most in a book and why it
            mattered even months after reading it
          </div>
        </div>

        <div>
          <h3 className="[font-family:var(--font-crimson-text)] text-3xl">
            How it works
          </h3>
          <p className="text-[var(--color-brown-400)]">
            Organizing your Kindle highlights takes just a few clicks
          </p>
          <ol className="grid grid-cols-2 mt-3">
            <li>
              <h4 className="text-[var(--color-brown-700)] [font-family:var(--font-crimson-text)] text-2xl">
                step 1
              </h4>
              <p>
                On your Kindle, export your highlights file (for example My
                Clippings.txt)
              </p>
            </li>
            <li>
              <h4 className="text-[var(--color-brown-700)] [font-family:var(--font-crimson-text)] text-2xl">
                step 2
              </h4>
              <p>
                Go to the app and upload your file. The app will automatically
                organize your highlights by book
              </p>
            </li>
          </ol>
        </div>

        <Link
          href="/books"
          className="block mx-auto mt-32 w-fit bg-[var(--color-brown-700)] text-white text-lg px-3 py-0.5 rounded-full">
          See your highlights
        </Link>
      </main>
    </>
  );
}
