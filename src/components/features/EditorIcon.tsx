interface EditorIconProps {
  size: number
  color: string
}

export const Bold = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    fill="none"
    widths={size}
    height={size}
    stroke={color}
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.5 4.25C5.5 3.55964 6.05964 3 6.75 3H10.2512C12.654 3 14.25 4.98768 14.25 7C14.25 7.87176 13.9504 8.73837 13.4157 9.44091C14.3205 10.1431 14.9974 11.242 14.9974 12.75C14.9974 15.6133 12.5599 16.9955 10.7531 16.9955H6.75C6.05964 16.9955 5.5 16.4358 5.5 15.7455V4.25ZM8 11V14.4955H10.7531C11.5641 14.4955 12.4974 13.8768 12.4974 12.75C12.4974 11.6212 11.5598 11 10.7531 11H8ZM8 8.5H10.2478C11.1296 8.5 11.75 7.77853 11.75 7C11.75 6.22003 11.1295 5.5 10.2512 5.5H8V8.5Z" />
  </svg>
)

export const Underline = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
    <line x1="4" y1="21" x2="20" y2="21"></line>
  </svg>
)

export const Italic = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 4h-9M14 20H5M14.7 4.7L9.2 19.4" />
  </svg>
)

export const Link = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
)

export const Code = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
)

export const Strikethrough = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.3 4.9c-2.3-.6-4.4-1-6.2-.9-2.7 0-5.3.7-5.3 3.6 0 1.5 1.8 3.3 3.6 3.9h.2m8.2 3.7c.3.4.4.8.4 1.3 0 2.9-2.7 3.6-6.2 3.6-2.3 0-4.4-.3-6.2-.9M4 11.5h16" />
  </svg>
)

export const RotateLeft = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" />
  </svg>
)

export const RotateRight = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
  </svg>
)

export const X = ({ size = 16, color = 'currentColor' }: EditorIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)
