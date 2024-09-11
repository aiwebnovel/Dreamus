interface EditorIconProps {
  size: number
  color: string
}

export const ParagraphSize = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"
    />
  </svg>
)

export const HorizontalLine = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    fill="none"
    height={size}
    stroke={color}
    viewBox="0 0 20 20"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 9.5C2 9.22386 2.22386 9 2.5 9H17.5C17.7761 9 18 9.22386 18 9.5C18 9.77614 17.7761 10 17.5 10H2.5C2.22386 10 2 9.77614 2 9.5Z"
      fill="#212121"
    />
  </svg>
)

export const TextRight = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  // <svg
  //   fill="none"
  //   height={size}
  //   viewBox="0 0 20 20"
  //   width={size}
  //   stroke={color}
  //   xmlns="http://www.w3.org/2000/svg"
  // >
  //   <path
  //     d="M6 4.25C6 3.83579 6.33579 3.5 6.75 3.5H17.25C17.6642 3.5 18 3.83579 18 4.25C18 4.66421 17.6642 5 17.25 5H6.75C6.33579 5 6 4.66421 6 4.25Z"
  //     fill="#212121"
  //   />
  //   <path
  //     d="M2 9.25C2 8.83579 2.33579 8.5 2.75 8.5H17.25C17.6642 8.5 18 8.83579 18 9.25C18 9.66421 17.6642 10 17.25 10H2.75C2.33579 10 2 9.66421 2 9.25Z"
  //     fill="#212121"
  //   />
  //   <path
  //     d="M9.75 13.5C9.33579 13.5 9 13.8358 9 14.25C9 14.6642 9.33579 15 9.75 15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H9.75Z"
  //     fill="#212121"
  //   />
  // </svg>
  <svg
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    stroke={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 5.75C5 5.33579 5.33579 5 5.75 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H5.75C5.33579 6.5 5 6.16421 5 5.75Z"
      fill="#212121"
    />
    <path
      d="M10 18.75C10 18.3358 10.3358 18 10.75 18H21.25C21.6642 18 22 18.3358 22 18.75C22 19.1642 21.6642 19.5 21.25 19.5H10.75C10.3358 19.5 10 19.1642 10 18.75Z"
      fill="#212121"
    />
    <path
      d="M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H21.25C21.6642 13 22 12.6642 22 12.25C22 11.8358 21.6642 11.5 21.25 11.5H2.75Z"
      fill="#212121"
    />
  </svg>
)

export const TextUnset = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  // <svg
  //   aria-hidden="true"
  //   xmlns="http://www.w3.org/2000/svg"
  //   width={size}
  //   height={size}
  //   stroke={color}
  //   fill="none"
  //   viewBox="0 0 24 24"
  // >
  //   <path
  //     stroke="currentColor"
  //     strokeLinecap="round"
  //     strokeWidth="2"
  //     d="M5 7h14M5 12h14M5 17h14"
  //   />
  // </svg>
  <svg
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    stroke={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 5.75C2 5.33579 2.33579 5 2.75 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75Z"
      fill="#212121"
    />
    <path
      d="M2 18.75C2 18.3358 2.33579 18 2.75 18H21.25C21.6642 18 22 18.3358 22 18.75C22 19.1642 21.6642 19.5 21.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75Z"
      fill="#212121"
    />
    <path
      d="M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H21.25C21.6642 13 22 12.6642 22 12.25C22 11.8358 21.6642 11.5 21.25 11.5H2.75Z"
      fill="#212121"
    />
  </svg>
)

export const TextCenter = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    stroke={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 5.75C4 5.33579 4.33579 5 4.75 5H19.25C19.6642 5 20 5.33579 20 5.75C20 6.16421 19.6642 6.5 19.25 6.5H4.75C4.33579 6.5 4 6.16421 4 5.75Z"
      fill="#212121"
    />
    <path
      d="M6 18.75C6 18.3358 6.33579 18 6.75 18H17.25C17.6642 18 18 18.3358 18 18.75C18 19.1642 17.6642 19.5 17.25 19.5H6.75C6.33579 19.5 6 19.1642 6 18.75Z"
      fill="#212121"
    />
    <path
      d="M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H21.25C21.6642 13 22 12.6642 22 12.25C22 11.8358 21.6642 11.5 21.25 11.5H2.75Z"
      fill="#212121"
    />
  </svg>
)

export const TextLeft = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    stroke={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 5.75C2 5.33579 2.33579 5 2.75 5H18.25C18.6642 5 19 5.33579 19 5.75C19 6.16421 18.6642 6.5 18.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75Z"
      fill="#212121"
    />
    <path
      d="M2 18.75C2 18.3358 2.33579 18 2.75 18H13.25C13.6642 18 14 18.3358 14 18.75C14 19.1642 13.6642 19.5 13.25 19.5H2.75C2.33579 19.5 2 19.1642 2 18.75Z"
      fill="#212121"
    />
    <path
      d="M2.75 11.5C2.33579 11.5 2 11.8358 2 12.25C2 12.6642 2.33579 13 2.75 13H21.25C21.6642 13 22 12.6642 22 12.25C22 11.8358 21.6642 11.5 21.25 11.5H2.75Z"
      fill="#212121"
    />
  </svg>
)

export const ImageUpload = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
    />
  </svg>
)

export const UnOrderedList = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    stroke={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 5H21M11 12H21M11 19H21"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <rect
      height="4"
      rx="1"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      width="4"
      x="3"
      y="3"
    />
    <rect
      height="4"
      rx="1"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      width="4"
      x="3"
      y="10"
    />
    <rect
      height="4"
      rx="1"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      width="4"
      x="3"
      y="17"
    />
  </svg>
)

export const OrderedList = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4"
    />
  </svg>
)

export const Blockquote = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    stroke={color}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
      clipRule="evenodd"
    />
  </svg>
)

export const TextColor = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    stroke={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.75 14.5005C18.9926 14.5005 20 15.5079 20 16.7505V19.7504C20 20.993 18.9926 22.0004 17.75 22.0004H5.25C4.00736 22.0004 3 20.993 3 19.7504V16.7505C3 15.5079 4.00736 14.5005 5.25 14.5005H17.75ZM17.75 16.0005H5.25C4.83579 16.0005 4.5 16.3363 4.5 16.7505V19.7504C4.5 20.1646 4.83579 20.5004 5.25 20.5004H17.75C18.1642 20.5004 18.5 20.1646 18.5 19.7504V16.7505C18.5 16.3363 18.1642 16.0005 17.75 16.0005ZM7.05252 11.9694L10.8061 2.47427C11.0415 1.87883 11.8486 1.84415 12.1508 2.36975L12.2013 2.47487L15.9477 11.9754C16.0997 12.3607 15.9105 12.7962 15.5251 12.9482C15.1719 13.0875 14.7765 12.9401 14.596 12.6178L14.5523 12.5256L13.556 10H9.443L8.44748 12.5209C8.30789 12.874 7.93013 13.0621 7.57143 12.9737L7.47427 12.9426C7.12117 12.803 6.93308 12.4253 7.02147 12.0666L7.05252 11.9694L10.8061 2.47427L7.05252 11.9694ZM11.5027 4.79226L10.036 8.5H12.964L11.5027 4.79226Z"
      fill="#212121"
    />
  </svg>
)

export const TextBackground = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    fill="#000000"
    width={size}
    height={size}
    stroke={color}
    viewBox="0 0 1920 1920"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m928.806 512-185.984 512h434.304L991.142 512h-62.336Zm419.072 981.875-124.16-341.888h-527.36L572.07 1493.875 451.878 1450.1 839.206 383.987h241.664l387.2 1066.112-120.192 43.776ZM1728.038-.013h-1536c-105.856 0-192 86.144-192 192v1536c0 105.856 86.144 192 192 192h1536c105.856 0 192-86.144 192-192v-1536c0-105.856-86.144-192-192-192Z"
      fillRule="evenodd"
    />
  </svg>
)

export const Bold = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"
    />
  </svg>
)

export const Underline = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    stroke={color}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 18.5H18V20H6V18.5Z" fill="#1F2328" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 5V11.7153C9 13.3722 10.3431 14.7153 12 14.7153C13.6569 14.7153 15 13.3722 15 11.7153V5H16.5V11.7153C16.5 14.2006 14.4853 16.2153 12 16.2153C9.51472 16.2153 7.5 14.2006 7.5 11.7153V5H9Z"
      fill="#1F2328"
    />
  </svg>
)

export const Italic = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    className="w-6 h-6 text-gray-800 dark:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    stroke={color}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"
    />
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
