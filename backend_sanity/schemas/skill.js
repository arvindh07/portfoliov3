export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'progress',
      title: 'Progress',
      description:"Progress of skill from 0 to 100",
      type: 'number',
      validation: Rule => Rule.min(0).max(100),
    },
  ],
}
