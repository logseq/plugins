import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getProperty"
         />

        <Description
          ns="Editor"
          name="getProperty"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getProperty"
       />
      </div>
  )
}

export default getProperty