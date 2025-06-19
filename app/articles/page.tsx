import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/components/logout-button";

function getUniqueTags(articles: { tags?: string[] }[]): string[] {
  const tagSet = new Set<string>();
  articles.forEach((a) => {
    if (Array.isArray(a.tags)) {
      a.tags.forEach((t: string) => tagSet.add(t));
    }
  });
  return Array.from(tagSet);
}

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams?: { tag?: string };
}) {
  const supabase = await createClient();
  // Fetch all articles to get all tags
  const { data: allArticles } = await supabase
    .from("articles")
    .select("tags")
    .order("created_at", { ascending: false });
  const uniqueTags = getUniqueTags(allArticles ?? []);

  // Filter by tag if present
  const tag = searchParams?.tag;
  let articles = [];
  let error = null;
  if (tag) {
    const { data, error: err } = await supabase
      .from("articles")
      .select("id, title, slug, content, minutes_to_read, created_at, tags")
      .contains("tags", [tag])
      .order("created_at", { ascending: false });
    articles = data ?? [];
    error = err;
  } else {
    const { data, error: err } = await supabase
      .from("articles")
      .select("id, title, slug, content, minutes_to_read, created_at, tags")
      .order("created_at", { ascending: false });
    articles = data ?? [];
    error = err;
  }

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start bg-[#181a20] py-10 px-2 sm:px-4">
      <div className="w-full max-w-2xl mb-4 flex flex-wrap gap-2 items-center">
        <span className="font-medium text-[#b3b8c5]">Filter by tag:</span>
        {uniqueTags.map((t) => (
          <Link
            key={t}
            href={`/articles?tag=${encodeURIComponent(t)}`}
            className={`px-3 py-1 rounded-full text-xs font-mono border transition-all duration-150 cursor-pointer shadow-sm
              ${
                t === tag
                  ? "bg-[#2f81f7] text-white border-[#2f81f7] hover:bg-[#1e5bbf]"
                  : "bg-[#21262d] text-[#2f81f7] border-[#30363d] hover:bg-[#2f81f7] hover:text-white"
              }
            `}
          >
            {t}
          </Link>
        ))}
        {tag && (
          <Link
            href="/articles"
            className="ml-2 text-xs text-[#b3b8c5] underline"
          >
            Clear
          </Link>
        )}
      </div>
      <div className="w-full max-w-2xl mb-6 flex justify-end gap-2">
        {user && (
          <>
            <Link href="/articles/create">
              <Button className="bg-[#2f81f7] hover:bg-[#1e5bbf] text-white font-semibold border border-[#2f81f7] rounded-xl shadow transition-all duration-150">
                Add Article
              </Button>
            </Link>
            <LogoutButton />
          </>
        )}
      </div>
      <div className="w-full max-w-2xl space-y-6">
        {error ? (
          <div className="text-red-500">Failed to load articles.</div>
        ) : !articles || articles.length === 0 ? (
          <div className="text-center text-[#b3b8c5]">No articles yet.</div>
        ) : (
          articles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="block"
            >
              <Card className="shadow-lg hover:shadow-2xl transition-shadow bg-[#161b22] border border-[#30363d] rounded-2xl group">
                <CardHeader>
                  <CardTitle className="text-xl flex flex-col sm:flex-row sm:items-center sm:justify-between text-white font-bold font-sans">
                    <span>{article.title}</span>
                    <span className="text-xs text-[#b3b8c5] font-normal mt-1 sm:mt-0">
                      {article.minutes_to_read} min read
                    </span>
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {Array.isArray(article.tags) &&
                      article.tags.length > 0 &&
                      article.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="inline-block px-3 py-1 rounded-full bg-[#21262d] border border-[#30363d] text-[#2f81f7] font-mono text-xs shadow-sm hover:bg-[#2f81f7] hover:text-white transition-all duration-150 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="whitespace-pre-line text-[#b3b8c5] line-clamp-3 font-sans">
                    {article.content.slice(0, 200)}
                    {article.content.length > 200 ? "..." : ""}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
