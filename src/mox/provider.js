import React, { createContext } from "react";

import jsonStore from "./jsonUser";

const JsonContext = createContext(new jsonStore());
export default JsonContext;
