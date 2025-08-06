import { Bounce, toast } from "react-toastify";

export function showToast(type, message) { 
    if (type === 'SUCCESS') { 
        toast.success(message, {
            position: "top-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    } else if (type === 'ERROR') { 
        toast.error(message, {
            position: "top-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
}