import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className="max-w-4xl mx-auto sm:px-6 px-4">{children}</div>;
}
