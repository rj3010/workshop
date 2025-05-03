import { WrenchIcon, PhoneIcon, MapPin } from "lucide-react";

export default function CarWorkshop() {
  return (
    <div className="grid px-10 main bg-slate-100">
      <header className="text-center mb-12 mt-10">
        <h1 className="text-4xl font-bold text-blue-700">SpeedyFix Car Workshop</h1>
        <p className="text-gray-600 mt-2 text-xl">Reliable. Affordable. Professional.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl shadow-lg p-4 bg-white">
          <div className="text-center">
            <WrenchIcon className="mx-auto text-blue-500 mb-4 hover:scale-125" size={40} />
            <h2 className="text-xl font-semibold mb-2">Our Services</h2>
            <ul className="text-left mx-8">
              <li className="text-gray-600">Car Wash</li>
              <li className="text-gray-600">Engine Services</li>
              <li className="text-gray-600">Tyre and Wheel Services</li>
              <li className="text-gray-600">Denting and Painting</li>
              <li className="text-gray-600">Batteries</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl shadow-lg p-4 bg-white">
          <div className="text-center">
            <a href="https://wa.me/918475949310?text=Hi%20there!%20I%20want%20to%20connect%20for%20car%20service">
              <PhoneIcon className="mx-auto text-blue-500 mb-4 hover:scale-125" size={40} />
            </a>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-600">Call us at (123) 456-7890</p>
            <p className="text-gray-600">Email us to support@speedyfix.com</p>
          </div>
        </div>

        <div className="rounded-2xl shadow-lg p-4 bg-white">
          <div className="text-center">
            <a href="https://maps.app.goo.gl/n7pkcRb9fSRLu7Cu8">
              <MapPin className="mx-auto text-blue-500 mb-4 hover:scale-125" size={40} />
            </a>
            <h2 className="text-xl font-semibold mb-2">Locate Us</h2>
            <p className="text-gray-600">Vist anytime during business hours.</p>
            <address className="mt-4 text-gray">
              Near - Narainia Durga Mandir,<br/>
              Mirganj, Bihar
            </address>
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SpeedyFix Car Workshop. All rights reserved.
        <br />
        <div className="mt-2">Developed by Rahul Sharma</div>
      </footer>
    </div>
  );
}

