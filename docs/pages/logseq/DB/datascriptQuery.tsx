import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const datascriptQuery: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="DB"
          name="datascriptQuery"
         />

        <Description
          ns="DB"
          name="datascriptQuery"
          comment=""
        />

       <Discuss
          ns="DB"
          name="datascriptQuery"
       />
      </div>
  )
}

export default datascriptQuery