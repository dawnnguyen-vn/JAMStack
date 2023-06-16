export type ProgrammingLanguageProps = {
  id?: number;
  name?: string;
  color?: string;
  createdAt?: string;
  updateAt?: string;
};

export function ProgrammingLanguage({
  name = "undefind",
  color = "black",
}: ProgrammingLanguageProps) {
  return (
    <div className="flex items-center">
      <span className={"w-4 h-4 rounded-full block " + color}></span>
      <span>{name}</span>
    </div>
  );
}
