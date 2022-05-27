import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const off: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="off"
          comment=""
        />

       <Discuss
          ns="."
          name="off"
       />
      </div>
  )
}

export default off