"use server";

import { prisma } from "@/lib/prisma";

export const createTag = async (tag: string) => {
  const createdTag = await prisma.tag.create({
    data: {
      name: tag,
    },
  });
};
