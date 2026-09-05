export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center sm:px-6 lg:px-8">
        <p className="text-sm text-gray-200">
          © {new Date().getFullYear()} Kevin Minchakpu. All rights reserved.
        </p>

        <p className="mt-2 text-sm text-gray-100">
          Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}