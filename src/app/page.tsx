import Link from "next/link";

const MockItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
const Mockdata = MockItems.map((item, index) => ({
  id: index +1,
  name: item,
}));
export default function HomePage() {
  return (
    <main>
      <div className="flex flex-col gap-4">
        {Mockdata.map((Mockdata) => (
          <li key={Mockdata.id}>
            <ul>{Mockdata.name}</ul>
          </li>
        ))}
      </div>
    </main>
  );
}
