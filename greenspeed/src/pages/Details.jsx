import React from "react";

function Details() {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-green-700 leading-none md:text-5xl xl:text-6xl dark:text-white">
            Vehicles and their Emissions
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Interesting breakdown of different vehicles and their emissions.
            </p>
           
          </div>
          <div class="hidden lg:mt-0 lg:col-span-3 lg:flex">
            <table class="table-auto">
              <thead>
                <tr>
                  <th>Vehicle Type</th>
                  <th>Emissions (g CO2/km)</th>
                
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gasoline car</td>
                  <td>250-350</td>
                </tr>
                <tr>
                  <td>Diesel Car</td>
                  <td>150-250</td>
                 
                </tr>
                <tr>
                  <td>Hybrid car</td>
                  <td>100-200</td>
                 
                </tr>
                <tr>
                  <td>Electric car</td>
                  <td>0</td>
                 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details;
