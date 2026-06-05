import Image from "next/image";

export default function NextJsWatermark() {
    return (
        <Image
            className="dark:invert fixed top-0 right-0 z-999 blur-1 opacity-50"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
        />
    )

}