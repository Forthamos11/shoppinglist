import Link from "next/link";
import { db } from "~/server/db";

export default async function Itementry() {

    const posts = await db.query.items.findMany({
        orderBy: (model, { asc }) => asc(model.name),
      });

    return(
        <div className="flex flex-col gap-4">
            {posts.map((post) => (
            <div key={post.id}>
                <Link href={`/items/${post.id}`}>
                <div>{post.name} (100g)
                    <li>
                    <ul>Calories: {post.calories}</ul>
                    <ul>Fat: {post.fat}</ul>
                    <ul>Carbs: {post.carbs}</ul>
                    <ul>Protein: {post.protein}</ul>
                    </li>
                </div> 
                </Link>
            </div>
            ))}
        </div>);}