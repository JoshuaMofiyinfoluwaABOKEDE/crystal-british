import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site section-pad">
      <h1 className="text-5xl md:text-6xl">We could not find that page</h1>
      <p className="measure lead mt-6 text-muted">
        The link may be old or mistyped. Use the menu above, or go back to the homepage.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-navy">
          Go to the homepage
        </Link>
        <Link href="/admissions" className="btn btn-outline">
          Admissions
        </Link>
      </div>
    </section>
  );
}
