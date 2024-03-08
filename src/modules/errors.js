export function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>sorry, </span> {message}
    </p>
  );
}