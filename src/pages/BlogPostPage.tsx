import { GovButton, GovContainer, GovIcon } from "@gov-design-system-ce/react";
import { useParams } from "react-router-dom";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";
import { formatBlogDate, getBlogPost } from "../lib/blogs";

function BlogPostPage() {
  const { slug = "" } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-canvas font-sans text-ink">
        <Header />
        <main className="py-16">
          <GovContainer className="w-full max-w-225 px-4 lg:px-6">
            <h1 className="mb-4 text-4xl font-medium">Článek nebyl nalezen</h1>
            <GovButton href="/" type="outlined" color="primary" size="m">
              Zpět na úvodní stránku
            </GovButton>
          </GovContainer>
        </main>
        <Footer />
      </div>
    );
  }

  const { Content } = post;

  return (
    <div className="min-h-screen bg-canvas font-sans text-ink">
      <Header />
      <main className="py-8 md:py-12">
        <GovContainer className="w-full max-w-225 px-4 lg:px-6">
          <GovButton
            className="mb-8"
            href="/#novinky"
            type="base"
            color="primary"
            size="s"
            iconStart={
              <GovIcon
                type="components"
                name="chevron-left"
                size="s"
                color="primary"
              />
            }
          >
            Zpět na novinky
          </GovButton>

          <article className="rounded-lg bg-white p-6 shadow-sm md:p-10 [&_a]:text-brand [&_a]:underline [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-brand [&_blockquote]:pl-4 [&_code]:rounded [&_code]:bg-surface-subtle [&_code]:px-1.5 [&_code]:py-0.5 [&_h1]:mb-6 [&_h1]:text-4xl [&_h1]:font-medium [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-medium [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-medium [&_h6]:mb-2 [&_h6]:mt-5 [&_li]:mb-1 [&_ol]:my-4 [&_ol]:list-decimal [&_p]:my-4 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-surface-subtle [&_pre]:p-4 [&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-border-default [&_td]:p-3 [&_th]:border [&_th]:border-border-default [&_th]:bg-surface-subtle [&_th]:p-3 [&_ul]:my-4 [&_ul]:list-disc">
            <div className="mb-6 flex items-center gap-2 text-sm text-muted">
              <GovIcon
                type="components"
                name="calendar-event"
                size="s"
                color="neutral"
              />
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            </div>
            <Content />
          </article>
        </GovContainer>
      </main>
      <Footer />
    </div>
  );
}

export default BlogPostPage;
