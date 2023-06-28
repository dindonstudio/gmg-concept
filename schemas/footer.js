export default {
    type: 'document',
    name: 'footer',
 
    title: 'Footer',
 
    fields: [
      // Other fields in the footer document schema...
      {
        name: "texts",
        type: "array",
        title: "Informations Footer",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "text",
                type: "string",
                title: "Texte",
              },
        
            ],
          },
        ],
      },

    ],
  };
  