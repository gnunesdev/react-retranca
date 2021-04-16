import { HeaderContainer } from './styles';
import Switch from 'react-switch';
import Link from 'next/link';

interface HeaderProps {
  toggleTheme: () => void;
  isChecked: boolean;
}

export function Header({ toggleTheme, isChecked }: HeaderProps) {
  return (
    <HeaderContainer>
      <header>
        <h1>retranca.</h1>
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
          checked={isChecked}
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
