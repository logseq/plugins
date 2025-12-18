import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onBlockChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="DB"
          name="onBlockChanged"
         />

        <Description
          ns="DB"
          name="onBlockChanged"
          comment=""
        />

       <Discuss
          ns="DB"
          name="onBlockChanged"
       />
      </div>
  )
}

export default onBlockChanged