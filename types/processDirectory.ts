import { ComponentType } from "react";

export type Process = {
    Component: ComponentType;
};

export type Processes=Partial<{
    [id: string]: Process;
}>;
