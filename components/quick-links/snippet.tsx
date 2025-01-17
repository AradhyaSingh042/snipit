import { prisma } from "@/lib/prisma";
import TagDialogBox from "../client/tag-dialog-box";
import { Button } from "../ui/button";

const Snippet = async () => {
  const tags = await prisma.tag.findMany();

  return (
    <>
      <div className="heading-container w-full pt-4 pl-6">
        <h3 className="font-bold text-3xl tracking-wide capitalize">
          Overview
        </h3>
        <span className="text-gray-500 tracking-wide">
          Manage your snippets collection
        </span>
      </div>

      <div className="tags-container mt-8 pl-6 flex flex-row space-x-4 items-center w-full">
        {tags.map((tag, index) => {
          return (
            <Button key={index} variant="outline">
              {tag.name}
            </Button>
          );
        })}
        <TagDialogBox />
      </div>
    </>
  );
};

export default Snippet;
