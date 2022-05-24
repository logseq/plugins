import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerCommandPalette: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="registerCommandPalette"
          comment=""
        />

       <Discuss
          ns="App"
          name="registerCommandPalette"
       />
      </div>
  )
}

export default registerCommandPalette