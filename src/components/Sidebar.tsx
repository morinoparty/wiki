/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { css } from "styled-system/css";
import { Home, Search, Tag } from "lucide-react";

export function Sidebar() {
  return (
    <aside
      className={css({
        pt: "48px",
        pl: "42px",
        pr: "32px",
        pb: "38px",

        position: "sticky",
        top: 0,
        minHeight: "100vh",
        height: "100vh",
        maxHeight: "100vh",
      })}
    >
      <Link
        href="/"
        className={css({
          display: "flex",
          alignItems: "center",
          mb: "32px",
          pr: "32px",
        })}
      >
        <img
          src="/assets/logo.svg"
          className={css({
            height: "38px",
            width: "auto",
          })}
          alt="もりのパーティWikiのロゴ"
        />
      </Link>

      <label
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "16px",
          pb: "24px",
          width: "calc(100% + 42px + 32px)",
          pl: "42px",
          pr: "32px",
          ml: "-42px",
          color: "leaf.600",
          borderBottom: "1px solid",
          borderColor: "leaf.200",
        })}
      >
        <Search />
        <input
          type="search"
          placeholder="Search..."
          className={css({
            width: "100%",
            textStyle: "body",
            outline: "none",
            color: "leaf.600",
            _placeholder: {
              color: "leaf.600",
              opacity: 0.5,
            },
          })}
        />
      </label>

      <nav>
        <ul className={css({ listStyle: "none", pt: "28px" })}>
          <NavListItem href="/" icon={<Home />}>
            トップページ
          </NavListItem>
          <NavListItem href="/category" icon={<Tag />}>
            カテゴリ一覧
          </NavListItem>
          <NavListCategory>
            {[
              "チュートリアル",
              "MOD・プラグイン",
              "イベント",
              "観光案内",
              "投稿",
            ].map((category) => (
              <NavListCategoryItem key={category} href={`/${category}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </NavListCategoryItem>
            ))}
          </NavListCategory>
        </ul>
      </nav>
    </aside>
  );
}

const NavListItem: React.FC<{
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ href, icon, children }) => {
  return (
    <li className={css({})}>
      <Link
        href={href}
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "16px",
          textStyle: "body",
          color: "leaf.600",
          textDecoration: "none",
          padding: "14px 0",
          borderRadius: "8px",
        })}
      >
        {icon}
        {children}
      </Link>
    </li>
  );
};

const NavListCategory: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <li className={css({})}>
      <ul
        className={css({
          listStyle: "none",
          display: "grid",
          gap: "6px",
        })}
      >
        {children}
      </ul>
    </li>
  );
};

const NavListCategoryItem: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => {
  return (
    <li className={css({})}>
      <Link
        href={href}
        className={css({
          display: "flex",
          alignItems: "center",
          textStyle: "body",
          color: "leaf.600",
          textDecoration: "none",
          pl: "40px",
          borderRadius: "8px",
          opacity: 0.7,
        })}
      >
        {children}
      </Link>
    </li>
  );
};
