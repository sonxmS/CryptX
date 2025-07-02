import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { CheckButton } from "./components/ui/CheckButton"
import { MainCard } from "./components/ui/MainCard"
import { PlusButton } from "./components/ui/PlusButton"
import { PlusImage } from "./components/ui/plusImage"
import { TickImage } from "./components/ui/tickImage"
import { TopCard } from "./components/ui/TopCard"

export function MainPage() {
    return (
        <div className="flex min-h-svh flex-col  items-center justify-evenly bg-[linear-gradient(135deg,_#070200,_#0a0a0a)] ">
            <TopCard/>
            <div className="flex justify-center items-center md:gap-5 mb-7 md:flex-row flex-col gap-5 pb-5">
                <MainCard label="Encryption" placeholderLabel="Enter text you want to encrypt" button="Encrypt" inputId="encrypt-input" outputId="encrypt-output" />
                <MainCard label="Decryption" placeholderLabel="Enter text you want to decrypt" button="Decrypt" inputId="decrypt-input" outputId="decrypt-output" />
                
            </div>
        </div>
    )
}