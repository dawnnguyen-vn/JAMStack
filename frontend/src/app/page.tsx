import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return (
    <main>
      <div className="h-[100vh] justify-center items-center flex flex-col gap-8">
        <ul className="flex gap-4 list-none">
          <li>
            <Link className="hover:text-black text-gray-600" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="hover:text-black text-gray-600" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="hover:text-black text-gray-600" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <h1 className="md:text-7xl sm:text-5xl text-4xl font-extrabold">
          dawnnguyen-vn
        </h1>
        <p className="text-gray-600">
          I&apos;m a Senior Fresher software engineer.
        </p>
      </div>
    </main>
  );
}
