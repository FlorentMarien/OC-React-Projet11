import "./../styles/header.css";
import Logo from "./../assets/icon/icon.svg";
export default function Header() {
  let urlcourante = document.location.href;
  let queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1);
  return (
    <>
      <header>
        <p>
          K
          <img src={Logo} />
          sa
        </p>
        <nav>
          <ul>
            <li>
              <a href="/" className={queue_url === "" ? "nav-active" : ""}>
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={queue_url === "about" ? "nav-active" : ""}
              >
                A Propos
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
