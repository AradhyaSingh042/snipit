'use client'

import { fetchDeletedSnippets } from "@/actions/action";
import TagList from "@/components/client-side/tag-list";
import SnippetCard from "@/components/client/snippet-card";
import { useDataStore } from "@/store/data";

import { useQuery } from "@tanstack/react-query";

const TrashSection = () => {
  let { data: deletedSnippets } = useQuery({
    queryKey: ["getTrashSnippets"],
    queryFn: () => {
      return fetchDeletedSnippets()
    },
  });

  const { filter } = useDataStore()

  if (filter) {
    deletedSnippets = deletedSnippets?.filter((snippet) => {
      return snippet.tags.find((tag) => tag.name === filter)
    })
  }

  return (
    <>
      <div className="heading-container w-full pt-4 pl-6">
        <h3 className="font-bold text-3xl tracking-wide capitalize">
          Trash
        </h3>
        <span className="text-gray-500 text-sm ml-[1px] tracking-wide">
          Manage your snippets collection
        </span>
      </div>

      <TagList />

      <div className="snippet-container mt-8 w-full grid grid-cols-2 gap-x-6 gap-y-8 px-6 mb-8">
        {deletedSnippets && deletedSnippets.map((snippet) => {
          return (
            <SnippetCard
              key={snippet.id}
              id={snippet.id}
              title={snippet.title as string}
              description={snippet.description as string}
              language={snippet.language as string}
              code={snippet.code as string}
              createdAt={snippet.createdAt}
              tags={snippet.tags}
              isFavorite={snippet.isFavorite}
              isDeleted={snippet.isDeleted}
            />
          );
        })}
      </div>
    </>
  );
};

export default TrashSection
