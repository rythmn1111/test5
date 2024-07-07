import { ProcessConsumer, ProcessContext } from "../../contexts/process";
import processDirectory from "../../utils/processDirectory";

const WindowManager =()=>(
    
    <ProcessConsumer>
    {({processes}) => Object.entries(processDirectory).map(([id, { Component }]) => (
      <Component key={id} />
      ))}
    </ProcessConsumer>
)


export default WindowManager;