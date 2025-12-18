import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const insertTemplate: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="insertTemplate"
         />

        <Description
          ns="App"
          name="insertTemplate"
          comment=""
        />

       <Discuss
          ns="App"
          name="insertTemplate"
       />
      </div>
  )
}

export default insertTemplate