import { AlertCircleIcon } from "lucide-react"
import { Alert, AlertTitle } from "./alert"
export function AlertComponent({alert}) {
    return (
        <Alert className="flex justify-center text-red-700 border border-white/10 bg-slate-50/5 w-auto m-1">
            <AlertCircleIcon className="mb-1"/>
            <AlertTitle className="m-0">
                {alert}
            </AlertTitle>
        </Alert>
    )
}