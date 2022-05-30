import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const queryElementById: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="queryElementById"
         />

        <Description
          ns="App"
          name="queryElementById"
          comment=""
        />

       <Discuss
          ns="App"
          name="queryElementById"
       />
      </div>
  )
}

export default queryElementById