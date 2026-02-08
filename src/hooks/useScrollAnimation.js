'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.1
 * @param {string} options.rootMargin - Root margin, default '0px 0px -50px 0px'
 * @param {boolean} options.triggerOnce - Only trigger once, default true
 * @returns {[React.RefObject, boolean]} - Ref to attach and visibility state
 */
export function useScrollAnimation(options = {}) {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        triggerOnce = true
    } = options;

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isVisible];
}

/**
 * Custom hook for staggered scroll animations (for lists/grids)
 * @param {number} itemCount - Number of items to animate
 * @param {Object} options - Options including staggerDelay
 * @returns {[React.RefObject, boolean[], boolean]} - Container ref, visibility states, container visible
 */
export function useStaggeredScrollAnimation(itemCount, options = {}) {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -50px 0px',
        staggerDelay = 100
    } = options;

    const ref = useRef(null);
    const [containerVisible, setContainerVisible] = useState(false);
    const [visibleItems, setVisibleItems] = useState(Array(itemCount).fill(false));

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !containerVisible) {
                    setContainerVisible(true);
                    // Stagger the visibility of each item
                    for (let i = 0; i < itemCount; i++) {
                        setTimeout(() => {
                            setVisibleItems(prev => {
                                const newState = [...prev];
                                newState[i] = true;
                                return newState;
                            });
                        }, i * staggerDelay);
                    }
                    observer.unobserve(element);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [itemCount, staggerDelay, threshold, rootMargin, containerVisible]);

    return [ref, visibleItems, containerVisible];
}

export default useScrollAnimation;
