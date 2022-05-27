import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerCommand: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="registerCommand"
         />

        <Description
          ns="App"
          name="registerCommand"
          comment=""
        />

       <Discuss
          ns="App"
          name="registerCommand"
       />
      </div>
  )
}

export default registerCommand