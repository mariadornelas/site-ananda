export default function Footer() {
    return (
      <footer
        style={{
          marginTop: "3rem",
          padding: "1rem 0",
          borderTop: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        © {new Date().getFullYear()} Psicologia Online
      </footer>
    );
}
