
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas"
import {apiVersion, dataset, projectId} from './sanity/env'
import {withDocumentI18nPlugin, getDocumentList} from '@sanity/document-internationalization'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {schema} from './sanity/schema'
// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["header"])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
      //       S.listItem()
      //       .title("Overlay")
      //       .id("overlay")
      //       .child(
      //         // Instead of rendering a list of documents, we render a single
      //         // document, specifying the `documentId` manually to ensure
      //         // that we're editing the single instance of the document
      //         S.document()
      //           .schemaType("overlay")
      //           .documentId("overlay")
      //       ),
      //  S.divider(),
            // Our singleton type has a list item with a custom child
            // S.listItem()
            //   .title("Header")
            //   .id("header-info")
            //   .child(
            //     // Instead of rendering a list of documents, we render a single
            //     // document, specifying the `documentId` manually to ensure
            //     // that we're editing the single instance of the document
            //     S.document()
            //       .schemaType("header-info")
            //       .documentId("header-info")
            //   ),
              S.listItem()
              .title("Hero")
              .id("hero")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("hero")
                  .documentId("hero")
              ),
              S.listItem()
              .title("Presentation GMG")
              .id("presentation")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("presentation")
                  .documentId("presentation")
              ),
              orderableDocumentListDeskItem({type: 'projets',  title: 'Projects', S, context}),
              // S.documentTypeListItem("projets").title("Projets"),
       
             
             
              S.listItem()
              .title("Footer")
              .id("footer")
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("footer")
                  .documentId("footer")
              ),
              S.divider(),
            // Regular document types
            // S.documentTypeListItem("author").title("Authors"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
