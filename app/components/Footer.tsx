export default function Footer() {
    return (
      <footer
        style={{
          padding: "1rem 0",
          borderTop: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Psicologia Online
      </footer>
    );
}
