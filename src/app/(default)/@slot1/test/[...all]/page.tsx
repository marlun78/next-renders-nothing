type Props = {
  params: {
    all: string[];
  };
};

export default async function EntryPage(props: Props) {
  const [collectionId, entryId, action] = props.params.all;

  if (!entryId) {
    return null;
  }
  return (
    <>
      <h3>Slot 1 Page</h3>
      <div>collectionId: {collectionId}</div>
      <div>entryId: {entryId}</div>
      <div>action: {action}</div>
    </>
  );
}
