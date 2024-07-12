import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const caller: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="caller"
         />

        <Description
          ns="."
          name="caller"
          comment=""
        />

       <Discuss
          ns="."
          name="caller"
       />
      </div>
  )
}

export default caller