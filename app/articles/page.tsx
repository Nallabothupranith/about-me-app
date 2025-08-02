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
  if (tag) {
    const { data } = await supabase
      .from("articles")
      .select("id, title, slug, content, minutes_to_read, created_at, tags")
      .contains("tags", [tag])
      .order("created_at", { ascending: false });
    articles = data ?? [];
  } else {
    const { data } = await supabase
      .from("articles")
      .select("id, title, slug, content, minutes_to_read, created_at, tags")
      .order("created_at", { ascending: false });
    articles = data ?? [];
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
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.length === 0 ? (
          <div className="glass-card p-6 sm:p-8 text-center text-base sm:text-lg text-gray-700 rounded-2xl shadow-lg w-full col-span-full">
            No articles found.
          </div>
        ) : (
          articles.map((article) => (
            <Card
              key={article.id}
              className="glass-card shadow-xl w-full rounded-2xl border border-blue-100/40 backdrop-blur-md bg-white/60 hover:scale-[1.02] transition-transform flex flex-col justify-between min-h-[260px]"
            >
              <CardHeader className="pb-2">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  {article.tags && article.tags.length > 0
                    ? article.tags[0]
                    : "General"}
                </div>
                <div className="text-xs text-gray-400 mb-1">
                  {article.created_at
                    ? new Date(article.created_at).toLocaleDateString()
                    : ""}
                </div>
                <CardTitle className="text-lg font-bold text-blue-800 leading-tight mb-1">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="break-words hover:underline"
                  >
                    {article.title}
                  </Link>
                </CardTitle>
                <div className="text-xs text-gray-600 mb-2">
                  {/* Author placeholder, replace with real author if available */}
                  By Anonymous
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="text-gray-700 mb-4 text-sm break-words">
                  {article.content?.slice(0, 120)}
                  {article.content?.length > 120 ? "..." : ""}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-500">
                    {article.minutes_to_read} min read
                  </span>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-blue-700 font-semibold hover:underline text-xs"
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
