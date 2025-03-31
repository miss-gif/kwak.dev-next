import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GlobeIcon } from "lucide-react";
import { useState } from "react";

export function LanguageDialog() {
  const [languageValue, setLanguageValue] = useState("한국어");
  const [selectedLanguage, setSelectedLanguage] = useState(languageValue);

  const handleLanguageChange = () => {
    setLanguageValue(selectedLanguage);
  };

  const languages = [
    { value: "한국어", label: "한국어" },
    { value: "English", label: "English" },
    { value: "日本語", label: "日本語" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-sm">
          <GlobeIcon />
          {languageValue}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>언어설정</DialogTitle>
          <DialogDescription className="sr-only">
            언어설정 Dialog 입니다.
          </DialogDescription>
        </DialogHeader>

        <RadioGroup
          value={selectedLanguage}
          onValueChange={setSelectedLanguage}
        >
          {languages.map(({ value, label }, index) => (
            <div key={value} className="flex items-center space-x-2">
              <RadioGroupItem value={value} id={`r${index + 1}`} />
              <Label htmlFor={`r${index + 1}`}>{label}</Label>
            </div>
          ))}
        </RadioGroup>

        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleLanguageChange}>변경</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
