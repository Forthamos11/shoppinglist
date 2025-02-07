import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const MockItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
const Mockdata = MockItems.map((item, index) => ({
  id: index +1,
  name: item,
}));
export default async function HomePage() {
  
  const posts = await db.query.items.findMany({
    orderBy: (model, { asc }) => asc(model.name),
  });
  console.log(posts);

  return (
    <main>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name} (100g)
          <li key={post.id}>
            <ul>Calories: {post.calories}</ul>
            <ul>Fat: {post.fat}</ul>
            <ul>Carbs: {post.carbs}</ul>
            <ul>Protein: {post.protein}</ul>
          </li>
          </div>
        ))} 
      </div>
    </main>
  );
}
