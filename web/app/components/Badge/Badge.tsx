import "./Badge.css";

interface BadgeProps {
  text: string;
  className?: string;

}

export default function Badge({ text, className }: BadgeProps) {
  return (
    <span className={`name-badge ${className}`}>
      <span>{text}</span>
    </span>
  );
}
