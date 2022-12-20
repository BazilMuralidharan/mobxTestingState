import "./styles.css";
import { observer } from "mobx-react-lite";
import { autorun } from "mobx";
import React, { useContext, useEffect } from "react";
import JsonContext from "./mox/provider";
const App = observer(() => {
  const JsonPostView = useContext(JsonContext);

  console.log(JsonPostView);
  const fetching = () => {
    autorun(() => JsonPostView.fetchApi());
  };

  useEffect(() => {
    // fetching();
    JsonPostView.fetchApi();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <button onClick={() => JsonPostView.deletePart()}> deletePart</button>

      {JsonPostView?.loading ? (
        <p>loaddddd.....</p>
      ) : (
        JSON.stringify(JsonPostView?.userList)
      )}
    </div>
  );
});
export default App;
