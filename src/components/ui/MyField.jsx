import { Field } from "formik"

function MyField({ ...props }) {
    return (
        <Field
            className="rounded-xl w-full py-2 px-4 border focus:outline-none focus:border-yellow-400 text-gray-800"
            {...props}
        />
    )
}

export default MyField