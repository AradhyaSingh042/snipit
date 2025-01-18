"use client";

import { IoAddOutline } from "react-icons/io5";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSnippetStore } from "@/store/snippet";
import { useState } from "react";
import { createTag } from "@/actions/action";
import { useRouter } from "next/navigation";

const TagDialogBox = () => {
  const router = useRouter();

  const [tag, setTag] = useState<string>("");
  const { setTags } = useSnippetStore();

  return (
    <Dialog defaultOpen={false}>
      <DialogTrigger className="text-white bg-black flex flex-row items-center gap-2 py-1.5 px-3 rounded-md">
        <IoAddOutline className="scale-110 text-white" />
        <span>Tag</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col space-y-7">
          <DialogTitle className="tracking-wide text-gray-600 font-bold">
            Add New Tag
          </DialogTitle>

          <div className="tag-field flex flex-col space-y-3">
            <Label className="tracking-wide font-semibold text-gray-500">
              Tag Name
            </Label>
            <Input
              placeholder="eg. API Methods"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </div>

          <div className="buttons-container flex flex-row space-x-3 self-end">
            <DialogClose asChild>
              <Button variant="outline" className="bg-slate-300 tracking-wide">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                className="bg-teal-600 tracking-wide"
                onClick={(e) => {
                  setTags(tag);
                  createTag(tag);
                  router.refresh();
                }}
              >
                Add Tag
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TagDialogBox;
