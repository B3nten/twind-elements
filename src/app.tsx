// Twind
import { TwindProvider } from "./twind/TwindProvider.tsx";
import tw from './tw.ts'
import {tw as twind} from 'twind'

export default function App() {
  console.log("Hello world!");
  return (
    <TwindProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>Ultra</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div className={twind('md:hover:scale-150')}>regular div</div>
          {/* <tw.div base='bg-green-500' md={'bg-red-300'} sm_hover={'scale-150'} sm={'bg-red-300'} onClick={()=>console.log('click')}>Div</tw.div> */}
          <tw.div className="" >hello</tw.div>
          {/* <tw.span sm={'ok'} className='test'>Span</tw.span>
          <tw.img className="$1"></tw.img>
          <tw.h6>h6</tw.h6> */}
        </body>
      </html>
    </TwindProvider>
  );
}