import Viewer from "@samvera/clover-iiif/viewer";
import {
  InformationPanel,
  AnnotationEditor,
  EditorProvider,
} from "../lib/main";

function App() {
  const url = "http://localhost:3000";

  return (
    <>
      <EditorProvider>
        <Viewer
          iiifContent={`${url}/api/newspaper/collection`}
          iiifContentSearch={`${url}/api/newspaper_search/1?q=Berliner`}
          plugins={[
            {
              id: "AnnotationEditor",
              menu: {
                component: AnnotationEditor,
                componentProps: {
                  annotationServer: `${url}/api/annotationsByCanvas/1`,
                  token: "123abc",
                },
              },
              informationPanel: {
                component: InformationPanel,
                label: { none: ["Clippings"] },
                componentProps: {
                  annotationServer: `${url}/api/annotations/1`,
                  token: "123abc",
                },
              },
            },
          ]}
          options={{
            ignoreAnnotationOverlaysLabels: ["Clippings"],
            informationPanel: { open: true, renderAbout: false },
            canvasHeight: "640px",
          }}
        />
      </EditorProvider>
    </>
  );
}

export default App;
