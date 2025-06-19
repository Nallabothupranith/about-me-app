import MarkdownEditor from "@/components/markdown-editor";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function CreateArticlePage() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-start bg-[#181a20] py-10 px-2 sm:px-4">
      <Card className="w-full max-w-4xl mb-8 shadow-lg bg-[#161b22] border border-[#30363d]">
        <CardHeader>
          <CardTitle className="text-2xl text-white">
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
