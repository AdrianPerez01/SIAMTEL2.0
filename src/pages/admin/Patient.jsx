import React from "react";
import { client } from "/src/supabase/client.js";
import { useState } from "react";

function Patient() {
  
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName ] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await client.from("patient").insert(
        {
          first_name: firstName,
          second_name: lastname
        });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="border-b border-gray-900/10 pb-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-white-900">
            Ingresar un Paciente
          </h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="first-name"
                class="block text-sm font-medium leading-6 text-white-900"
              >
                PRIMER NOMBRE
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
                SEGUNDO NOMBRE
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
                PRIMER APELLIDO
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
                SEGUNDO APELLIDO
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

            <div class="sm:col-span-2">
              <label
                for="postal-code"
                class="block text-sm font-medium leading-6 text-white-900"
              >
                CODIGO DE CARNET
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  class="py-3 pl-8 pr-4 bg-secondary-100 w-full outline-none border border-primary rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-white-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Patient;
