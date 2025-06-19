"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Blog {
  id: number;
  tittle: string;
  content: string;
}

export default function BlogComponent() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [tittle, setTittle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const res = await fetch("/api/articles");
    const data = await res.json();
    setBlogs(data ?? []);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tittle, content }),
    });
    setTittle("");
    setContent("");
    setLoading(false);
    fetchBlogs();
  }

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start bg-gradient-to-b from-[#f5fafd] to-[#eaf3fb] py-10 px-2 sm:px-4">
      <Card className="w-full max-w-2xl mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Create a Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              placeholder="Title"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
              required
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              rows={4}
              required
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Posting..." : "Post Blog"}
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="w-full max-w-2xl space-y-6">
        {blogs.length === 0 ? (
          <div className="text-center text-gray-500">No blogs yet.</div>
        ) : (
          blogs.map((blog) => (
            <Card key={blog.id} className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{blog.tittle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="whitespace-pre-line text-gray-700">
                  {blog.content}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
