"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import ReactMarkdown from "react-markdown";

function parseTags(input: string) {
  return input
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);
}

export default function MarkdownEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagsInput(e.target.value);
    setTags(parseTags(e.target.value));
  };

  const removeTag = (tagToRemove: string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
    setTagsInput(newTags.join(", "));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, tags }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to publish article.");
      } else {
        setSuccess("Article published successfully!");
        setTitle("");
        setContent("");
        setTagsInput("");
        setTags([]);
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          placeholder="Enter article title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="tags">Tags (comma separated)</Label>
        <Input
          id="tags"
          placeholder="e.g. nextjs, react, supabase"
          value={tagsInput}
          onChange={handleTagsChange}
          className="mt-1"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium"
            >
              {tag}
              <button
                type="button"
                className="ml-1 text-blue-500 hover:text-blue-800"
                onClick={() => removeTag(tag)}
                aria-label={`Remove tag ${tag}`}
              >
                &times;
              </button>
            </span>
          ))}
        </div>
      </div>
      {/* Side-by-side editor and preview */}
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        {/* Editor */}
        <div className="flex-1 flex flex-col">
          <Label htmlFor="content">Content (Markdown)</Label>
          <textarea
            id="content"
            placeholder="Write your article in markdown..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full rounded-md border border-[#30363d] bg-[#161b22] text-white px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2f81f7] mt-1 min-h-[260px] font-mono resize-y"
            rows={12}
            required
          />
        </div>
        {/* Preview */}
        <div className="flex-1 flex flex-col">
          <Label className="mb-1">Preview</Label>
          <div className="w-full min-h-[260px] rounded-md border border-[#30363d] bg-[#161b22] px-4 py-3 prose prose-slate dark:prose-invert max-w-none overflow-auto">
            <ReactMarkdown>
              {content || "Nothing to preview yet."}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button type="submit" className="ml-auto" disabled={loading}>
          {loading ? "Publishing..." : "Publish Article"}
        </Button>
      </div>
      {success && <div className="text-green-500 font-medium">{success}</div>}
      {error && <div className="text-red-500 font-medium">{error}</div>}
    </form>
  );
}
