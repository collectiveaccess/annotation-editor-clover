# Annotation editor plugin for Clover IIIF

This in an annotation editor plugin for Clover. It uses Annotorious.

## Clover users: install Annotation editor plugin

If you would like to add this plugin to your Clover app, follow these steps.

```
npm install https://github.com/wykhuh/annotation-editor-clover#dist
```

In your app, add plugins when setting up the Clover viewer

```jsx
import Viewer from "@samvera/clover-iiif/viewer";
import {
  InformationPanel,
  AnnotationEditor,
  EditorProvider,
} from "annotation-editor-clover";

function App() {
  const base_url = "http://localhost:3000";
  const iiifContent = `${base_url}/api/fixtures/newspaper/issue_1`;
  const annotationServer = `${base_url}/api/annotations/1`;
  const token = "123abc";

  return (
    <EditorProvider>
      <Viewer
        iiifContent={iiifContent}
        plugins={[
          {
            id: "AnnotationEditor",
            imageViewer: {
              menu: {
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
```

## Clover developers: update Annotation editor plugin

If you would like to contribute code to this plugin, you to download this repo and the [newspaper_dev_iiif_server](https://github.com/wykhuh/newspaper_dev_iiif_server) repo.

## setup

Git clone this repo.

Install dependencies

```bash
npm install
```

Start dev server. The will start a React app with Clover and AnnotationEditor. The app connects to the api in `newspaper_dev_iiif_server`.

```bash
npm run dev
```

The code for the AnnotationEditor is in `lib/AnnotationEditor`. The code for the demo app is in `src`. As you change the code in `lib/AnnotationEditor`, the changes can be seen in the demo app.
