"use client";
import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "../../lib/utils";

const Label = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        "text-lg font-medium text-black dark:text-white leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...rest}
    />
  );
});
Label.displayName = "Label";

export { Label };
