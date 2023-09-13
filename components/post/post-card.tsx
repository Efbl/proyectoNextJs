import { Post } from "@/types/collection"
import Image from "next/image";
import Link from "next/link";
import PostContent from "./post-content";

interface PostProps {
    post: Post;
    layout?: "vertical" | "horizontal";
    reverse?: boolean;
}

export default function PostCard({ post, layout="horizontal", reverse = false }: PostProps) {
  return <Link className={`@container ${layout === 'horizontal'
                            ? "grid items-center grid-cols-1 md:grid-cols-2 gap-10"
                            : "space-y-10"
                            }`}
                            href={`/post/${post.slug}`}
          >
            {/*Imagen del post */}
            <Image 
                className={`rounded-md w-full object-center object-cover h-full max-h-[300px] ${reverse ? "md:order-last" : ""}`}
                src={post.image}
                width={500}
                height={300}
                alt={post.title}/>
            {/* Contenido del post */}
            <div>
              <PostContent post={post}/>
            </div>
         </Link>
  
}