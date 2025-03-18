import { useSelector } from "react-redux";
import { LANG_CONSTANTS } from "../utils/languageConstants";

const GptSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={LANG_CONSTANTS[lang].searchPlaceholder}
        />
        <button className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3">
          {LANG_CONSTANTS[lang].searchButtonText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;