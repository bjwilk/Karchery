import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Navbar from "./Navbar";
import "./index.css";

// const frequencies = [
//   { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
//   { value: 'annually', label: 'Annually', priceSuffix: '/year' },
// ]
const tiers = [
  {
    name: "$85",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "$15", annually: "$144" },
    description: "1 person",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: true,
  },
  {
    name: "$45",
    id: "tier-startup",
    href: "#",
    price: { monthly: "$30", annually: "$288" },
    description: "2-10 persons",
    // features: [
    //   '25 products',
    //   'Up to 10,000 subscribers',
    //   'Advanced analytics',
    //   '24-hour support response time',
    //   'Marketing automations',
    // ],
    mostPopular: true,
  },
  {
    name: "$42",
    id: "tier-enterprise",
    href: "#",
    // price: { monthly: '$48', annually: '$576' },
    description: "11-20 persons",
    // features: [
    //   'Unlimited products',
    //   'Unlimited subscribers',
    //   'Advanced analytics',
    //   '1-hour, dedicated support response time',
    //   'Marketing automations',
    //   'Custom reporting tools',
    // ],
    mostPopular: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Booking() {
  //   const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-white">
          Choose a package based on your party size and let me know your amount.
          Payments due at event.
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-indigo-300">
          <strong>Payments:</strong> Zelle, Check, Cash{"$"}
        </p>

        <div className="mt-16 flex justify-center"></div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-white/5 ring-2 ring-indigo-500"
                  : "ring-1 ring-white/10",
                "rounded-3xl p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-white"
                >
                  {tier.name}
                </h3>
                {/* {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                ) : null} */}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                {/* <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span> */}
              </p>
              <a
                href="mailto:napoli.kari@gmail.com"
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                )}
              >
                Book
              </a>
              {/* <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
