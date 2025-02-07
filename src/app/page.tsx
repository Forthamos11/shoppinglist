import Link from "next/link";

const MockItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

export default function HomePage() {
  return (
    <main>
      <div>
        <li>
          <ul>
            {MockItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </li>
      </div>
    </main>
  );
}
