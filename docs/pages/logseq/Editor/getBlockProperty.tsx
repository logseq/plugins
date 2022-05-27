import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getBlockProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getBlockProperty"
         />

        <Description
          ns="Editor"
          name="getBlockProperty"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getBlockProperty"
       />
      </div>
  )
}

export default getBlockProperty