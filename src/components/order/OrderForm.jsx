import { Formik, Form, Field } from "formik";
import MyField from "../ui/MyField";
import MyLabel from "../ui/MyLabel";
import Button from "../ui/Button";
import Alert from "../ui/Alert";
import MyErrorMessage from "../ui/MyErrorMessage";
import * as Yup from "yup";
import { usernameRegex, phoneNumberRegex } from "../../utils/regex";
import { calcPriorityPrice, formatCurrency } from "../../utils/helpers";
import { createOrder } from "../../services/apiRestaurant";
import { getCart, clearCart, selectSubtotalCartPrice } from "../../app/features/cartSlice";
import { fetchUserAddress } from "../../app/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function OrderForm() {

    const [error, setError] = useState('');

    const { username, position, status: statusAddress, address } = useSelector(state => state.user);
    const isLoadingAddress = statusAddress === 'loading';

    const cart = useSelector(getCart);
    const subtotal = useSelector(selectSubtotalCartPrice);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const orderSchema = Yup.object().shape({
        customer: Yup.string()
            .required('You must to provide a name')
            .min(3, 'name must be has at least 3 characters')
            .matches(usernameRegex, 'Introduce a valid username'),
        phone: Yup.string()
            .required('You must provide a phone number')
            .matches(phoneNumberRegex, 'Introduce a valid phone number'),
        address: Yup.string()
            .required('You must to provide an address'),

    });

    const initialValues = {
        customer: username,
        phone: '',
        address: address || '',
        priority: false
    }

    const handleSubmit = async (formData) => {

        const order = {
            ...formData,
            cart,
            position: position?.latitude && position?.longitude ? `${position.latitude},${position.longitude}` : ''
        }

        try {
            const createdOrder = await createOrder(order);
            navigate(`/order/${createdOrder.id}`);
            dispatch(clearCart());
        } catch (error) {
            setError(error.message);
        }

    }

    const handleClickGetPosition = async (setFieldValue) => {
        try {
            const { address } = await dispatch(fetchUserAddress()).unwrap();
            setFieldValue('address', address);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <Formik
            validationSchema={orderSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validateOnMount={true}
        >
            {({ isSubmitting, isValid, errors, touched, values, setFieldValue }) => (
                <Form>
                    {error && <Alert msg={error} />}
                    <div className="mt-4">
                        <div className="flex flex-col md:flex-row md:gap-5 md:items-center">
                            <MyLabel htmlFor="customer" label="Your Name" variant="horizontal" />
                            <MyField id="customer" name="customer" type="text" />
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-5 md:items-center">
                            <div className="md:basis-40"></div>
                            {errors.name && touched.name ? <MyErrorMessage name="name" /> : null}
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex flex-col md:flex-row md:gap-5 md:items-center">
                            <MyLabel htmlFor="phone" label="Phone Number" variant="horizontal" />
                            <MyField id="phone" name="phone" type="tel" />
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-5 md:items-center">
                            <div className="md:basis-40"></div>
                            {errors.phone && touched.phone ? <MyErrorMessage name="phone" /> : null}
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex flex-col md:flex-row md:gap-5 md:items-center relative">
                            <MyLabel htmlFor="address" label="Address" variant="horizontal" />
                            <MyField id="address" name="address" type="text" disabled={isLoadingAddress} />
                            {!position.latitude && !position.longitude &&
                                <span className="absolute z-50 right-[3px] bottom-[4px]">
                                    <Button
                                        type="button"
                                        variant="small"
                                        onClick={() => handleClickGetPosition(setFieldValue)}
                                        disabled={isLoadingAddress}
                                    >Get Position</Button>
                                </span>
                            }
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-5 md:items-center">
                            <div className="md:basis-40"></div>
                            {errors.address && touched.address ? <MyErrorMessage name="address" /> : null}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-5">
                        <Field className="accent-yellow-400 h-5 w-5" id="priority" name="priority" type="checkbox" />
                        <label className="text-gray-800 font-medium" htmlFor="priority">Want to give your order priority?</label>
                    </div>
                    <div className="mt-4">
                        <Button type="submit" disabled={isSubmitting || !isValid || isLoadingAddress}>
                            {`Order Now ${formatCurrency(values.priority ? subtotal + calcPriorityPrice(subtotal) : subtotal)}`}
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default OrderForm