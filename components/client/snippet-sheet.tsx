import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoAddOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MdTextFields } from "react-icons/md";
import { IoPricetags } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlineCode } from "react-icons/md";

import AceEditor from "react-ace";
import { useEffect } from "react";
import ace from "ace-builds";

// Import modes
import "ace-builds/src-min-noconflict/mode-javascript";
import "ace-builds/src-min-noconflict/mode-python";
import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/mode-typescript";
import "ace-builds/src-min-noconflict/mode-css";

// Import themes
import "ace-builds/src-min-noconflict/theme-monokai";
import "ace-builds/src-min-noconflict/theme-github";
import "ace-builds/src-min-noconflict/theme-tomorrow_night";

// Import extensions
import "ace-builds/src-min-noconflict/ext-language_tools";
import { useSnippetStore } from "@/store/snippet";
import { CodingLanguage } from "@/types/type";

const SnippetSheet = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    code,
    setCode,
    language,
    setLanguage,
    tags,
    setTags,
  } = useSnippetStore();

  useEffect(() => {
    ace.config.set(
      "basePath",
      "https://cdn.jsdelivr.net/npm/ace-builds@1.37.0/src-min-noconflict/"
    );
  }, []);

  return (
    <>
      <Sheet>
        <SheetTrigger className="text-white bg-black flex flex-row items-center gap-2 py-1.5 px-3 rounded-md">
          <IoAddOutline className="scale-110 text-white" />
          <span>Snippet</span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="flex flex-row relative">
              <MdTextFields className="absolute top-6 -left-2 scale-110 mt-[2px] text-gray-500" />
              <Input
                className="mt-4 ml-6 border-none shadow-none font-semibold px-0 placeholder:text-xl !text-xl tracking-wide"
                placeholder="New Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </SheetTitle>
            <span className="text-sm text-gray-500">
              {title} {description} {language}
              {code}
            </span>
          </SheetHeader>

          <div className="mt-6 flex relative">
            <IoPricetags className="absolute top-2 -left-2 scale-110 mt-[1px] text-gray-500" />
            <Select>
              <SelectTrigger className="w-[90px] ml-6 h-8">
                <SelectValue placeholder="Tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="API Methods">API Methods</SelectItem>
                <SelectItem value="Javascript Functions">
                  Javascript Functions
                </SelectItem>
                <SelectItem value="React Functions">React Functions</SelectItem>
                <SelectItem value="Python Scripts">Python Scripts</SelectItem>
                <SelectItem value="HTML Snippets">HTML Snippets</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-7 flex relative">
            <MdOutlineDescription className="absolute top-2 -left-2 scale-110 mt-[1px] text-gray-500" />
            <Textarea
              className="ml-6"
              rows={4}
              placeholder="New Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mt-6 relative">
            <MdOutlineCode className="absolute top-1 -left-2 scale-110 mt-[1px] text-gray-500" />
            <div className="code-editor border relative rounded-lg overflow-hidden ml-6">
              <Select
                onValueChange={(value: CodingLanguage) => setLanguage(value)}
              >
                <SelectTrigger className="w-[140px] h-8 m-2 mb-4">
                  <SelectValue placeholder="Javascript" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">Javascript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="html">HTML</SelectItem>
                  <SelectItem value="typescript">Typescript</SelectItem>
                  <SelectItem value="css">CSS</SelectItem>
                </SelectContent>
              </Select>
              <AceEditor
                mode={language}
                theme="xcode"
                name="code-editor"
                onChange={setCode}
                fontSize={14}
                width="100%"
                height="400px"
                value={code}
                className="w-full"
                style={{ borderRadius: "0px" }}
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  showLineNumbers: true,
                  tabSize: 2,
                  useWorker: false,
                  showPrintMargin: false,
                }}
              />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SnippetSheet;
