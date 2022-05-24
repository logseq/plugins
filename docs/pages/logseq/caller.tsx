import { NextPage } from 'next'
import { Description } from '@/components/Description'

const caller: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="caller"
          comment="Duplex message caller"
        />
      </div>
  )
}

export default caller