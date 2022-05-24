import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const q: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="DB"
          name="q"
          comment="
"
        />

       <Discuss
          ns="DB"
          name="q"
       />
      </div>
  )
}

export default q