import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerPageMenuItem: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="registerPageMenuItem"
         />

        <Description
          ns="App"
          name="registerPageMenuItem"
          comment=""
        />

       <Discuss
          ns="App"
          name="registerPageMenuItem"
       />
      </div>
  )
}

export default registerPageMenuItem