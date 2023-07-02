export default {
    type: 'document',
    name: 'footer',
 
    title: 'Footer',
 
    fields: [
      {
        name: 'footerText',
        type: 'text',
        title: 'Phrase Contact',
      },
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
  