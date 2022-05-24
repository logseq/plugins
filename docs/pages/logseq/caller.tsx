import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const caller: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="caller"
          comment="Duplex message caller"
        />

       <Discuss
          ns="."
          name="caller"
       />
      </div>
  )
}

export default caller