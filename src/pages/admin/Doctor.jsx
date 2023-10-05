import React from "react";
const Doctor = () => {
  return (


  <form>   

        <h2 class="text-base font-semibold leading-7 text-white-900">Informacion Personal </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">La informacion sera referente a los datos del Doctor.</p>
  
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-white-900"
              >
                Primer Nombre
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="firstName"
                  onChange={(e)=>setFirstName(e.target.value)}
                  autocomplete="given-name"
                  class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium leading-6 text-white-900"
              >
                Segundo Nombre
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="lastname"
                  onChange={(e)=>setLastName(e.target.value)}
                  autocomplete="family-name"
                  class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-white-900"
              >
                Primer Apellido
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium leading-6 text-white-900"
              >
                Segundo Apellido
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
              </div>
            </div>
  
          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-white-900">Correo Electronico</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"/>
            </div>
          </div>
  
          <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-6 text-white-900">Especialidad</label>
            <div class="mt-2">
              <select id="country" name="country" autocomplete="country-name" class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg">
                <option>Cardiologo</option>
                <option>Medicina General</option>
                <option>Psicologo</option>
              </select>
            </div>        
          </div>
          
          <div class="sm:col-span-3">
              <label
                for="last-name"
                class="block text-sm font-medium leading-6 text-white-900"
              >
                Telefono
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
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