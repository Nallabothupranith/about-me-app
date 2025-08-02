import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
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
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start bg-gradient-to-br from-white via-[#e6e9fa] to-[#bfc7f7] py-6 px-2 sm:px-4">
      <div className="w-full max-w-2xl mb-4 flex flex-wrap gap-2 items-center">
        <span className="font-medium text-blue-700">Filter by tag:</span>
        {uniqueTags.map((t) => (
          <Link
            key={t}
            href={{ pathname: "/articles", query: { tag: t } }}
            className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs sm:text-sm hover:bg-blue-200 transition-all"
          >
            {t}
          </Link>
        ))}
      </div>
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {articles.length === 0 ? (
          <div className="glass-card p-6 sm:p-8 text-center text-base sm:text-lg text-gray-700 rounded-2xl shadow-lg">
            No articles found.
          </div>
        ) : (
          articles.map((article) => (
            <Card key={article.id} className="glass-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-blue-700">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="break-words"
                  >
                    {article.title}
                  </Link>
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {article.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-gray-700 mb-2 text-sm sm:text-base break-words">
                  {article.content?.slice(0, 120)}
                  {article.content?.length > 120 ? "..." : ""}
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
                  <span className="text-xs sm:text-sm text-gray-500">
                    {article.minutes_to_read} min read
                  </span>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="btn-primary w-full sm:w-auto text-center"
                  >
                    Read More
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
      <div className="w-full max-w-2xl flex justify-end mt-8">
        {user && <LogoutButton />}
      </div>
    </div>
  );
}
