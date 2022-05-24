import { NextPage } from 'next'
import { Description } from '@/components/Description'

const registerCommandPalette: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="registerCommandPalette"
          comment=""
        />
      </div>
  )
}

export default registerCommandPalette