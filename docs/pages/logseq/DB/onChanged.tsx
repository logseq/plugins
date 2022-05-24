import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const onChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="DB"
          name="onChanged"
          comment="Hook all transaction data of DB"
        />

       <Discuss
          ns="DB"
          name="onChanged"
       />
      </div>
  )
}

export default onChanged