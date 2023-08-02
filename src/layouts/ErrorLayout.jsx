import Button from "../components/ui/Button";
import { useNavigate, useRouteError } from "react-router-dom"

function ErrorLayout() {

    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <div>
            <img className="max-w-xs mx-auto w-auto" src="/error_img.png" alt="sad pizza" width={300} height={300} />
            <div className="-mt-4 text-center">
                <h1 className="text-2xl text-stone-700 font-semibold">Something went wrong</h1>
                <p className="mt-2">{error.message || error.data}</p>
                <span className="max-w-[200px] block mx-auto mt-2">
                    <Button type="button" onClick={() => navigate(-1)}>
                        Go Back
                    </Button>
                </span>

            </div>
        </div>
    )
}

export default ErrorLayout