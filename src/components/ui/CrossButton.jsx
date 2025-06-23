import { Button } from "./button";

export function CrossButton({onClick}) {
    return (
        <Button title="Remove" onClick={onClick} variant="link" className="text-white  border border-white/10 hover:text-red-400  size-6 rounded-full hover:bg-accent hover:text-accent-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

        </Button>
    )
}