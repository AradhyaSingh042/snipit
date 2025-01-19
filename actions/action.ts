"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SnippetData } from "@/types/interface";
import { headers } from "next/headers";

export const createTag = async (tag: string) => {
  const createdTag = await prisma.tag.create({
    data: {
      name: tag,
    },
  });
};

export const createSnippet = async ({
  title,
  tags,
  description,
  language,
  code,
}: SnippetData) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const findTags = await prisma.tag.findMany({
    where: {
      name: {
        in: tags.map((tag) => tag.name),
      },
    },
  });

  const createdSnippet = await prisma.snippet.create({
    data: {
      title,
      description,
      language,
      code,
      userId: session?.user.id as string,
      tags: {
        connect: findTags.map((tag) => ({ id: tag.id })),
      },
    },
    include: {
      tags: true,
    },
  });
};

export const fetchTags = async () => {
  const tags = await prisma.tag.findMany();
  return tags;
};

export const fetchSnippets = async () => {
  const snippets = await prisma.snippet.findMany({
    include: {
      tags: true,
    },
  });
  return snippets;
};

export const setFavorite = async (snippetId: string, isFavorite: boolean) => {
  await prisma.snippet.update({
    where: {
      id: snippetId,
    },
    data: {
      isFavorite,
    },
  });
};

export const moveToTrash = async (snippetId: string, isDeleted: boolean) => {
  await prisma.snippet.update({
    where: {
      id: snippetId,
    },
    data: {
      isDeleted: isDeleted,
    },
  });
};
