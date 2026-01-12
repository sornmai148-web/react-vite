import { Dialog, DialogPanel } from "@headlessui/react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import AnimateHeight from "react-animate-height";
import { useQueryParams } from "@/modules/shared/hooks/useQueryParams";
import { useFilterMedata } from "@/modules/shared/hooks/useFilterMedata";
import { useAnimatedContentHeight } from "@/modules/shared/hooks/useAnimatedContentHeight";
import { Button } from "@/components/ui/button";
import type { IFilterOption } from "@/api/interface";
import { useTranslation } from "react-i18next";

interface Props {
  filterOptions: Array<IFilterOption>;
}

export const ModalOptionFilter: React.FC<Props> = ({ filterOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { parentId, selfId, updateSelfId, updateParentId, clearAll } =
    useQueryParams();
  const { setData: setMetadata } = useFilterMedata();

  const { t } = useTranslation("translation");

  return (
    <>
      <Button
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
        variant="link"
        size="icon"
      >
        <SlidersHorizontal />
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none md:hidden"
        onClose={() => setIsOpen(false)}
        __demoMode
      >
        <div className="fixed w-screen inset-0 z-50! overflow-y-auto">
          <div className="flex items-center justify-center">
            <DialogPanel
              transition
              className="w-full relative pt-16 h-dvh bg-gray-100 px-6 pb-8 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <p className="text-xl font-bold text-amber-500">
                    {t("common.filter-label")}
                  </p>
                  <div className="grow h-px bg-white" />
                </div>

                {/*-- Parent Level ---*/}
                <div className="flex flex-col space-y-3 h-[calc(100dvh-150px)] overflow-y-auto scrollbar-none">
                  {(filterOptions || [])?.map((parentOpt) => (
                    <div
                      key={`${parentOpt?.id}-${parentOpt?.name}`}
                      className={cn(
                        "cursor-pointer px-4 py-2.5 bg-white rounded-xs"
                      )}
                      onClick={() => {
                        const hasNextChild = (parentOpt?.children || [])
                          ?.length;

                        if (hasNextChild) return null;

                        updateParentId("");
                        updateSelfId(parentOpt?.id);
                        setMetadata([parentOpt?.name]);

                        //-- This line of code is scrolled to top andn jump to selected filter if matched
                        const el = document.getElementById(
                          `${parentOpt?.id}-${parentOpt?.name}`
                        );
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                        window?.scrollTo({ top: 0, behavior: "smooth" });
                        setIsOpen(false);
                      }}
                    >
                      <button
                        className={cn(
                          "hover:text-amber-500 hover:scale-105 duration-500 transition-all cursor-pointer flex items-center space-x-2",
                          {
                            "text-amber-500":
                              (parentOpt?.id == -1 && !selfId && !parentId) ||
                              parentOpt?.id == +selfId ||
                              parentOpt?.id == +parentId,
                          }
                        )}
                        onClick={() => {
                          setIsOpen(false);

                          updateParentId("");
                          updateSelfId(parentOpt?.id);
                          setMetadata([parentOpt?.name]);

                          //-- This line of code is scrolled to top andn jump to selected filter if matched
                          const el = document.getElementById(
                            `${parentOpt?.id}-${parentOpt?.name}`
                          );

                          if (el) el.scrollIntoView({ behavior: "smooth" });
                          window?.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <div
                          role="button"
                          className="bg-amber-400 p-0.5 rounded-xs"
                        >
                          <ArrowUpRight className="size-3 text-white" />
                        </div>
                        <span className="text-sm">{parentOpt?.name}</span>
                      </button>

                      <SubType
                        parentId={parentOpt?.id}
                        parentName={parentOpt?.name}
                        filterOptions={parentOpt?.children || []}
                        onClick={() => {
                          setIsOpen(false);
                          const el = document.getElementById(
                            `${parentOpt?.id}-${parentOpt?.name}`
                          );
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                          window?.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setIsOpen(false);
                  clearAll();
                  setMetadata([]);
                  const el = document.getElementById(
                    `-1-${t("common.news-label")}`
                  );
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  window?.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full bg-amber-500 text-sm py-1.5 mt-2 font-medium text-white"
              >
                {t("common.clear-filter")}
              </button>

              {/*-- Close Button --*/}
              <button
                className="cursor-pointer absolute top-8 right-6 p-1 bg-orange-400/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <X className="text-amber-500 size-5" />
              </button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

interface SubTypeProps {
  parentId: number;
  parentName: string;
  filterOptions: Array<IFilterOption>;
  onClick: () => void;
}

const SubType: React.FC<SubTypeProps> = (props) => {
  const { parentId, parentName, filterOptions, onClick } = props;

  const { selfId, updateSelfId, updateParentId } = useQueryParams();
  const { setData: setMetadata } = useFilterMedata();

  const {
    contentRef,
    height,
    defaultHeight,
    revealExceedMax,
    revealHiddenContent,
  } = useAnimatedContentHeight({
    defaultHeight: 80,
    dependency: filterOptions?.length,
  });

  if (!filterOptions?.length) return null;

  return (
    <div className="relative">
      <AnimateHeight
        id="example-panel z-20"
        className="rounded-b-md"
        duration={150}
        easing="linear"
        height={height || defaultHeight}
      >
        <div ref={contentRef} className="flex flex-wrap gap-2 py-2">
          {(filterOptions || [])?.map((childLevel) => (
            <button
              key={`${childLevel?.id}-${childLevel?.name}`}
              className={cn(
                "cursor-pointer bg-primary/5 hover:bg-amber-500 hover:text-white duration-500 transition-colors text-center py-1.5 px-1.5 grow rounded-xs text-xs",
                { "text-white bg-amber-500": childLevel?.id == +selfId }
              )}
              onClick={() => {
                updateParentId(parentId);
                updateSelfId(childLevel?.id);
                setMetadata([parentName, childLevel?.name]);
                onClick();
              }}
            >
              {childLevel?.name}
            </button>
          ))}
        </div>
      </AnimateHeight>

      {revealExceedMax && (
        <div className="flex justify-center items-center">
          <button
            className="px-4 mt-1 bg-white border border-gray-100 cursor-pointer rounded-2xl"
            aria-expanded={height !== 0}
            aria-controls="filter-type2"
            onClick={revealHiddenContent}
          >
            {+height >= defaultHeight ? (
              <ChevronDown className="size-4 text-amber-500" />
            ) : (
              <ChevronUp className="size-4 text-amber-500" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};
