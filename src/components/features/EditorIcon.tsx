interface EditorIconProps {
  size: number
  color: string
}

export const ParagraphSize = ({
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
      d="M12 6H16M20 6H16M16 6V18"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M4 11H7M10 11H7M7 11V18"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
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
  <svg
    stroke={color}
    fill="currentColor"
    height={size}
    viewBox="0 0 16 16"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
      fillRule="evenodd"
    />
  </svg>
)

export const TextUnset = ({
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
      d="M5 6H19M5 10H19M5 14H19M5 18H19"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
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
      d="M5 6H19M7 10H17M5 14H19M9 18H15"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
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
    stroke={color}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 6H19M5 10H15M5 14H19M5 18H11"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)

export const ImageUpload = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    fill="#000000"
    width={size}
    height={size}
    stroke={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z" />
  </svg>
)

export const UnOrderedList = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="none" height="256" width="256" />
    <line
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      x1="88"
      x2="216"
      y1="64"
      y2="64"
    />
    <line
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      x1="88"
      x2="216"
      y1="128"
      y2="128"
    />
    <line
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      x1="88"
      x2="216"
      y1="192"
      y2="192"
    />
    <circle cx="44" cy="64" r="12" />
    <circle cx="44" cy="128" r="12" />
    <circle cx="44" cy="192" r="12" />
  </svg>
)

export const OrderedList = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="none" height="256" width="256" />
    <line
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      x1="104"
      x2="216"
      y1="128"
      y2="128"
    />
    <line
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      x1="104"
      x2="216"
      y1="64"
      y2="64"
    />
    <line
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      x1="104"
      x2="216"
      y1="192"
      y2="192"
    />
    <polyline
      fill="none"
      points="40 60 56 52 56 108"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M41.1,152.6a14,14,0,1,1,24.5,13.2L40,200H68"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
)

export const Blockquote = ({
  size = 16,
  color = 'currentColor',
}: EditorIconProps) => (
  <svg
    width={size}
    height={size}
    stroke={color}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
  >
    <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm.79-5.373c.112-.078.26-.17.444-.275L3.524 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282c.024-.203.065-.37.123-.498a1.38 1.38 0 0 1 .252-.37 1.94 1.94 0 0 1 .346-.298zm2.167 0c.113-.078.262-.17.445-.275L5.692 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282a1.75 1.75 0 0 1 .118-.492c.058-.13.144-.254.257-.375a1.94 1.94 0 0 1 .346-.3z" />
  </svg>
)

export const TextColor = ({
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
      d="m742.81 1024.051 185.984-512h62.336l186.112 512H742.81Zm605.056 469.888 120.32-43.776-387.328-1066.112H839.194L451.866 1450.163l120.32 43.776 124.16-341.888h527.36l124.16 341.888ZM1792 1728.051c0 35.2-28.672 64-64 64H192c-35.328 0-64-28.8-64-64v-1536c0-35.2 28.672-64 64-64h1536c35.328 0 64 28.8 64 64v1536Zm-64-1728H192c-105.856 0-192 86.144-192 192v1536c0 105.856 86.144 192 192 192h1536c105.856 0 192-86.144 192-192v-1536c0-105.856-86.144-192-192-192Z"
      fillRule="evenodd"
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
    fill="none"
    widths={size}
    height={size}
    stroke={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.93514 4.43963C7.21647 4.15815 7.59813 4 7.99609 4H12.3795C15.0161 4 16.9995 6.18211 16.9995 8.62541C16.9995 9.60205 16.6828 10.5367 16.1341 11.307C17.211 12.134 17.9995 13.4274 17.9995 15.12C17.9995 18.2315 15.301 20 13.1195 20H7.99951C7.17108 20 6.49951 19.3284 6.49951 18.5L6.49609 5.50082C6.49588 5.10285 6.65382 4.72111 6.93514 4.43963ZM9.49869 10.2499H12.3795C13.2824 10.2499 13.9995 9.49051 13.9995 8.62541C13.9995 7.76 13.2814 7 12.3795 7H9.49691L9.49869 10.2499ZM9.49951 13.2499V17H13.1195C13.9927 17 14.9995 16.2464 14.9995 15.12C14.9995 13.9901 14.0248 13.2499 13.1195 13.2499H9.49951Z"
      fill="#212121"
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
    width={size}
    height={size}
    stroke={color}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="none" height="256" width="256" />
    <line
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
      x1="152"
      x2="104"
      y1="56"
      y2="200"
    />
    <line
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
      x1="64"
      x2="144"
      y1="200"
      y2="200"
    />
    <line
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
      x1="112"
      x2="192"
      y1="56"
      y2="56"
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
