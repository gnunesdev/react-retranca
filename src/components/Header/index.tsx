import Switch from "react-switch";

import Link from "next/link";

import { HeaderContainer } from "./styles";
interface HeaderProps {
  toggleTheme: () => void;
  isThemeChecked: boolean;
}

export function Header({ toggleTheme, isThemeChecked }: HeaderProps) {
  return (
    <HeaderContainer>
      <header>
        <h1>
          <Link href={"/"}>.retranca.</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        <Switch
          className="header__switch-button"
          checked={isThemeChecked}
          onChange={toggleTheme}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#333333"
          offColor="#26484a"
        ></Switch>
      </header>
    </HeaderContainer>
  );
}
