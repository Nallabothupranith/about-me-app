import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function ReadmePage() {
  // Read the file from the filesystem
  const filePath = path.join(process.cwd(), "README.md");
  const fileContent = fs.readFileSync(filePath, "utf8");

  return (
    <div className="prose dark:prose-invert max-w-3xl mx-auto p-8 bg-[#161b22] border border-[#30363d] rounded-2xl shadow-lg">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{fileContent}</ReactMarkdown>
    </div>
  );
}
