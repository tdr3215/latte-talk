import Image from "next/image";
import Link from "next/link";
import ButtonComp from "./components/ButtonComp";

export default function Home() {
  return (
    <main>
      Home Page It's my birthday
      <button className="btn btn-primary">
        <Link href="/auth"> Sign Up</Link>
      </button>
    </main>
  );
}
