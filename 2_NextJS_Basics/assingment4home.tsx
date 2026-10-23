// import Link from 'next/link'
import About from "./about/page";
export default function Home() {
  return (
    <div>
      <main>
        <About />
        <br></br>
        {/* <Link href="/about">Go to About Page</Link> */}
      </main>
    </div>
  );
}