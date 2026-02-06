import { useState, type ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

// Componente auxiliar para os Links com efeito de Hover
const NavLink = ({ href, children }: NavLinkProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        color: isHover ? "#9C5B4B" : "#5D4037", // Muda de Marrom Café para Terra Rossa
        fontWeight: "500",
        fontSize: "18px",
        transition: "color 0.3s ease",
        position: "relative",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
    </a>
  );
};

export default function Header() {
  return (
    <header
      style={{
        // Layout e Posicionamento
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Separa Logo dos Links
        padding: "0 20%", // IMPORTANTE: Mesmo padding da section principal para alinhar
        height: "80px",
        
        // Estilo Sticky e Cores
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(250, 249, 246, 0.90)", // Fundo Creme quase transparente
        backdropFilter: "blur(10px)", // Efeito de vidro fosco (moderno)
        borderBottom: "1px solid rgba(156, 91, 75, 0.1)", // Borda muito suave no tom Terra
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.03)", // Sombra imperceptível para dar profundidade
      }}
    >
      {/* LOGO (Texto) */}
      <div
        style={{
          fontSize: "22px",
          fontWeight: "700",
          color: "#5D4037", // Marrom Café
          letterSpacing: "-0.5px",
        }}
      >
        Ananda Motta
      </div>

      {/* LINKS DE NAVEGAÇÃO */}
      <nav style={{ display: "flex", gap: "2.5rem"}}>
        <NavLink href="#inicio">Início</NavLink>
        <NavLink href="#sobre">Sobre Mim</NavLink>
        <NavLink href="#servicos">Posso te ajudar?</NavLink>
        <NavLink href="#faq">Dúvidas Frequentes</NavLink>
      </nav>
    </header>
  );
}