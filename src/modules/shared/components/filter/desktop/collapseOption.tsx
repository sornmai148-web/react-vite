"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import AnimateHeight from "react-animate-height";

import { useQueryParams } from "@/modules/shared/hooks/useQueryParams";
import type { IFilterOption } from "@/api/interface";
import { useFilterMedata } from "@/modules/shared/hooks/useFilterMedata";
import { useAnimatedContentHeight } from "@/modules/shared/hooks/useAnimatedContentHeight";

export const CollapseOption: React.FC<{ items: Array<IFilterOption> }> = (
  props
) => {
  return (
    <div className="flex flex-col space-y-2 max-h-[55dvh] overflow-y-auto scrollbar-none! mt-3">
      {(props?.items || [])?.map((parentOpt) => {
        return (
          <div
            key={`x-${parentOpt?.name}`}
            id={`x-${parentOpt?.name}`}
            className="px-2.5 py-2.5 bg-gray-50 rounded-xs"
          >
            <SubFilterOptions
              parentId={parentOpt?.id}
              parentName={parentOpt?.name}
              children={parentOpt?.children || []}
            />
          </div>
        );
      })}
    </div>
  );
};

interface SubFilterOptionsProps {
  parentId: number;
  parentName: string;
  children: Array<IFilterOption>;
}

const SubFilterOptions: React.FC<SubFilterOptionsProps> = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const {
    height,
    defaultHeight,
    contentRef,
    revealExceedMax,
    revealHiddenContent,
  } = useAnimatedContentHeight({ defaultHeight: 115, dependency: isExpanded });

  const { parentId, selfId, updateParentId, updateSelfId } = useQueryParams();
  const { setData: updateMedata } = useFilterMedata();

  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    collapsedHeight: 0,
    easing: "linear",
    duration: 200,
  });

  useEffect(() => {
    if (parentId && +parentId == +props?.parentId) {
      setExpanded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!parentId || +parentId != +props?.parentId) {
      setExpanded(false);
    }
  }, [parentId, props?.parentId]);

  return (
    <>
      <div className="flex items-center justify-between">
        <button
          className={cn(
            "hover:scale-105 bg-white md:px-2 lg:px-4 py-1 rounded-xs text-sm md:text-xs lg:text-sm max-w-5/6 text-start hover:text-amber-500 hover:bg-amber-50 duration-300 transition-all cursor-pointer",
            {
              "text-amber-500 font-bold":
                props?.parentId == +selfId || props?.parentId == +parentId,
            }
          )}
          onClick={() => {
            updateParentId("");
            updateSelfId(props?.parentId);
            const el = document.getElementById(`x-${props?.parentName}`);
            if (el) el.scrollIntoView({ behavior: "smooth" });
            window?.scrollTo({ top: 0, behavior: "smooth" });
            updateMedata([props?.parentName]);
          }}
        >
          {props?.parentName}
        </button>

        {(props?.children?.length || 0) > 0 && (
          <span
            className="cursor-pointer p-0.5 bg-amber-500/10 rounded-xs"
            role="button"
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? (
              <ChevronUp className="size-4 text-amber-500" />
            ) : (
              <ChevronDown className="size-4 text-amber-500" />
            )}
          </span>
        )}
      </div>

      <section
        {...getCollapseProps()}
        className="w-full! bg-white mt-3 rounded-xs border border-gray-100"
      >
        <AnimateHeight
          id="example-panel z-20"
          className="rounded-b-md"
          duration={150}
          easing="linear"
          height={height || defaultHeight}
        >
          <div
            ref={contentRef}
            className="grid grid-cols-2 gap-2 py-2 px-2 text-[13px] md:text-[10px] lg:text-xs"
          >
            {(props?.children || [])?.map((childOpt) => (
              <button
                key={childOpt?.id}
                className={cn(
                  "bg-gray-50 py-1.5 rounded-xs hover:bg-amber-500/10 hover:text-amber-500 cursor-pointer duration-300 transition-colors",
                  { "text-white bg-amber-500": childOpt?.id == +selfId }
                )}
                onClick={() => {
                  updateParentId(props?.parentId);
                  updateSelfId(childOpt?.id);
                  window?.scrollTo({ top: 0, behavior: "smooth" });
                  updateMedata([props?.parentName, childOpt?.name]);
                }}
              >
                {childOpt?.name}
              </button>
            ))}
          </div>
        </AnimateHeight>

        {revealExceedMax && (
          <div className="flex justify-center items-center">
            <button
              className="px-4 mt-1 mb-2 bg-white border border-gray-100 cursor-pointer rounded-xs"
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
      </section>
    </>
  );
};
