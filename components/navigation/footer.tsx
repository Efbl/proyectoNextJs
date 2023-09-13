import React from 'react'
import PaddingContainer from '../layout/padding-container'
import siteConfig from '@/config/site'
import SocialLink from '../elements/social-link'
import Link from 'next/link'

export default function Footer () {
  return (
    <div className="py-8 border-t-2 mt-10">
        <PaddingContainer>
            <div>
                <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
                <p className="max-w-md mt-2 text-lg text-neutral-700">{siteConfig.description}</p>
            </div>
            {/* Seccion aparte lara socialmedia y currentlyAt*/}
            <div className="flex justify-between gap-4 flex-wrap mt-6">
                <div>
                    <div className=" text-lg font-medium">#exploretheworld</div>
                    <div className="flex items-center gap-3 mt-2 text-neutral-600">
                        
                        <SocialLink platform="facebook" link={siteConfig.socialLinks.facebook}/>
                        <SocialLink platform="twitter" link={siteConfig.socialLinks.twitter}/>
                        <SocialLink platform="instagram" link={siteConfig.socialLinks.facebook}/>
                        <SocialLink platform="youtube" link={siteConfig.socialLinks.youtube}/>
                        <SocialLink platform="linkedin" link={siteConfig.socialLinks.linkedin}/>
                        <SocialLink platform="github" link={siteConfig.socialLinks.github}/>
                    </div>
                    
                </div>
                <div>
                   <div className="text-sm text-neutral-500">Currently At</div>
                   <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md">
                        
                        <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                        {siteConfig.currentlyAt}
                   </div>
                </div>
            </div>
            {/* Seccion de los botones */}
            <div className='mt-2 py-3 border-t flex flex-wrap justify-between items-center gap-4 '>
                <div className="text-sm text-neutral-500">All rights are reserved | Copyright {new Date().getFullYear()}</div>
            
                <div className="text-sm">Made by {""}
                    <Link className="underline underline-offset-4" href="https://twitter.com">@EFBL</Link>
                </div>
            </div>
        </PaddingContainer>
    </div>
  )
}

