import React from "react";
const Doctor = () => {
  return (


  <form>   
      <div class="border-b border-gray-900/10 pb-12">
  
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-white-900">Personal Information</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
  
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-white-900">First name</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"/>
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-white-900">Last name</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"/>
            </div>
          </div>
  
          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-white-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"/>
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-6 text-white-900">Country</label>
            <div class="mt-2">
              <select id="country" name="country" autocomplete="country-name" class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
  
          <div class="col-span-full">
            <label for="street-address" class="block text-sm font-medium leading-6 text-white-900">Street address</label>
            <div class="mt-2">
              <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"/>
            </div>
          </div>
  
          <div class="sm:col-span-2 sm:col-start-1">
            <label for="city" class="block text-sm font-medium leading-6 text-white-900">City</label>
            <div class="mt-2">
              <input type="text" name="city" id="city" autocomplete="address-level2" class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"/>
            </div>
          </div>
  
          <div class="sm:col-span-2">
            <label for="region" class="block text-sm font-medium leading-6 text-white-900">State / Province</label>
            <div class="mt-2">
              <input type="text" name="region" id="region" autocomplete="address-level1" class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"/>
            </div>
          </div>
  
          <div class="sm:col-span-2">
            <label for="postal-code" class="block text-sm font-medium leading-6 text-white-900">ZIP / Postal code</label>
            <div class="mt-2">
              <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg" />
            </div>
          </div>
        </div>
      </div>
  
     
    </div>
  
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-white-900">Cancel</button>
      <button type="submit" class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm ">Save</button>
    </div>
  </form>
  

  );
};

export default Doctor;