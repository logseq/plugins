import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const queryElementRect: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="queryElementRect"
         />

        <Description
          ns="App"
          name="queryElementRect"
          comment=""
        />

       <Discuss
          ns="App"
          name="queryElementRect"
       />
      </div>
  )
}

export default queryElementRect