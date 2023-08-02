

function MyLabel({ htmlFor, label, variant = "normal", margin = true }) {

    const base = 'block text-gray-800';

    const styles = {
        normal: `${base} ${margin ? 'mb-1' : ''}`,
        horizontal: `${base} ${margin ? 'mb-1 md:mb-0' : ''} md:basis-40`
    }

    return (
        <label className={styles[variant]} htmlFor={htmlFor}>{label}</label>
    )
}

export default MyLabel