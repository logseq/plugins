import { NextPage } from 'next'
import { Description } from '@/components/Description'

const Experiments: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="Experiments"
          comment=""
        />
      </div>
  )
}

export default Experiments