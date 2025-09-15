type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  type = "button",
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={`app-btn bg-primary ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
