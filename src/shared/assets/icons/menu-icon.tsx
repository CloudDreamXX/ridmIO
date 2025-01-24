export const MenuIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M46 25H18"
      stroke="#EFEFEF"
      strokeWidth="3"
      style={{
        transition: "all 0.3s ease",
        transform: isOpen ? "rotate(45deg) translate(13px, -22px)" : "none",
      }}
    />
    <path
      d={isOpen ? "M46 25H18" : "M46 40L24 40"}
      stroke="#EFEFEF"
      strokeWidth="3"
      style={{
        transition: "all 0.3s ease",
        transform: isOpen ? "rotate(-45deg) translate(-35px, 20px)" : "none",
      }}
    />
  </svg>
);
