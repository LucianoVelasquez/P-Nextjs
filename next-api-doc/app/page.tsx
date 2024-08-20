import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-x-10 h-svh">
      <ModeToggle></ModeToggle>
      <Button variant={"destructive"}>Hello</Button>
    </div>
  );
}
