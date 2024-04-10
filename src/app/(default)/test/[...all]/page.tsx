import { ListContainer } from "../_components/list.container";

type Props = {
  params: {
    all: string[];
  };
};

export default async function ListPage(props: Props) {
  const [collectionId, entryId, action] = props.params.all;

  return (
    <>
      <h3>Test Page</h3>
      <p>
        Click any link to see the app break. Remove the `loading.tsx`-file in
        the same directory as this file, and it works.
      </p>
      <ListContainer collection={collectionId} />
    </>
  );
}
