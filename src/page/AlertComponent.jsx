import { Alert, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon } from "lucide-react"

export function AlertComponent({alert}) {
    return (
        <Alert className="flex justify-center text-red-700 border p-2 border-white/10 bg-slate-50/5 w-auto mb-1 md:mb-0 mt-3 lg:mt-0">
            <AlertCircleIcon className="mb-1"/>
            <AlertTitle className="m-0">
                {alert}
            </AlertTitle>
        </Alert>
    )
}