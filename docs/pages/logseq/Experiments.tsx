import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const Experiments: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="Experiments"
          comment=""
        />

       <Discuss
          ns="."
          name="Experiments"
       />
      </div>
  )
}

export default Experiments