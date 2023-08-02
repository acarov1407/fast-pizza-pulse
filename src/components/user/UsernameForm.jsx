import { Formik, Form } from "formik";
import MyField from "../ui/MyField";
import MyLabel from "../ui/MyLabel";
import Button from "../ui/Button";
import MyErrorMessage from "../ui/MyErrorMessage";
import * as Yup from "yup";
import { usernameRegex } from "../../utils/regex";
import { setUsername } from "../../app/features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function UsernameForm() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const usernameSchema = Yup.object().shape({
        username: Yup.string()
            .required('You must to provide a name')
            .min(3, 'Username must be has at least 3 characters')
            .matches(usernameRegex, 'Introduce a valid name')
    })

    const initialValues = {
        username: ''
    }

    const handleSubmit = (formData) => {
        dispatch(setUsername(formData.username));
        navigate('/menu');
    }


    return (
        <Formik
            validationSchema={usernameSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validateOnMount={true}
        >
            {({ isSubmitting, isValid, errors, touched }) => (
                <Form className="mt-8 px-4 max-w-md mx-auto">
                    <div>
                        <MyLabel htmlFor="username" label="Welcome! Please start by telling us your name:" />
                        <MyField id="username" name="username" type="text" placeholder="Your full name" />
                        {errors.username && touched.username ? <MyErrorMessage name="username" /> : null}
                    </div>
                    <Button type="submit" disabled={isSubmitting || !isValid}>
                        Start Ordering!
                    </Button>
                </Form>
            )}

        </Formik>
    )
}

export default UsernameForm