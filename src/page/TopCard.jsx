import { useCallback, useEffect, useMemo, useState } from "react";
import { Card } from "../components/ui/card";
import { CheckButton } from "./CheckButton";
import { Dot } from "./Dot";
import { Dropdown } from "./Dropdown";
import { PlusButton } from "./PlusButton";
import { CrossButton } from "./CrossButton";
import {
  useRecoilState,
  useResetRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { dropdowndataFamily, dropdownIdsAtom } from "@/atoms/dropdownAtom";
import { DebugDropdownValues } from "@/Debugdropdown/debugdropdown";
import { AlertComponent } from "./AlertComponent";
import { ConfirmAtom } from "@/atoms/ConfirmAtom";
import { allDropdownDataSelector } from "@/atoms/selector";
import { showAlertAtom, alertMessageAtom } from "@/atoms/alertAtoms";

export function TopCard() {
  const [dropdownId, setDropdownId] = useRecoilState(dropdownIdsAtom);
  const lastId = dropdownId[dropdownId.length - 1];
  const lastData = useRecoilValue(dropdowndataFamily(lastId));
  const resetDropDownData = useResetRecoilState(dropdowndataFamily(lastId));
  const [showAlert, setShowAlert] = useRecoilState(showAlertAtom);
  const setConfirmed = useSetRecoilState(ConfirmAtom);
  const [alertText, setAlertText] = useRecoilState(alertMessageAtom);
  const resetConfirmed = useResetRecoilState(ConfirmAtom);

  const deleteLastDropdown = useCallback(() => {
    setShowAlert(false);
    if (dropdownId.length === 0) return;
    resetDropDownData();
    const updated = dropdownId.slice(0, -1);
    setDropdownId(updated);
    if (updated.length === 0) {
      resetConfirmed();
    }
  }, [setDropdownId, setShowAlert, dropdownId]);

  const addDropDown = useCallback(() => {
    setShowAlert(false);
    if (dropdownId.length === 0 || lastData?.type) {
      const id = Date.now();
      setDropdownId((prev) => [...prev, id]);
      setShowAlert(false);
    } else {
      console.log(
        "Please fill out the previous dropdown."
      );
      setAlertText(
        "Please fill out the previous option"
      );
      setShowAlert(true);
    }
  }, [setShowAlert, dropdownId, setDropdownId, setAlertText, lastData]);

  const showTextarea = useCallback(() => {
    if (dropdownId.length === 0) {
      setAlertText(
        "You must add atleast one option to use textarea"
      );
      setShowAlert(true);
      return false;
    }
    if (!lastData?.type) {
      setAlertText(
        "Please select a transform method"
      );
      setShowAlert(true);
      return false;
    }
    return true;
  }, [dropdownId, lastData, setAlertText, setShowAlert]);

  const handleCheck = useCallback(() => {
    setShowAlert(false);
    if (showTextarea()) {
      setConfirmed(true);
    }
  }, [setShowAlert, setConfirmed, showTextarea]);

  return (
    <>
      <div className="min-h-6 overflow-hidden w-full">
        <div
          className={` ${
            showAlert ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
          }`}
        >
          <AlertComponent alert={alertText} />
        </div>
      </div>

      <Card
        className="size-full w-full transition-[border,box-shadow] hover:border-white/30  
             md:mb-0 duration-300 ease-in-out flex flex-row justify-between items-center 
             p-2 md:px-6 md:py-3 bg-slate-50/5 backdrop-blur-[18px] border-white/10  
             max-w-md md:max-w-7xl shadow-[0_0_20px_rgba(0,255,255,0.05)]"
      >
        {/* Left side - dropdowns */}
        <div className="flex flex-wrap gap-2">
          {dropdownId.map((id, index) => (
            <Dropdown key={id} id={id} />
          ))}
        </div>

        {/* Right side - buttons */}
        <div className="flex gap-2 items-center">
          <PlusButton onClick={addDropDown} />
          <CheckButton onClick={handleCheck} />
          <CrossButton onClick={deleteLastDropdown} />
        </div>
      </Card>

      {/* <DebugDropdownValues /> */}
    </>
  );
}
