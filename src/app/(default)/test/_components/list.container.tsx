import { List } from "./list";

type Props = {
  collection: string;
};

export async function ListContainer(props: Props) {
  const routes = await Promise.resolve([
    `/test/${props.collection}/1`,
    `/test/${props.collection}/2`,
    `/test/${props.collection}/3`,
  ]);

  return <List routes={routes} />;
}
