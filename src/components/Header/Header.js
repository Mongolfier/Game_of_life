import "./Header.scss";

function Header() {
  return (
    <header className="page-header">
      <div className="container">
        <nav>
          <button>Новая игра</button>
          <button>Очистить</button>
        </nav>
      </div>
    </header>
  )
}

export default Header;