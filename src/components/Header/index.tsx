import { HeaderContainer } from './styles';
import Switch from 'react-switch';

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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/posts">Posts</a>
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
