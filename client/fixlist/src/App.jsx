import "./App.css";
import JobList from "./components/JobList";
import NewJob from "./components/NewJob";

function App() {
  return (
    <>
      <JobList />

      <NewJob />
    </>
  );
}

// will be working shortly on some new features and using a real database with better ui
export default App;
