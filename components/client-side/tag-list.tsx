'use client'
import { fetchTags } from '@/actions/action';
import { Button } from '../ui/button';
import { useQuery } from '@tanstack/react-query';
import TagDialogBox from '../client/tag-dialog-box';
import { useState } from 'react';
import { useDataStore } from '@/store/data';

const TagList = () => {
  const { setFilter } = useDataStore()

  const { data: tags, refetch: refetchTags } = useQuery({
    queryKey: ["getTags"],
    queryFn: () => {
      return fetchTags()
    },
  });

  return <div className="tags-container mt-5 pl-6 flex flex-row space-x-4 items-center w-full">
    {tags && tags.map((tag, index) => {
      return (
        <Button key={index} variant="outline" size="sm" onClick={(e) => setFilter(tag.name)}>
          {tag.name}
        </Button>
      );
    })}
    <TagDialogBox />
  </div>
}

export default TagList 