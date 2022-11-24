export default{
  title: 'Work',
  name: 'work',
  type: 'document',
  fields:[
    {
      title:'Title',
      name:'title',
      type:'string'
    },
    {
      title:'Description',
      name:'description',
      type:'string'
    },
    {
      name: 'category',
      type: 'object',
      fields: [
        {
          title: 'Category',
          name: 'category',
          type: 'reference',
          to:[{type:'category'}]
        }
      ]
    },
    {
      title:'Image',
      name:'image',
      type:'image'
    },
    {
      title:'Url',
      name:'url',
      type:'url'
    },
    {
      title:'Github',
      name:'github',
      type:'url'
    },
  ]
}