interface SocialButtonProps {
  children: React.ReactNode;
  action: () => void;
}

const SocialButton = ({ children, action }: SocialButtonProps) => {
  return (
    <button
      className="w-full flex items-center justify-center bg-[var(--color-brown-950)]"
      onClick={action}>
      {children}
    </button>
  );
};

export default SocialButton;
