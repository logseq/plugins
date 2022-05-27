import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const addListener: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="addListener"
         />

        <Description
          ns="."
          name="addListener"
          comment=""
        />

       <Discuss
          ns="."
          name="addListener"
       />
      </div>
  )
}

export default addListener