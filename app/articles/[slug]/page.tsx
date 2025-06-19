import { createClient } from "@/lib/supabase/server";
import ReactMarkdown from "react-markdown";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ArticlePageProps {
  params: { slug: string };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const supabase = await createClient();
  const { data: article, error } = await supabase
    .from("articles")
    .select("title, content, minutes_to_read, created_at, tags")
    .eq("slug", params.slug)
    .single();

  if (error || !article) {
    notFound();
  }

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#f5fafd] to-[#eaf3fb] py-10 px-2 sm:px-4">
      <div className="w-full max-w-2xl mb-4 flex">
        <Link href="/articles">
          <Button variant="outline">&larr; Back to Articles</Button>
        </Link>
      </div>
      <Card className="w-full max-w-2xl mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl mb-2">{article.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mb-2">
            {Array.isArray(article.tags) &&
              article.tags.length > 0 &&
              article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-block bg-blue-100 text-blue-700 rounded px-2 py-0.5 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
          </div>
          <div className="text-sm text-gray-500 flex gap-4">
            <span>{article.minutes_to_read} min read</span>
            <span>{new Date(article.created_at).toLocaleDateString()}</span>
          </div>
        </CardHeader>
        <CardContent className="prose max-w-none dark:prose-invert mt-4">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </CardContent>
      </Card>
    </div>
  );
}
