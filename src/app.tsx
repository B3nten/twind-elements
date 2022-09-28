// Twind
import { TwindProvider } from "./twind/TwindProvider.tsx";
import pog, { readObject } from "./tw.ts";
import { tw as twind } from "twind";

export default function App() {
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
          <div
            className={pog.parse({
              base: [
                "bg-red-300",
                "text-gray-900",
                {
                  hover: "bg-orange-500",
                },
              ],
              sm: "bg-warmGray-500",
            })}
          >
            regular div
          </div>
          <pog.div
            base="bg-red-300"
            md="bg-red-500"
            modifiers={{
              hover: "bg-orange-500",
              active: "bg-orange-700",
            }}
          >
            Hmm
          </pog.div>
          <pog.span
            pog={{
              base: "bg-red-300",
              md: "bg-red-500",
              hover: "bg-orange-500",
              "active:md": 'bg-orange-700',
            }}
          >
            span
          </pog.span>
        </body>
      </html>
    </TwindProvider>
  );
}

/*
{hover: 'scale-150', "sm-hover": 'scale-50', lg: 'scale-200'}
*/
