type Props = {
  params: {
    all: string[];
  };
};

export default async function DetailsPage(props: Props) {
  const [collectionId, entryId, action] = props.params.all;

  if (action !== "_details") {
    return null;
  }
  return (
    <>
      <h3>Slot 2 Page</h3>
      <div>collectionId: {collectionId}</div>
      <div>entryId: {entryId}</div>
      <div>action: {action}</div>
    </>
  );
}
