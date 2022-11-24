export default{
  title: 'Contact',
  name: 'contact',
  type: 'document',
  fields:[
    {
      title:'Name',
      name:'name',
      type:'string',
      validation: Rule => Rule.required().min(3).max(80).warning('Please provide name')
    },
    {
      title:'Email',
      name:'email',
      type:'string',
      validation: Rule => Rule.required().warning('Please provide email')
    },
    {
      title:'Message',
      name:'message',
      type:'string',
      validation: Rule => Rule.required().min(10).max(200).warning('Please provide message')
    }
  ]
}