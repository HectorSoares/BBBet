const EasterEgg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    color="#1976d2"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 27 24"
  >
    <path
      d="M6.89 6.36C8.23 3.91 10 2 12 2c2 0 3.77 1.91 5.11 4.36c-.85.21-1.61.71-2.11 1.41a3.712 3.712 0 0 0-5.2-.8c-.3.22-.58.49-.8.8c-.5-.7-1.26-1.2-2.11-1.41M15 18.06l-3-3l-3 3l-3-3l-1.27 1.27a7.504 7.504 0 0 0 9.11 5.43a7.529 7.529 0 0 0 5.43-5.43L18 15.06l-3 3m-6-2.12l3-3l3 3l3-3l1.5 1.5c-.13-2.31-.7-4.58-1.69-6.68c-1.16.1-2.06 1.07-2.06 2.24h-1.5A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10h-1.5c0-1.17-.9-2.14-2.06-2.24c-.99 2.1-1.56 4.37-1.69 6.68l1.5-1.5l3 3z"
      fill="currentColor"
    />
  </svg>
);

EasterEgg.defaultProps = {
  color: "black",
  size: 24,
};

export default EasterEgg;
