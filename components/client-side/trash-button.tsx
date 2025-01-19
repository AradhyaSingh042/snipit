"use client";

import React from "react";
import { Button } from "../ui/button";
import { FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { moveToTrash } from "@/actions/action";
import { FaTrashRestoreAlt } from "react-icons/fa";

interface TrashButtonProps {
  snippetId: string;
  isDeleted: boolean;
}

const TrashButton: React.FC<TrashButtonProps> = ({ snippetId, isDeleted }) => {
  const router = useRouter();

  return (
    <>
      <Button
        className="bg-transparent shadow-none border-none hover:bg-transparent"
        onClick={(e) => {
          moveToTrash(snippetId, !isDeleted).then(() => router.refresh());
        }}
      >
        {isDeleted ? (
          <FaTrashRestoreAlt className="text-red-600 scale-110" />
        ) : (
          <FaTrashAlt className="text-gray-600 scale-110" />
        )}
      </Button>
    </>
  );
};

export default TrashButton;
