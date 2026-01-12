import { LoaderCircle, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { sleep } from "radash";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useQueryParams } from "../../hooks/useQueryParams";
import { useTranslation } from "react-i18next";

export const SearchBar: React.FC<{ className?: string }> = ({ className }) => {
  const { search, updateSearch } = useQueryParams();
  const [loading, setLoading] = useState(false);
  const [debouncedValue, setValue] = useDebounceValue("", 150);
  const inputRef = useRef<HTMLInputElement>(null!);

  const { t } = useTranslation("translation");

  async function handleSearch() {
    if (!debouncedValue) return;
    setLoading(true);
    await sleep(500);
    updateSearch(debouncedValue);
    window?.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(false);
  }

  useEffect(() => {
    if (!search && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [search]);

  return (
    <div
      className={cn(
        "relative grow overflow-hidden rounded-xs mt-2.5",
        className
      )}
    >
      <Input
        maxLength={50}
        defaultValue={search}
        type="search"
        ref={inputRef}
        placeholder={t("common.search-placeholder")}
        className={cn(
          "overflow-hidden focus-visible:ring-0 text-sm bg-white border border-gray-100/50 md:bg-gray-100/60 focus-visible:border-gray-100 placeholder:text-xs h-11 rounded-xs! pr-10 pl-5",
          { "animate-pulse": loading }
        )}
        onChange={(event) => {
          if (!event?.target?.value) updateSearch(event?.target?.value);
          setValue(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleSearch();
        }}
      />

      <button
        className="hover:scale-105 duration-500 transition-all hover:bg-primary/90 absolute right-2 my-auto top-0 bottom-0 cursor-pointer bg-amber-500 size-7 rounded-xs flex justify-center items-center"
        onClick={async () => handleSearch()}
      >
        {!loading ? (
          <Search className="size-4 text-white" />
        ) : (
          <LoaderCircle className="size-4 text-white animate-spin" />
        )}
      </button>
    </div>
  );
};
