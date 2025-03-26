import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  const href = userId ? "/chat" : "/new-user";

  return (
    <div className="flex h-screen w-screen items-center justify-center   bg-tarkov  bg-mid text-text">
      <div className="mx-auto w-full max-w-[600px]">
        <h1 className="mb-4 text-6xl font-bold">TARKOV AI</h1>
        <p className="mb-6 text-2xl text-text-secondary">
          A tool to help you Head Eyes PMC scavs with <em>slightly</em> more
          intel than blind panic. AI-powered insights, quest tracking, and maybe
          — just maybe — less dying.
        </p>
        <div>
          <Link href={href}>
            <Button className="cursor-pointer  bg-tarkov-secondary p-6 text-xl text-black hover:bg-tarkov-secondary/80">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
