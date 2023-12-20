import { BLOG_TITLE } from "@/constants";
import { getBlogPostList } from "@/helpers/file-helpers";
import { NextResponse } from "next/server";
import RSS from "rss";

const baseUrl = "http://localhost:3000"

export async function GET() {
    const blogs = await getBlogPostList();
    const feed = new RSS({title: BLOG_TITLE, description: "A wonderful blog about JavaScript", feed_url: `${baseUrl}/rss.xml`, site_url: baseUrl});
    blogs.slice(0, 20).forEach(({title, abstract, slug, publishDate}) => {
        feed.item({title, description: abstract, date: publishDate, url: `${baseUrl}/${slug}`})
    })

    return new NextResponse(feed.xml(), {"headers": {"Content-Type": "application/xml"}})
}
