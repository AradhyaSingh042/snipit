"use client";

import { CodeBlock } from "@/components/ui/code-block";
import { CodeSnippetBlockProps } from "@/types/interface";

export const CodeSnippetBlock: React.FC<CodeSnippetBlockProps> = ({
  code,
  language,
}) => {
  return (
    <div className="max-w-3xl overflow-y-scroll max-h-52 mt-4 mx-auto w-full">
      <CodeBlock
        language={language}
        filename=""
        highlightLines={[9, 13, 14, 18]}
        code={code}
      />
    </div>
  );
};
