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
          <tw.div base={'text-red-300'} hover={'scale-150'} sm_hover='scale-50' >hello</tw.div>
        </body>
      </html>
    </TwindProvider>
  );
}