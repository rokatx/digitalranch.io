type Props = {
  className?: string
  title?: string
}

export function RanchgritLogoMark({ className, title = 'RANCHGRIT' }: Props) {
  return (
    <svg
      viewBox="0 0 514 356"
      className={className}
      role="img"
      aria-label={title}
      focusable="false"
    >
      <polygon
        points="79.3,76.9 79.3,121.9 197.6,121.9 197.6,155 79.3,155 79.3,172.9 79.3,200 79.3,277.2 124.3,277.2 124.3,200 135,200 188,277.2 242.6,277.2 189.6,200 197.6,200 236.2,200 242.6,200 242.6,121.9 242.6,119.2 242.6,76.9"
        fill="currentColor"
      />
      <polygon
        points="350.1,155 350.1,200 390.2,200 390.2,232.2 317.1,232.2 317.1,121.9 435.1,121.9 435.1,76.9 272.1,76.9 272.1,119.2 272.1,121.9 272.1,232.2 272.1,277.2 435.1,277.2 435.1,277.1 435.2,277.1 435.2,200 435.2,172.8 435.2,155"
        fill="currentColor"
      />
    </svg>
  )
}
