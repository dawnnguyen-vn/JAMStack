import { Container } from "@/components/shared/Container";
import { Repository, RepositoryProps } from "@/components/pages/Repository";

type Projects = {
  data: RepositoryProps[];
};

export default async function Projects() {
  const res = await fetch("http://backend:1337/api/projects?populate=*", {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 657ca2bcd8e68705483b7b90ca1754d64b10f7d3b980b3b6b74972a62d48359e48141436bf71bd3aa39ad691748fc5d18cfbc75579f76f299d016ebbde98eb28f5e78c0a7804def0f460b5b725d107740c2edaa8ede86cc4bb8cf2c139fabdf7132569a7ab6b2cbf866a938caaf712e156705fabcc2c94dc9a481ac527671eab",
    },
  });
  const { data } = await res.json();

  return (
    <main className="py-20">
      <div>
        <h1 className="text-4xl font-bold text-center lg:mb-20 mb-10Z">
          Projects
        </h1>
        <Container>
          <div className="grid lg:grid-cols-2 gap-5">
            {data.map((item: any) => (
              <Repository
                key={item.id}
                name={item.name}
                url={item.url}
                programming_languages={item.programming_languages}
              />
            ))}
          </div>
        </Container>
      </div>
    </main>
  );
}
