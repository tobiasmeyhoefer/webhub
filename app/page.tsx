import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export default async function Index() {
  return (
    <>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent)] "
        )}
      />
    </>
  )
}
