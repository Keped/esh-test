export type BlogPostContent = 
{
    title: string;
    content: string;
    createdAt: string;
    byLine: string;
    subTitle: string;
  };

export type BlogPost = {
    id: string;
    localizedData: {
        en: BlogPostContent
        he: BlogPostContent
    }
}