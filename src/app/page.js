"use client";

import Header from "@/components/Header";
import Dropdown from "@/components/Inputs/Dropdown";
import InputText from "@/components/Inputs/InputText";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState({});
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-14">
      {/* header section  */}
      <header className=" w-full flex justify-between items-center pb-8 flex-wrap">
        <p className="text-lg md:text-2xl font-bold">Reservation</p>
        <button className="bg-indigo-500 text-sm text-white p-3 px-6 rounded-md">
          Print/Download
        </button>
      </header>

      <section className="w-full grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Header title="Reservation Details">
              <div className="">
                <InputText
                  labelName="reservation_id"
                  title="Reservation ID"
                  type="text"
                  changedValue={(reservation_id) =>
                    setUserData({ ...userData, reservation_id: reservation_id })
                  }
                />
                <InputText
                  labelName="pickup_date"
                  title="Pickup Date"
                  type="date"
                  changedValue={(pickup_date) =>
                    setUserData({ ...userData, pickup_date: pickup_date })
                  }
                  required={true}
                />
                <InputText
                  labelName="return_date"
                  title="Return Date"
                  type="date"
                  changedValue={(return_date) =>
                    setUserData({ ...userData, return_date: return_date })
                  }
                  required={true}
                />
                duration
                <InputText
                  labelName="discount"
                  title="Discount"
                  type="number"
                  changedValue={(discount) =>
                    setUserData({ ...userData, discount: discount })
                  }
                />
              </div>
            </Header>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="">
              <Header title="Customer Information">
                <InputText
                  labelName="first_name"
                  title="First Name"
                  type="text"
                  changedValue={(first_name) =>
                    setUserData({ ...userData, first_name: first_name })
                  }
                  required={true}
                />
                <InputText
                  labelName="last_name"
                  title="Last Name"
                  type="text"
                  changedValue={(last_name) =>
                    setUserData({ ...userData, last_name: last_name })
                  }
                  required={true}
                />
                <InputText
                  labelName="email"
                  title="Email"
                  type="email"
                  changedValue={(email) =>
                    setUserData({ ...userData, email: email })
                  }
                  required={true}
                />

                <InputText
                  labelName="phone"
                  title="Phone"
                  type="text"
                  changedValue={(phone) =>
                    setUserData({ ...userData, phone: phone })
                  }
                  required={true}
                />
              </Header>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <Header title="Vehicle Information">
              <div className="">
                <Dropdown
                  labelName="vehicleType"
                  title="Vehicle Type"
                  type="text"
                  changedValue={(vehicleType) =>
                    setUserData({ ...userData, vehicleType: vehicleType })
                  }
                  required={true}
                  options={[
                    { key: 0, value: "active" },
                    { key: 1, value: "inactive" },
                  ]}
                />

                <Dropdown
                  labelName="vehicle"
                  title="Vehicle"
                  type="text"
                  changedValue={(vehicle) =>
                    setUserData({ ...userData, vehicle: vehicle })
                  }
                  required={true}
                  options={[
                    { key: 0, value: "active" },
                    { key: 1, value: "inactive" },
                  ]}
                />
              </div>
            </Header>
          </div>
          <div className="col-span-2 md:col-span-1">asdfsdfsdf</div>
        </div>
        <div className="col-span-12 md:col-span-4  bg-slate-500">asdfsdf</div>
      </section>
    </main>
  );
}
