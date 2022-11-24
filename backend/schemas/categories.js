export default{
  title: 'Category',
  name: 'category',
  type: 'document',
  fields:[
    {
      title:'Name',
      name:'name',
      type:'string'
    },
    {
      name: 'work',
      type: 'object',
      fields: [
        {
          title: 'Work',
          name: 'work',
          type: 'array',
          of:[{type:'reference', to:[{type:'work'}]}]
        }
      ]
    },
  ]
}