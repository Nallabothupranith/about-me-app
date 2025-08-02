import MarkdownEditor from "@/components/markdown-editor";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function CreateArticlePage() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start bg-gradient-to-br from-white via-[#e6e9fa] to-[#bfc7f7] py-10 px-2 sm:px-4">
      <Card className="w-full max-w-4xl mb-8 shadow-lg bg-white/90 dark:bg-[#161b22] border border-blue-100 dark:border-[#30363d]">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-700 dark:text-white">
            Create a New Article
          </CardTitle>
        </CardHeader>
        <CardContent>
          <MarkdownEditor />
        </CardContent>
      </Card>
    </div>
  );
}
