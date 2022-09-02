<template>
  <div>
    <SiteHeaderTop />

    <div class="max-w-[50rem] flex flex-col mx-auto w-full h-full">
      <!-- ========== HEADER ========== -->
      <header class="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
        <nav class="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div class="flex items-center justify-between">
            <a class="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">Logo</a>
          </div>
          <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <a class="font-medium text-white" href="#" aria-current="page">Link 1</a>
              <a class="font-medium text-gray-400 hover:text-gray-500" href="#">Link 2</a>
              <a class="font-medium text-gray-400 hover:text-gray-500" href="#">Link 3</a>
              <a class="font-medium text-gray-400 hover:text-gray-500" href="#">Link 4</a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  </div>
</template>
