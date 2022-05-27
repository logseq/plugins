import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getCurrentGraph: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="getCurrentGraph"
         />

        <Description
          ns="App"
          name="getCurrentGraph"
          comment=""
        />

       <Discuss
          ns="App"
          name="getCurrentGraph"
       />
      </div>
  )
}

export default getCurrentGraph