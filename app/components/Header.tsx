export default function Header() {
    return (
      <header
        style={{
          display: "flex",
          gap: "1.5rem",
          padding: "1rem 0",
          borderBottom: "1px solid #ddd",
          position: "sticky",
          top: 0,
          background: "#fff",
          zIndex: 10,
        }}
      >
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#faq">FAQ</a>
      </header>
    );
  }
  