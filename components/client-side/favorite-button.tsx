"use client";

import { useQueryClient } from '@tanstack/react-query';
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { Button } from "../ui/button";
import { setFavorite } from "@/actions/action";
import { useRouter } from "next/navigation";

interface FavoriteButtonProps {
  snippetId: string;
  isFavorite: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  snippetId,
  isFavorite,
}) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return (
    <>
      <Button
        onClick={(e) => {
          setFavorite(snippetId, !isFavorite).then(() => router.refresh());
          queryClient.refetchQueries()
        }}
        className="bg-transparent shadow-none border-none hover:bg-transparent"
      >
        {isFavorite ? (
          <MdFavorite className="text-gray-600 scale-125" />
        ) : (
          <MdFavoriteBorder className="text-gray-600 scale-125" />
        )}
      </Button>
    </>
  );
};

export default FavoriteButton;
