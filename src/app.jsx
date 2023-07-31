import * as Server from 'react-dom/server'
import * as React from 'react'

import { Greet } from './Greet'

console.log(Server.renderToString(<Greet />))

