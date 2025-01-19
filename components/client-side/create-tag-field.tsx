"use client";

import { DialogClose } from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createTag } from "@/actions/action";

const CreateTagField = () => {
  const router = useRouter();
  const [tag, setTag] = useState<string>("");

  return (
    <>
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
              createTag(tag).then(() => router.refresh());
            }}
          >
            Add Tag
          </Button>
        </DialogClose>
      </div>
    </>
  );
};

export default CreateTagField;
