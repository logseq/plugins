import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const checkCurrentIsDbGraph: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="checkCurrentIsDbGraph"
         />

        <Description
          ns="App"
          name="checkCurrentIsDbGraph"
          comment=""
        />

       <Discuss
          ns="App"
          name="checkCurrentIsDbGraph"
       />
      </div>
  )
}

export default checkCurrentIsDbGraph