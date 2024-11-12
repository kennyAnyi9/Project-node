import { LatestPosts } from "@/components/latest-posts";
import { MainNav } from "@/components/main-nav";

export default function Home() {
  return (
   <>
   <MainNav/>
   <main>
    <LatestPosts/>
    </main>

   </>
  );
}
