import Viewer from "@samvera/clover-iiif/viewer";
import {
  InformationPanel,
  AnnotationEditor,
  EditorProvider,
} from "../lib/main";

function App() {
  const base_url = "http://localhost:3000";
  const iiifContent = `${base_url}/api/fixtures/newspaper/issue_1`;
  const annotationServer = `${base_url}/api/annotations/1`;
  const token = "123abc";
  const searchTerm = "Berliner";

  return (
    <EditorProvider>
      <Viewer
        iiifContent={iiifContent}
        iiifContentSearchQuery={{ q: searchTerm }}
        plugins={[
          {
            id: "AnnotationEditor",
            imageViewer: {
              controls: {
                component: AnnotationEditor,
                componentProps: {
                  annotationServer: annotationServer,
                  token: token,
                },
              },
            },
            informationPanel: {
              component: InformationPanel,
              label: { none: ["Clippins"] },
              componentProps: {
                annotationServer: annotationServer,
                token: token,
              },
            },
          },
        ]}
      />
    </EditorProvider>
  );
}

export default App;
