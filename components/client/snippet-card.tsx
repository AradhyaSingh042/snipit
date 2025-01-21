'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";
import { CodeSnippetBlock } from "./code-block-demo";
import { format } from "date-fns";
import { SnippetCardProps } from "@/types/interface";
import { sidebarLanguages } from "@/lib/sidebar";
import { IconType } from "react-icons/lib";
import FavoriteButton from "../client-side/favorite-button";
import TrashButton from "../client-side/trash-button";

const SnippetCard: React.FC<SnippetCardProps> = ({
  id,
  title,
  description,
  language,
  code,
  createdAt,
  tags,
  isFavorite,
  isDeleted,
}) => {
  const date = format(createdAt, "PP");
  const snippetLanguage = sidebarLanguages.find(
    (lang) => lang.title.toLowerCase() === language
  );

  const Icon = snippetLanguage?.icon as IconType;

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-base font-semibold tracking-wide">
            {title}
          </CardTitle>
          <FavoriteButton isFavorite={isFavorite} snippetId={id} />
        </CardHeader>
        <CardContent className="flex flex-col">
          <p className="text-gray-500 text-sm -mt-4">{date}</p>
          <div className="tags-container mt-3 flex flex-row -space-x-7 items-center w-full">
            {tags.map((tag, index) => {
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="scale-75 bg-slate-200 -ml-5"
                >
                  {tag.name}
                </Button>
              );
            })}
          </div>

          <p className="mt-4 text-sm text-gray-600">{description}</p>

          <CodeSnippetBlock code={code} language={language} />
        </CardContent>
        <CardFooter className="w-full flex justify-between items-center">
          <div className="flex flex-row gap-2 items-center text-gray-500 ">
            <Icon />
            <span className="capitalize text-sm mt-[1px] font-semibold tracking-wide">
              {language}
            </span>
          </div>

          <TrashButton snippetId={id} isDeleted={isDeleted} />
        </CardFooter>
      </Card>
    </>
  );
};

export default SnippetCard;
