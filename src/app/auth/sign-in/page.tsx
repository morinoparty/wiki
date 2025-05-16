import { Button } from "@/components/Button";
import { signIn } from "@/lib/auth";

export default async function Home() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("MineAuth", { redirectTo: "/" });
      }}
    >
      <Button type="submit">
        <span>Moripa APIにログイン</span>
      </Button>
    </form>
  );
}
