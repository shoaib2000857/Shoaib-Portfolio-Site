import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[70vh] flex-col items-center justify-center text-center">
      <span className="label text-amber">404 // signal lost</span>
      <h1 className="mt-6 font-serif text-5xl font-medium tracking-tight text-fg">
        Nothing on this channel.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you’re after doesn’t exist — or hasn’t been built yet.
      </p>
      <Link href="/" className="btn btn--primary mt-8">
        Back to signal
      </Link>
    </div>
  );
}
