import { GovCard, GovIcon } from "@gov-design-system-ce/react";
import { newsContent } from "../../../data/home/news";
import { blogPosts, formatBlogDate } from "../../../lib/blogs";

function News() {
  return (
    <section className="scroll-mt-scroll-section lg:scroll-mt-scroll-section-desktop flex flex-col gap-3" id="novinky">
      <h2 className="tracking-heading m-0 text-2xl! font-medium">
        {newsContent.title}
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:pl-4 md:grid-cols-news md:gap-x-8 lg:grid-cols-2 lg:gap-x-4">
        {blogPosts.map((post) => (
          <GovCard
            className="min-h-33.5"
            direction="vertical"
            href={`/novinky/${post.slug}`}
            key={post.slug}
          >
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <GovIcon
                type="components"
                name="calendar-event"
                size="xs"
                color="neutral"
              />
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            </div>
            <h3 className="mb-0 mt-3 text-lg! font-medium">{post.title}</h3>
            <p className="mb-0 mt-2 text-sm">{post.summary}</p>
          </GovCard>
        ))}
      </div>
    </section>
  );
}

export default News;
