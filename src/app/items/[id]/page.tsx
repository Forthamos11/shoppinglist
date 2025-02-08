export default function ItemModal({
    params: { id: itemId },
}: {
    params: { id: string };
}) {
    return (<div>{itemId}</div>);
}