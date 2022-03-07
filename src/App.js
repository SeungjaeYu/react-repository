import Login from "./component/Login";
import Main from "./component/Main";
import {useEffect, useState} from "react";

function App() {


  const [isLogin,setIsLogin] = useState(false);

  const [isMain, setIsMain] = useState(<Login isLogin ={setIsLogin}/>)

    useEffect(() => {
        if(!isLogin) {
            setIsMain(<Login isLogin ={setIsLogin}/>);
        } else {
            setIsMain(<Main isLogin ={setIsLogin} />)
        }

    },[isLogin])






  return (
    <div className="App">
        {isMain}
    </div>
  );
}

export default App;
