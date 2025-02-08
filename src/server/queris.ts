import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyPosts() {
    const user =await auth();

    if(!user.userId) throw new Error("Unauthorized");

}