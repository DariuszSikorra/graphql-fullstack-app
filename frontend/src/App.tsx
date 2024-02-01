import "./App.css";
import LoginForm from "./components/LoginForm";
import TechnologiesDisplay from "@/components/technologiesDisplay/TechnologiesDisplay";

function App() {
  return (
    <>
      <h1>Your App</h1>
      <LoginForm />

      <TechnologiesDisplay />
    </>
  );
}

export default App;
