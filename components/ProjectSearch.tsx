"use client";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useRef } from "react";

export default function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleSearch(term: string) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      params.set("page", "1");

      if (term.trim()) {
        params.set("query", term.trim());
      } else {
        params.delete("query");
      }

      replace(`${pathname}?${params.toString()}`);
    }, 300);
  }

  return (
    <div className="mt-8">
      <label
        htmlFor="project-search"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Search projects
      </label>
      <input
        id="project-search"
        type="search"
        placeholder="Search by title, description, type, or technology..."
        defaultValue={searchParams.get("query") || ""}
        onChange={(event) => handleSearch(event.target.value)}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}