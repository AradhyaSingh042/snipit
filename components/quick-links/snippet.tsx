import SnippetCard from "../client/snippet-card";
import TagDialogBox from "../client/tag-dialog-box";
import { Button } from "../ui/button";
import { fetchSnippets, fetchTags } from "@/actions/action";

const Snippet = async () => {
  const tags = await fetchTags();
  const snippets = await fetchSnippets();

  return (
    <>
      <div className="heading-container w-full pt-4 pl-6">
        <h3 className="font-bold text-3xl tracking-wide capitalize">
          Overview
        </h3>
        <span className="text-gray-500 text-sm ml-[1px] tracking-wide">
          Manage your snippets collection
        </span>
      </div>

      <div className="tags-container mt-5 pl-6 flex flex-row space-x-4 items-center w-full">
        {tags.map((tag, index) => {
          return (
            <Button key={index} variant="outline" size="sm">
              {tag.name}
            </Button>
          );
        })}
        <TagDialogBox />
      </div>

      <div className="snippet-container mt-8 w-full grid grid-cols-2 gap-x-6 gap-y-8 px-6 mb-8">
        {snippets.map((snippet) => {
          return (
            <SnippetCard
              key={snippet.id}
              title={snippet.title as string}
              description={snippet.description as string}
              language={snippet.language as string}
              code={snippet.code as string}
              createdAt={snippet.createdAt}
              tags={snippet.tags}
            />
          );
        })}
      </div>
    </>
  );
};

export default Snippet;
