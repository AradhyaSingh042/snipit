"use server";

import { algoliaClient } from "@/config/algolia";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SnippetData } from "@/types/interface";
import { headers } from "next/headers";

export const createTag = async (tag: string) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const createdTag = await prisma.tag.create({
    data: {
      name: tag,
      user: {
        connect: {
          id: session?.user.id as string,
        },
      },
    },
  });

  await algoliaClient.saveObjects({
    indexName: "tags",
    objects: [
      {
        objectID: createdTag.id,
        name: createdTag.name,
        userId: session?.user.id,
      },
    ],
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

  await algoliaClient.saveObjects({
    indexName: "snippets",
    objects: [
      {
        objectID: createdSnippet.id,
        name: createdSnippet.title,
        userId: session?.user.id,
      },
    ],
  });
};

export const fetchTags = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const tags = await prisma.tag.findMany({
    where: {
      userId: session?.user.id as string,
    },
  });
  return tags;
};

export const fetchSnippets = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const snippets = await prisma.snippet.findMany({
    where: {
      userId: session?.user.id as string,
    },
    include: {
      tags: true,
    },
  });
  return snippets;
};

export const setFavorite = async (snippetId: string, isFavorite: boolean) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  await prisma.snippet.update({
    where: {
      id: snippetId,
      userId: session?.user.id as string,
    },
    data: {
      isFavorite,
    },
  });
};

export const moveToTrash = async (snippetId: string, isDeleted: boolean) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  await prisma.snippet.update({
    where: {
      id: snippetId,
      userId: session?.user.id as string,
    },
    data: {
      isDeleted: isDeleted,
    },
  });
};

export async function fetchFavoriteSnippets() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const favSnippets = await prisma.snippet.findMany({
    where: {
      isFavorite: true,
      userId: session?.user.id as string,
    },

    include: {
      tags: true,
    },
  });

  return favSnippets;
}

export async function fetchDeletedSnippets() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const deletedSnippets = await prisma.snippet.findMany({
    where: {
      isDeleted: true,
      userId: session?.user.id as string,
    },

    include: {
      tags: true,
    },
  });

  return deletedSnippets;
}
