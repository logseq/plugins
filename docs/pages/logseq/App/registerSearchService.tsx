import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerSearchService: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="registerSearchService"
         />

        <Description
          ns="App"
          name="registerSearchService"
          comment=""
        />

       <Discuss
          ns="App"
          name="registerSearchService"
       />
      </div>
  )
}

export default registerSearchService