import dynamic from "next/dynamic";
import HelloWorld from "../components/apps/helloworld";
import { Component } from "react";

const processDirectory = {
    HelloWorld: {
        Component: dynamic(() => import("../components/apps/helloworld")),
    }
}

export default processDirectory;