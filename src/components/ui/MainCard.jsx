import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "./button";
import { ButtonImg } from "./ButtonImg";
import { Card } from "./card";
import { Textarea } from "./textarea";
import { ConfirmAtom } from "@/atoms/ConfirmAtom";
import { allDropdownDataSelector } from "@/atoms/selector";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { alertMessageAtom, showAlertAtom } from "@/atoms/alertAtoms";
import { CopiedButton } from "./CopiedButton";



export function MainCard({ label, placeholderLabel, button, inputId, outputId }) {
    const allDropdowns = useRecoilValue(allDropdownDataSelector);
    const [Input, setInput] = useState("")
    const isConfirmed = useRecoilValue(ConfirmAtom)
    const [outputResult, setOutputResult] = useState("")
    const setShowAlert = useSetRecoilState(showAlertAtom);
    const setAlertText = useSetRecoilState(alertMessageAtom)
    const [copied,setCopied] = useState(false)
    const encryptVal = () => {
        try {

            if (!Input.trim()) {
                setAlertText("Please enter some input text before encrypting.");
                setShowAlert(true);
                return;
            }

            let result = Input;

            allDropdowns.forEach((dropdown) => {
                const { type, value } = dropdown;

                switch (type) {
                    case "Add prefix":
                        result = setPrefix(result, value);
                        if(!result) return;
                        break;
                    case "Add suffix":
                        result = setSuffix(result, value);
                        if(!result) return;
                        break;
                    case "AES Encryption":
                        result = aesEncryption(result, value);
                        if(!result) return;
                        break;
                    case "Base64 Encoding":
                        result = toBase64(result);
                        if(!result) return;
                        break;
                    default:
                        throw new Error(`Unknown transformation type: ${type}`);
                }
            });

            console.log("Final result:", result);
            setOutputResult(result)
        } catch (err) {
            console.error("Error:", err.message);
            setAlertText("Corrupted value for encryption");
            setShowAlert(true);
            return null;
        }
    };
    const decryptVal = () => {
        try {
            setShowAlert(false)
            if (!Input.trim()) {
                setAlertText("Please enter some input text before decrypting.");
                setShowAlert(true);
                return;
            }

            let result = Input;

            [...allDropdowns].reverse().forEach(dropdown => {
                const { type, value } = dropdown;

                switch (type) {
                    case "Add prefix":
                        result = removePrefix(result, value);
                        if(!result)return;
                        break;
                    case "Add suffix":
                        result = removeSuffix(result, value);
                        if(!result)return;
                        break;
                    case "AES Encryption":
                        result = aesDecryption(result, value);
                        if(!result)return;
                        break;
                    case "Base64 Encoding":
                        result = fromBase64(result);
                        break;
                    default:
                        throw new Error(`Unknown decryption type: ${type}`);
                }
            });

            console.log("Decryption result:", result);
            setOutputResult(result)
        } catch (err) {
            console.error("Decryption failed:", err.message);
            setAlertText("Decryption failed: Possibly corrupted input for decryption");
            setShowAlert(true);
            return null;
        }
    };

    const setPrefix = (input, prefix) => {
        if (!prefix.trim()) {
            setAlertText("Encryption failed: Enter value to be prefixed");
            setShowAlert(true);
            return null;
        }
        const result = prefix + input;
        return result;
    }

    const setSuffix = (input, suffix) => {
        if (!suffix.trim()) {
            setAlertText("Encryption failed: Enter value to be suffixed");
            setShowAlert(true);
            return null;
        }
        const result = input + suffix;
        return result;
    }

    const aesEncryption = (input, key) => {
        if (!key.trim()) {
            setAlertText("Encryption failed: Enter a valid key for AES encryption.");
            setShowAlert(true);
            return null;
        }
        const encrypted = CryptoJS.AES.encrypt(input, key).toString();
        return encrypted;
    };

    const toBase64 = (input) => {
        if (typeof input !== 'string') {
            setAlertText("Input must be a string");
            setShowAlert(true);
            return null;
        }
        return btoa(input);
    };

    const removePrefix = (input, prefix) => {
        if (input.startsWith(prefix)) {
            return input.slice(prefix.length);
        } else {
            setAlertText(`Decryption failed: Prefix "${prefix}" not found at the beginning of "${input}"`);
            setShowAlert(true)
            return null;
        }

    };

    const removeSuffix = (input, suffix) => {
        if (input.endsWith(suffix)) {
            return input.slice(0, input.length - suffix.length);
        } else {
            setAlertText(`Decryption failed: Suffix "${suffix}" not found at the beginning of "${input}"`);
            setShowAlert(true)
            return null;
        }

    };

    const aesDecryption = (encryptedText, key) => {
        if (!encryptedText || !key) {
            setAlertText("Decryption failed: Encrypted text and key are required for AES decryption.");
            setShowAlert(true)
            return null;
        }


        const bytes = CryptoJS.AES.decrypt(encryptedText, key);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);

        if (!decrypted) {
            setAlertText("Decryption failed: Incorrect key or corrupted input.");
            setShowAlert(true)
            return null;
        }
        return decrypted;
    };

    const fromBase64 = (encoded) => {
        if (typeof encoded !== 'string') {
            setAlertText("Decryption failed: Encoded input must be a string");
            setShowAlert(true);
            return null;
        }

        try {
            return atob(encoded);
        } catch (err) {
            setAlertText("Invalid base64 string");
            setShowAlert(true);
            return null;
        }
    };

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
                setCopied(false)
            },1000);
            return () => clearTimeout(timer);
        }
        
    },[copied])

    const copyToClipboard = () => {
        if (!outputResult.trim()) {
            setAlertText("Encrypt/Decrypt to copy")
            setShowAlert(true)
            return;
        }
        navigator.clipboard.writeText(outputResult).then(()=>{setCopied(true)})
    }

    return (<Card className="size-full transition-[border,box-shadow]  duration-300 ease-in-out px-4 p-7 bg-slate-50/5 backdrop-blur-[18px] border-white/10 hover:border-white w-90 shadow-[0_0_20px_rgba(0,255,255,0.05)]">
        <label htmlFor={inputId} className="text-slate-50">{label}</label>
        <Textarea disabled={!isConfirmed} onChange={(e) => (setInput(e.target.value))} title={!isConfirmed ? "Please enter transformation options and press the ✓ (check) button to enable this field" : ""} id={inputId} placeholder={placeholderLabel} className="text-slate-50 text-[13px] transition-[border] duration-200 ease-in-out h-40 border-white/10 hover:border-white">
        </Textarea>
        <Textarea id={outputId} placeholder="Your result would appear here" value={outputResult} className="text-slate-50 text-[13px] h-40 border-white/10" disabled></Textarea>
        <div className="flex gap-2 ">
            <Button variant="ghost" onClick={button === "Encrypt" ? encryptVal : decryptVal} className="text-white border border-white/10 "  >{button}</Button>
            <Button variant="ghost" onClick={copyToClipboard} size="icon" title="Copy to clipboard" className="hover:stroke-black border border-white/10 hover:border-white text-white" >{copied?<CopiedButton/>:<ButtonImg />}</Button>
        </div>
    </Card>)
}