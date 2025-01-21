'use client'

import { IoAddOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateTagField from "../client-side/create-tag-field";

const TagDialogBox = () => {
  return (
    <Dialog defaultOpen={false}>
      <DialogTrigger className="text-white bg-black flex flex-row items-center gap-2 py-1 px-3 rounded-md">
        <IoAddOutline className="scale-110 text-white" />
        <span>Tag</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col space-y-7">
          <DialogTitle className="tracking-wide text-gray-600 font-bold">
            Add New Tag
          </DialogTitle>
          <CreateTagField />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TagDialogBox;
