"use client";
import { findManyNewsOptions } from "@/hooks/axum";
import { useQuery } from "@tanstack/react-query";

export const HeadlineNews = () => {
  const { data } = useQuery(findManyNewsOptions());
  console.log(data);

  return (
    <div>
      {/*{data?.data?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}*/}
    </div>
  );
};
