import Viewer from "@samvera/clover-iiif/viewer";

function App() {
  const url = "http://localhost:3000";

  return (
    <>
      <Viewer
        iiifContent={`${url}/api/newspaper/collection`}
      />
    </>
  );
}

export default App;
