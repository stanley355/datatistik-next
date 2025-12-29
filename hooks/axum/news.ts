import { Axum } from "@/lib/axum/axum";
import { findManyNews, News } from "@/lib/axum/news";
import {
  QueryOptions,
  queryOptions,
  UnusedSkipTokenOptions,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

export const findManyNewsOptions = () => {
  return queryOptions({
    queryKey: ["news"],
    queryFn: findManyNews,
  });
};
