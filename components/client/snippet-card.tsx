import { fetchTags } from "@/actions/action";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MdFavorite } from "react-icons/md";
import { Button } from "../ui/button";

const SnippetCard = async () => {
  const tags = await fetchTags();

  return (
    <>
      <Card className="w-[400px]">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Swap Elements in an Array</CardTitle>
          <MdFavorite className="text-gray-600 scale-125" />
        </CardHeader>
        <CardContent className="flex flex-col">
          <p className="text-gray-500 text-sm -mt-4">Jul 6</p>
          <div className="tags-container mt-3 flex flex-row -space-x-7 items-center w-full">
            {tags.map((tag, index) => {
              return (
                <Button
                  key={index}
                  variant="outline"
                  className="scale-75 bg-slate-200 -ml-4"
                >
                  {tag.name}
                </Button>
              );
            })}
          </div>

          <p className="mt-4 text-sm text-gray-600">
            This function takes an array and two indices as arguments. It
            creates a new array with the elements at the specified indices
            swapped, leaving the original array unchanged. This function is
            useful for.
          </p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
};

export default SnippetCard;
