
export const CarLogo = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M19 11L17.2 5.4C16.9 4.5 16 3.9 15 3.9H9C8 3.9 7.1 4.5 6.8 5.4L5 11M5 11V19C5 19.6 5.4 20 6 20H18C18.6 20 19 19.6 19 19V11M5 11H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="7" cy="15" r="1.5" className="fill-current" stroke="none" />
        <circle cx="17" cy="15" r="1.5" className="fill-current" stroke="none" />
    </svg>
);
