import * as React from "react";
import { createComponent, EventName } from "@lit/react";
import { SimpleButton as WebComponent } from "./simple-button";

export const SimpleButtonReact = createComponent({
  react: React,
  tagName: "simple-button",
  elementClass: WebComponent,
  events: {
    blur: "blur" as EventName<FocusEvent>,
    focus: "focus" as EventName<FocusEvent>,
    click: "click" as EventName<MouseEvent>,
  },
});
