import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-cairo dark:bg-black">

      <Button asChild>
        <Link href="/login">
          تسجيل الدخول

        </Link>
      </Button>


    </div>
  );
}
