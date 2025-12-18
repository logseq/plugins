import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getCurrentGraphTemplates: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="getCurrentGraphTemplates"
         />

        <Description
          ns="App"
          name="getCurrentGraphTemplates"
          comment=""
        />

       <Discuss
          ns="App"
          name="getCurrentGraphTemplates"
       />
      </div>
  )
}

export default getCurrentGraphTemplates