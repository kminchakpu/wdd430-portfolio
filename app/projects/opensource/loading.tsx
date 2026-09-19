export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="h-9 w-72 animate-pulse rounded bg-gray-200" />
      <div className="mt-4 h-5 w-full max-w-2xl animate-pulse rounded bg-gray-200" />
      <div className="mt-2 h-5 w-3/4 max-w-xl animate-pulse rounded bg-gray-200" />
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
              <div className="h-7 w-20 animate-pulse rounded-full bg-gray-200" />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}