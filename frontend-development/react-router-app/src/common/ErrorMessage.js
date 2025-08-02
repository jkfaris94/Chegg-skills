function ErrorMessage ({ error, children }) {
  return (
    <main className="container">
      <p style={{ color: "red" }}>ERROR: {error.message}</p>
      {children}
    </main>
  );
}

export default ErrorMessage;