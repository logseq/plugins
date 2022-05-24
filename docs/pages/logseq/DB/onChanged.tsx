import { NextPage } from 'next'
import { Description } from '@/components/Description'

const onChanged: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="DB"
          name="onChanged"
          comment="Hook all transaction data of DB"
        />
      </div>
  )
}

export default onChanged