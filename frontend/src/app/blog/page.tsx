import { Blog } from "@/components/pages/Blog";

export default async function Home() {
  return (
    <main className="py-20">
      <div>
        <h1 className="text-4xl font-bold text-center lg:mb-20 mb-10">Blog</h1>
        <div>
          <Blog />
          <Blog />
        </div>
      </div>
    </main>
  );
}
