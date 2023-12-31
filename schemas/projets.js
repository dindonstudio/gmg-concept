
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
export default {
    type: "document",
    name: "projets",
    i18n: true,
    title: "Projets",
    orderings: [orderRankOrdering],
    fields: [
   
      {
        name: "titre",
        type: "string",
        title: "Titre",
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        description:'click on generate to auto-fill',
        options: {
          source: 'titre',
          maxLength: 96,
        },
      },
      orderRankField({ type: "projets", name: 'name' }),
      {
        name: "sousTitre",
        type: "string",
        title: "Sous Titre",
      },
      {
        name: "text",
        type: "text",
        title: "Texte",
      },
      {
        name: "images",
        type: "array",
        title: "Item",
        description:'Image size should be < 2Mo',
        of: [
          {
            type: "object",
            fields: [
              {
                name: "image",
                type: "image",
                title: "Image",
                options: {
                  hotspot: true,
                },
            
              },
            ],
            preview: {
              select: {
                imageUrl: "image.asset.url",
                
              },
              prepare(selection) {
                const { imageUrl, name } = selection;
                return {
                  title: name || "Sans nom",
                  media: imageUrl ? <img src={imageUrl} alt={name} /> : null,
                };
              },
            },
          },
        ],
      },
    ],
  };
  