import {default as t} from './tw.ts'

export function Test(){

    return (
        <>
<t.div base="relative overflow-hidden bg-white">
  <t.div base="mx-auto max-w-7xl">
    <t.div base="relative z-10 bg-white pb-8" sm='pb-16' md='pb-20' lg='w-full max-w-2xl pb-28' xl='pb-32'>
      <svg className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white" lg='block' fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <t.div>
        <t.div base="relative px-4 pt-6 sm:px-6 lg:px-8">
          <t.nav base="relative flex items-center justify-between" sm="h-10" lg="justify-start" aria-label="Global">
            <t.div base="flex flex-shrink-0 flex-grow items-center" lg="flex-grow-0">
              <t.div base="flex w-full items-center justify-between" md="w-auto">
                <t.a href="#">
                  <t.span className="sr-only">Your Company</t.span>
                  <t.img alt="Your Company" className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"/>
                </t.a>
                <t.div className="-mr-2 flex items-center" md="hidden">
                  <t.button type="button" 
                  base="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  modifiers={{
                    hover: 'text-gray-500',
                    focus: 'outline-none ring-2 ring-inset ring-indigo-500'
                  }} 
                  aria-expanded="false">
                    <t.span base="sr-only">Open main menu</t.span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </t.button>
                </t.div>
              </t.div>
            </t.div>
            <t.div base="hidden" md="ml-10 block space-x-8 pr-4">
              <t.a href="#" base="font-medium text-gray-500 hover:text-gray-900">Product</t.a>

              <t.a href="#" base="font-medium text-gray-500 hover:text-gray-900">Features</t.a>

              <t.a href="#" base="font-medium text-gray-500 hover:text-gray-900">Marketplace</t.a>

              <t.a href="#" base="font-medium text-gray-500 hover:text-gray-900">Company</t.a>

              <t.a href="#" base="font-medium text-indigo-600 hover:text-indigo-500">Log in</t.a>
            </t.div>
          </t.nav>
        </t.div>
        <t.div base="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition" md="hidden">
          <t.div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <t.div class="flex items-center justify-between px-5 pt-4">
              <t.div>
                <t.img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
              </t.div>
              <t.div class="-mr-2">
                <t.button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <t.span class="sr-only">Close main menu</t.span>

                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </t.button>
              </t.div>
            </t.div>
            <t.div class="space-y-1 px-2 pt-2 pb-3">
              <t.a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Product</t.a>

              <t.a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Features</t.a>

              <t.a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Marketplace</t.a>

              <t.a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Company</t.a>
            </t.div>
            <t.a href="#" class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100">Log in</t.a>
          </t.div>
        </t.div>
      </t.div>

      <t.main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <t.div class="sm:text-center lg:text-left">
          <t.h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <t.span class="block xl:inline">Data to enrich your</t.span>
            <t.span class="block text-indigo-600 xl:inline">online business</t.span>
          </t.h1>
          <t.p class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</t.p>
          <t.div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <t.div class="rounded-md shadow">
              <t.a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Get started</t.a>
            </t.div>
            <t.div class="mt-3 sm:mt-0 sm:ml-3">
              <t.a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">Live demo</t.a>
            </t.div>
          </t.div>
        </t.div>
      </t.main>
    </t.div>
  </t.div>
  <t.div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <t.img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
  </t.div>
</t.div>
</>

    )
}