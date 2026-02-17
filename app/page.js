import Image from "next/image";

export default function Home() {
  return (
  
   
     <div className="flex items-center justify-center h-screen flex-col gap-2 border border-amber-300" >
      <h1 className="text-3xl font-bold">Welcome to Next.js!</h1>
      <p className="description">
        Get started by editing <code>app/page.js</code>
      </p>
      <div className="grid">
        <a href="https://nextjs.org/docs" className="card">
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
        <a href="https://nextjs.org/learn" className="card">
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js"
          className="card"
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </div>
  );
}
