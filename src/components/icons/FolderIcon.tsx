interface IconProps {
  className?: string;
}

export const FolderIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 2C9.5 2 7.5 3.5 7 5.5C6.5 7.5 7 9.5 7.5 11C8 12.5 8 14 7 15.5C6 17 5 18.5 5 20C5 21 5.5 22 6.5 22C7.5 22 8 21 8.5 20C9 19 9.5 18 10 17.5C10.5 17 11 17 11.5 17.5C12 18 12.5 19 13 20C13.5 21 14 22 15 22C16 22 16.5 21 16.5 20C16.5 18.5 15.5 17 14.5 15.5C13.5 14 13.5 12.5 14 11C14.5 9.5 15 7.5 14.5 5.5C14 3.5 12 2 12 2Z" />
  </svg>
);
