export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
        facebook: string;
        twitter: string;
        github: string;
        youtube: string;
        linkedin: string;
        instagram: string;
    };
}

const siteConfig: SiteConfig = {
    siteName: "Explorer",
    description: "A minimal and lovely blog which shares experiences and cities around world",
    currentlyAt: "Budapest",
    socialLinks: {
        facebook: "https://es-la.facebook.com/",
        twitter: "https://twitter.com/?lang=es",
        github: "https://github.com/",
        youtube: "https://www.youtube.com/",
        linkedin: "https://co.linkedin.com/",
        instagram: "https://www.instagram.com/"
    },
};

export default siteConfig;