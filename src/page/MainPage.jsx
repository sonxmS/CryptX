import { MainCard } from "./MainCard";
import { Navbar } from "./Navbar";
import { TopCard } from "./TopCard";

export function MainPage() {
  return (
    <div className="flex min-h-svh flex-col items-center bg-[linear-gradient(135deg,_#070200,_#0a0a0a)] px-4">
        <Navbar/>
      <div className="w-full max-w-7xl md:mt-6 mb-10 flex flex-col items-center">
        <TopCard />
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-7xl items-center md:items-stretch justify-center pb-10 h-full">
        <MainCard
          label="Encryption"
          placeholderLabel="Enter text you want to encrypt"
          button="Encrypt"
          inputId="encrypt-input"
          outputId="encrypt-output"
        />
        <MainCard
          label="Decryption"
          placeholderLabel="Enter text you want to decrypt"
          button="Decrypt"
          inputId="decrypt-input"
          outputId="decrypt-output"
        />
      </div>
    </div>
  );
}
