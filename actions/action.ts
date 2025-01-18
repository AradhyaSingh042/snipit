"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

interface SnippetData {
  title: string;
  tags: Array<{
    name: string;
  }>;
  description: string;
  language: string;
  code: string;
}

export const createTag = async (tag: string) => {
  const createdTag = await prisma.tag.create({
    data: {
      name: tag,
    },
  });
  fetchTags();
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

  fetchSnippets();
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
