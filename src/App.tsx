import Viewer from "@samvera/clover-iiif/viewer";

function App() {
  return (
    <>
      <Viewer iiifContent="https://api.dc.library.northwestern.edu/api/v2/works/8a833741-74a8-40dc-bd1d-c416a3b1bb38?as=iiif" />
    </>
  );
}

export default App;
