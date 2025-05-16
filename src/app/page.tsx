/* eslint-disable @next/next/no-img-element */
// import WikiCard from "@/components/WikiCard";
import { Button } from "@/components/Button";
import WikiCard from "@/components/WikiCard";
import { getAllPosts } from "@/lib/getAllPosts";
import { css } from "styled-system/css";
import { Grid } from "styled-system/jsx";

export default async function Home() {
  const posts = await getAllPosts({
    sortBy: "date",
  });

  return (
    <div className={css({})}>
      <div
        className={css({
          width: "100%",
          height: "360px",
          backgroundImage: "url('/assets/top-header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        })}
      ></div>

      <div
        className={css({
          px: "90px",
          pt: "40px",
          pb: "128px",
        })}
      >
        <header
          className={css({
            mb: "86px",
          })}
        >
          <p
            className={css({
              textStyle: "body",
              color: "leaf.600",
              mb: "28px",
              opacity: 0.5,
            })}
          >
            Minecraft コミュニティ「もりのパーティ」の公式Wiki
          </p>

          <img
            src="/assets/logo.svg"
            className={css({
              height: "48px",
              width: "auto",
              mb: "38px",
            })}
            alt="もりのパーティWikiのロゴ"
          />

          <p
            className={css({
              textStyle: "body",
              color: "leaf.600",
              width: "50%",
            })}
          >
            ここはみんなでもりぱに関する情報の共有をする場所です！もりぱにログインしたことがあれば、すぐに使い始めることができます。
          </p>
        </header>

        <section
          className={css({
            mb: "92px",
          })}
        >
          <h2
            className={css({
              textStyle: "heading1",
              color: "leaf.600",
              mb: "28px",
            })}
          >
            最近の投稿
          </h2>

          <Grid
            gridTemplateColumns={{
              base: "repeat(3, 1fr)",
            }}
            gap={"64px 24px"}
          >
            {posts.splice(0, 3).map((post) => (
              <WikiCard key={post.slug} post={post} />
            ))}
          </Grid>
        </section>

        <section
          className={css({
            mb: "148px",
          })}
        >
          <h2
            className={css({
              textStyle: "heading1",
              color: "leaf.600",
              mb: "28px",
            })}
          >
            おすすめのページ
          </h2>

          <Grid
            gridTemplateColumns={{
              base: "repeat(3, 1fr)",
            }}
            gap={"64px 24px"}
          >
            {posts.splice(0, 6).map((post) => (
              <WikiCard key={post.slug} post={post} />
            ))}
          </Grid>
        </section>

        <section
          className={css({
            borderRadius: "32px",
            bg: "white",
            p: "24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            width: "calc(100% + 48px)",
            ml: "-24px",
          })}
        >
          <div
            className={css({
              p: "24px",
            })}
          >
            <h2
              className={css({
                textStyle: "heading1",
                color: "leaf.600",
                mb: "20px",
              })}
            >
              もりのパーティで、
              <br />
              あなたを待っています
            </h2>
            <p
              className={css({
                textStyle: "body",
                color: "leaf.600",
                mb: "64px",
              })}
            >
              {`のんびり、ゆったり、気ままに、あそべる\nMinecraftサーバー「もりのパーティ」に参加してみませんか?`}
            </p>

            <Button>ちょっと入ってみる</Button>
          </div>

          <div
            className={css({
              backgroundImage: "url('/assets/top-community.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
            })}
          ></div>
        </section>
      </div>
    </div>
  );
}
