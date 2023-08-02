import { Link } from "react-router-dom";


function Button({ children, disabled, to, onClick, type = "button", variant = "primary" }) {

    const base = 'text-center text-sm font-semibold rounded-xl transition-all uppercase border disabled:opacity-40 disabled:cursor-not-allowed';

    const styles = {
        primary: base + ' ' + 'bg-yellow-400 py-3 px-4 mt-3 w-full md:w-auto enabled:hover:bg-yellow-300 enabled:hover:border-yellow-500',
        small: base + ' ' + 'bg-yellow-400 py-2 px-4 text-xs enabled:hover:bg-yellow-300 enabled:hover:border-yellow-500',
        secondary: base + ' ' + 'border-stone-300 text-stone-700 py-3 px-4 mt-4 w-full md:w-auto enabled:hover:bg-stone-300 enabled:hover:border-stone-500 enabled:hover:text-stone-900',
        round: base + ' ' + 'bg-yellow-400 py-1 px-3.5 text-lg enabled:hover:bg-yellow-300 enabled:hover:border-yellow-500',
        link: base + ' ' + 'bg-yellow-400 py-3 px-4 mt-4 w-full md:w-auto hover:bg-yellow-300 hover:border-yellow-500'
    }

    if (!Object.keys(styles).includes(variant)) {
        variant = 'primary';
    }

    if (to) return (
        <Link
            className={styles[variant]}
            to={to}
        >
            {children}
        </Link>
    )
    return (
        <button
            className={styles[variant]}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button