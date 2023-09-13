import { Post } from "@/types/collection"
import PostContent from "./post-content";
import Image from "next/image";

interface PostHeroProps{
    post: Post;
}

export default function PostHero({post}: PostHeroProps) {
  return (
    <div>
        <PostContent isPostPage post={post}/>
        <Image className="rounded-md object-cover object-center h-[400px] md:h-[500px] mt-6"
               src={post.image} width={1280} height={700} alt={post.title}/>
    </div>
  )
}