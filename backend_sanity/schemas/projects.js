export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: "reference",
          to: [
            {
              type: "skill",
            }
          ]
        }
      ]
    },
    {
      name: 'linkToBuild',
      title: 'LinktoBuild',
      type: 'url',
    },
  ],
}
