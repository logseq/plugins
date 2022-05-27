import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerUIItem: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="registerUIItem"
         />

        <Description
          ns="App"
          name="registerUIItem"
          comment=""
        />

       <Discuss
          ns="App"
          name="registerUIItem"
       />
      </div>
  )
}

export default registerUIItem