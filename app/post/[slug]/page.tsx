import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA";
import CtaCard from "@/components/elements/cta-card";
import SocialLink from "@/components/elements/social-link";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
import PostHero from "@/components/post/post-hero";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
    return DUMMY_CATEGORIES.map((post) => {
        return {
            slug: post.slug
        };
    });
};


export default function Page({params}: {
    params: {
        slug: string;
    }
}) {

    const post = DUMMY_POSTS.find((post) => post.slug === params.slug )

    if(!post){
        notFound();
    }

  return (

    <div>
        <PaddingContainer>
            <div className="space-y-10">
                <PostHero post={post}/>
                <div className="flex mt-10 flex-col md:flex-row gap-10">
                    <div className="relative">
                    <div className="sticky flex items-center gap-5 md:flex-col top-20">
                        <div className=" font-medium md:hidden">Share this content:</div>
                        <SocialLink
                            isShareURL
                            platform="facebook"
                            link={`https://www.facebook.com/sharer/sharer.php?u=${
                                `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}        
                        />
                        <SocialLink
                            isShareURL
                            platform="twitter"
                            link={`https://www.twitter.com/itent/tweet?url=${
                                `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}        
                        />
                        <SocialLink
                            isShareURL
                            platform="linkedin"
                            link={`https://www.linkedin.com/shareArticle?mini=true?url=${
                                `${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}        
                        />
                        
                    </div>
                    </div>
                    
                    <PostBody body={post.body}/>
                </div>
                <CtaCard />
            </div>
            
        </PaddingContainer>
    </div>
  )
}

