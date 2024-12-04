import { twMerge } from "tailwind-merge";
import { clsx } from 'clsx';
import React from "react";


export function cloneElement(element, classNames) {
    return React.cloneElement(element, {
        className: twMerge(element.props.className, classNames)
    });
}

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(input) {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path) {
  return `${process.env.NEXT_PUBLIC_APP_URL || window.location.origin}${path}`
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}