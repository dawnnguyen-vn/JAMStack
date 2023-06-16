import { Container } from "@/components/shared/Container";
import Image from "next/image";
import { marked } from "marked";

export default async function BlogDetails() {
  const res = await fetch("http://backend:1337/api/blogs", {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 657ca2bcd8e68705483b7b90ca1754d64b10f7d3b980b3b6b74972a62d48359e48141436bf71bd3aa39ad691748fc5d18cfbc75579f76f299d016ebbde98eb28f5e78c0a7804def0f460b5b725d107740c2edaa8ede86cc4bb8cf2c139fabdf7132569a7ab6b2cbf866a938caaf712e156705fabcc2c94dc9a481ac527671eab",
    },
  });
  const { data } = await res.json();

  return (
    <main className="py-20">
      <Container>
        <h1 className="text-4xl font-bold mb-3">Next.js 13.4</h1>
        <p className="text-gray-600 mb-6">Friday, May 5th 2023 (30 days ago)</p>
        <p>
          Learn to create a blog website using Strapi for the back-end and
          Next.js for the front-end.
        </p>
        <div className="w-full h-[1px] my-10 bg-gray-200"></div>
        <div>
          <Image
            className="w-full"
            alt="Featured image"
            src="/feature.png"
            width={896}
            height={400}
          />
        </div>
        <div className="my-10">
          <p className="mb-4">
            Next.js 13.4 is a foundational release, marking stability for the
            App Router:
          </p>
          <ul className="text-sm list-outside pl-10 flex flex-col gap-1">
            <li>
              <a
                className="text-blue-600 hover:text-blue-400"
                href="#tieu-de-1"
              >
                Tiêu đề 1
              </a>
            </li>
            <li>
              <a
                className="text-blue-600 hover:text-blue-400"
                href="/blog/abc-def#tieu-de-2"
              >
                Tiêu đề 2
              </a>
            </li>
            <li>
              <a
                className="text-blue-600 hover:text-blue-400"
                href="/blog/abc-def#tieu-de-3"
              >
                Tiêu đề 3
              </a>
            </li>
          </ul>
        </div>
        {/* <div>
          Since the release of Next.js 13 six months ago, we've been focused on
          building the foundations for the future of Next.js—App Router—in a way
          that can be incrementally adopted without unnecessary breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. Since the release of Next.js 13 six months ago, we've
          been focused on building the foundations for the future of Next.js—App
          Router—in a way that can be incrementally adopted without unnecessary
          breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. Since the release of Next.js 13 six months ago, we've
          been focused on building the foundations for the future of Next.js—App
          Router—in a way that can be incrementally adopted without unnecessary
          breaking
          <br />
          <a className="text-yellow-400" href="#tieu-de-1">
            <h3 id="tieu-de-1">Tiêu đề 1</h3>
          </a>
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. Since the release of Next.js 13 six months ago, we've
          been focused on building the foundations for the future of Next.js—App
          Router—in a way that can be incrementally adopted without unnecessary
          breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. Since the release of Next.js 13 six months ago, we've
          been focused on building the foundations for the future of Next.js—App
          Router—in a way that can be incrementally adopted without unnecessary
          breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. Since the release of Next.js 13 six months ago, we've
          been focused on building the foundations for the future of Next.js—App
          Router—in a way that can be incrementally adopted without unnecessary
          breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. Since the release of Next.js 13 six months ago, we've
          been focused on building the foundations for the future of Next.js—App
          Router—in a way that can be incrementally adopted without unnecessary
          breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. and global web. Since the release of Next.js 13 six
          months ago, we've been focused on building the foundations for the
          future of Next.js—App Router—in a way that can be incrementally
          adopted without unnecessary breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          <a className="text-yellow-400" href="#tieu-de-2">
            Tiêu đề 2
          </a>
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. and global web. Since the release of Next.js 13 six
          months ago, we've been focused on building the foundations for the
          future of Next.js—App Router—in a way that can be incrementally
          adopted without unnecessary breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. and global web. Since the release of Next.js 13 six
          months ago, we've been focused on building the foundations for the
          future of Next.js—App Router—in a way that can be incrementally
          adopted without unnecessary breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. and global web. Since the release of Next.js 13 six
          months ago, we've been focused on building the foundations for the
          future of Next.js—App Router—in a way that can be incrementally
          adopted without unnecessary breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. and global web. Since the release of Next.js 13 six
          months ago, we've been focused on building the foundations for the
          future of Next.js—App Router—in a way that can be incrementally
          adopted without unnecessary breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. and global web. Since the release of Next.js 13 six
          months ago, we've been focused on building the foundations for the
          future of Next.js—App Router—in a way that can be incrementally
          adopted without unnecessary breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          <a className="text-yellow-400" href="#tieu-de-3">
            Tiêu đề 3
          </a>
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. and global web. Since the release of Next.js 13 six
          months ago, we've been focused on building the foundations for the
          future of Next.js—App Router—in a way that can be incrementally
          adopted without unnecessary breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. and global web. Since the release of Next.js 13 six
          months ago, we've been focused on building the foundations for the
          future of Next.js—App Router—in a way that can be incrementally
          adopted without unnecessary breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web. and global web. Since the release of Next.js 13 six
          months ago, we've been focused on building the foundations for the
          future of Next.js—App Router—in a way that can be incrementally
          adopted without unnecessary breaking
          <br />
          changes. Today, with the release of 13.4, you can now start adopting
          the App Router for production. npm i next@latest react@latest
          <br />
          react-dom@latest eslint-config-next@latest Next.js App Router We
          released Next.js in 2016 to provide an easy way to server-render React
          applications, with our goal to create a more dynamic, personalized,
          <br />
          and global web.
        </div> */}
        <div
          dangerouslySetInnerHTML={{
            __html: marked(data[0].content),
          }}
        ></div>
      </Container>
    </main>
  );
}
