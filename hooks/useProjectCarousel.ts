import { useEffect, useMemo, useRef, useState } from "react";
import { paginateItems } from "../utils/paginateItems";

// Flexible config: accepts either a fixed number or responsive config with mobile/desktop breakpoints
type CarouselPageSizeConfig =
    | number
    | {
        mobile: number;
        desktop: number;
        breakpoint?: number;
    };

// Inner hook to handle responsive page size logic
function useCarouselPageSize(config: CarouselPageSizeConfig) {
    if (typeof config === "number") return config;

    const { mobile, desktop, breakpoint = 768 } = config;
    const [pageSize, setPageSize] = useState(desktop);

    useEffect(() => {
        const updatePageSize = () => {
            setPageSize(window.innerWidth < breakpoint ? mobile : desktop);
        };

        updatePageSize();
        window.addEventListener("resize", updatePageSize);

        return () => {
            window.removeEventListener("resize", updatePageSize);
        };
    }, [mobile, desktop, breakpoint]);

    return pageSize;
}

// Inner hook to handle drag-and-scroll functionality
function useDragScroll() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const dragStateRef = useRef({ isDown: false, startX: 0, startScrollLeft: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        const slider = sliderRef.current;
        if (!slider) return;

        // Store initial pointer position and scroll state
        dragStateRef.current = {
            isDown: true,
            startX: event.pageX,
            startScrollLeft: slider.scrollLeft,
        };
        setIsDragging(true);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const slider = sliderRef.current;
        const { isDown, startX, startScrollLeft } = dragStateRef.current;
        if (!slider || !isDown) return;

        // Calculate drag distance and update scroll position
        event.preventDefault();
        const dragDistance = event.pageX - startX;
        slider.scrollLeft = startScrollLeft - dragDistance;
    };

    const handleMouseUp = () => {
        dragStateRef.current.isDown = false;
        setIsDragging(false);
    };

    return {
        sliderRef,
        isDragging,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
    };
}

// Main carousel hook with drag-and-drop and responsive pagination
export function useProjectCarousel<T>(items: T[], pageSizeConfig: CarouselPageSizeConfig) {
    const pageSize = useCarouselPageSize(pageSizeConfig);
    const { sliderRef, isDragging, handleMouseDown, handleMouseMove, handleMouseUp } = useDragScroll();

    // Memoize paginated items to avoid recalculation on every render
    const pagedItems = useMemo(() => paginateItems(items, pageSize), [items, pageSize]);

    return {
        sliderRef,
        isDragging,
        pagedItems,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
    };
}