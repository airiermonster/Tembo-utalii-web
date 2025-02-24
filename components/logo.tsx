export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" className="fill-primary" />
      <path
        d="M22.5 11.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5z"
        className="fill-background"
      />
      <path
        d="M16 7c-3.866 0-7 3.134-7 7 0 2.577 1.388 4.82 3.455 6.047-.455.953-.955 2.453-.955 2.453s3.5-1.5 4.5-1.5 4.5 1.5 4.5 1.5-.5-1.5-.955-2.453C21.612 18.82 23 16.577 23 14c0-3.866-3.134-7-7-7z"
        className="fill-background"
      />
    </svg>
  )
}

