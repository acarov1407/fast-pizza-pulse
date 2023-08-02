import { ErrorMessage } from "formik"

function MyErrorMessage({ name }) {
    return (
        <ErrorMessage
            name={name}
            className="bg-red-100  border-red-500 text-red-700 p-3 mt-1.5 rounded-md w-full font-medium text-sm"
            component="div"
        />
    )
}

export default MyErrorMessage