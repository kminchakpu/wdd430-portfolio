"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({
  totalPages,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Project pagination"
      className="mt-10 flex items-center justify-center gap-4"
    >
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
        >
          Previous
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded-lg border border-gray-200 px-4 py-2 text-gray-400">
          Previous
        </span>
      )}

      <span className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
        >
          Next
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded-lg border border-gray-200 px-4 py-2 text-gray-400">
          Next
        </span>
      )}
    </nav>
  );
}