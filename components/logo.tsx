import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

const Logo = () => {
  const { orgId } = auth();
  return (
    <Link href={`/organization/${orgId}`}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={0}
          height={0}
          className="h-auto w-12"
        />
        <p className={cn("text-lg text-neutral-700", headingFont.className)}>
          PixelTasks
        </p>
      </div>
    </Link>
  );
};

export default Logo;
