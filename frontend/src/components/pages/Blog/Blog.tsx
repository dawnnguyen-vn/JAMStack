import { Container } from "@/components/shared/Container";
import Link from "next/link";

export function Blog() {
  return (
    <div className="py-10 border-t hover:shadow-3xl">
      <Container>
        <div className="flex flex-col gap-3">
          <Link href="/blog/abc-def">
            <h2 className="font-bold lg:text-2xl text-xl">Nextjs 13.4</h2>
          </Link>
          <p className="text-gray-600 text-sm">
            Friday, May 5th 2023 (25 days ago)
          </p>
          <p>
            Next.js 13.4 is a foundational release, marking stability for the
            App Router:
          </p>
          <ul className="text-sm list-outside pl-10 flex flex-col gap-1">
            <li className="">
              <Link className="text-blue-600 hover:text-blue-400" href="/xx">
                App Router (Stable)
              </Link>
            </li>
            <li className="">
              <Link className="text-blue-600 hover:text-blue-400" href="/xx">
                App Router (Stable)
              </Link>
            </li>
            <li className="">
              <Link className="text-blue-600 hover:text-blue-400" href="/xx">
                App Router (Stable)
              </Link>
            </li>
          </ul>
          <div className="mt-8 hover:bg-blue-100 w-fit rounded-sm">
            <Link className="font-medium text-blue-600" href="#">
              Read More ➜
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
