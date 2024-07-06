import dynamic from "next/dynamic";
import HelloWorld from "../components/apps/helloworld";
import { Component } from "react";
import { Processes } from "../types/processDirectory";

const processDirectory: Processes = {
    HelloWorld: {
        Component: dynamic(() => import("../components/apps/helloworld")),
    }
}

export default processDirectory;