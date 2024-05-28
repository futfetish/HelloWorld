import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import './globalStyles.css'

const root = document.getElementById('root')

if(!root){
    throw Error('root not found')
}

const container = createRoot(root)

container.render( <App /> )