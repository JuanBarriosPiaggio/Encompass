import Link from "next/link";
import { Sheen } from "@/components/Buttons";

export default function NotFound() {
  return (
    <header className="hero-plain">
      <p className="label">404</p>
      <h1>That page is not on the drawing.</h1>
      <div className="hero-actions">
        <Link href="/" className="btn btn-gold">
          <Sheen />
          <span className="btn-label">Back to the studio</span>
        </Link>
        <Link href="/projects" className="btn btn-ghost">
          View the work
        </Link>
      </div>
    </header>
  );
}
