import "./../styles/errorpage.css";
export default function ErrorPage() {
  return (
    <section id="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <a href="/">Retourner sur la page d'accueil</a>
    </section>
  );
}
