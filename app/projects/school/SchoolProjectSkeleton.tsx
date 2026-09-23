export default function SchoolProjectSkeleton() {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {[1, 2, 3, 4].map((item) => (
        <article
          key={item}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 h-4 w-full animate-pulse rounded bg-gray-200" />
          <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-gray-200" />
          <div className="mt-4 flex gap-2">
            <div className="h-7 w-20 animate-pulse rounded-full bg-gray-200" />
            <div className="h-7 w-24 animate-pulse rounded-full bg-gray-200" />
          </div>
        </article>
      ))}
    </div>
  );
}