import Link from "next/link";
const Navigation = () => (
  <nav>
    <div className="index-navigation-main">
      <div className="width-class-nav">
        <ul className="navigation-list">
          <li>
            <Link href="#play" className="nav-buttons">
              PLAY
            </Link>
          </li>
          <li>
            <Link href="#news" className="nav-buttons">
              NEWS
            </Link>
          </li>
          <li>
            <Link href="#starships" className="nav-buttons">
              STARSHIPS
            </Link>
          </li>
          <li>
            <h1 className="CT-logo "> CT </h1>
          </li>
          <li>
            <Link href="#team" className="nav-buttons">
              TEAM
            </Link>
          </li>
          <li>
            <Link href="#donate" className="nav-buttons">
              DONATE
            </Link>
          </li>
          <li>
            <Link href="#feeds" className="nav-buttons">
              FEEDS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
