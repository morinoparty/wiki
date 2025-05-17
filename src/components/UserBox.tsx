
import { auth, ExtendedSession } from "@/lib/auth";
import { IconButton } from "@chakra-ui/react";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import { css } from "styled-system/css";

export const UserBox: React.FC = async () => {
  const session = (await auth()) as ExtendedSession;

  if (!session) {
    return <div>Not logged in</div>;
  }

  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "36px 1fr auto",
        gap: "12px",
        alignItems: "center",
      })}
    >
      <img
        src={session?.user?.image || ""}
        alt="User Avatar"
        width={36}
        height={36}
        className={css({
          borderRadius: "8px",
          objectFit: "cover",
          objectPosition: "center",
        })}
      />
      <p
        className={css({
          textStyle: "body",
          color: "leaf.600",
        })}
      >
        <Link href={"/dashboard/"}>
          {session?.user?.name || "Unknown User"}
        </Link>
      </p>
      <IconButton variant={"ghost"} aria-label="More options" size="sm">
        <Ellipsis />
      </IconButton>
    </div>
  );
};
