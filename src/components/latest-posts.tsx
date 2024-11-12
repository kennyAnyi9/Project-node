//we get the posts from utils
// we sort tham by the date
// we map over them and return the title

import { formatDate, getBlogPosts } from "@/app/blog/utils"
import Link from "next/link"


export const LatestPosts = ()=>{
  const latestPosts = getBlogPosts()
  return (
    <>
    <h1>Recently Published Posts</h1>
   {latestPosts.sort((a,b)=>a.metadata.publishedAt - b.metadata.publishedAt).map((post)=>(
    <article className="text-wrap max-w-md my-10" key={post.slug}>
      <Link href={"#"}>
     <h3 className="font-bold py-2 leading-5 hover:text-blue-400"> {post.metadata.title}</h3>
      </Link>
      <p className="leading-8 my-5">{post.metadata.summary}</p>
      <p className="text-sm text-muted-foreground">{formatDate(post.metadata.publishedAt)}</p>


    </article>
   ))}
    </>
  )
}
