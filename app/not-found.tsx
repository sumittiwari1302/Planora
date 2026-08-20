import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        textAlign: "center",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: 72,
          fontWeight: 800,
          color: "#e7e5e4",
          lineHeight: 1,
          marginBottom: 16,
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: "#1c1917",
          marginBottom: 12,
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          fontSize: 16,
          color: "#78716c",
          marginBottom: 32,
          maxWidth: 400,
        }}
      >
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "12px 28px",
          background: "#22c55e",
          color: "#ffffff",
          borderRadius: 12,
          fontSize: 15,
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
