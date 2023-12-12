// import React from "react";
// import '../../aboutCSS.css'

export function ProfileCard({
  image_link,
  name,
  home,
  workplace,
  college,
  linkedin,
  github,
  instagram,
}) {
  return (
    <>
      {/* component */}
      {/* <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        /> */}
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <section >

        <div className="w-full ">
          <div className="relative flex flex-row min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16 ">
            <div className="px-6 bg-gray-800 text-white">
              <div className="flex flex-wrap justify-center">
                <div className="w-100 px-4">
                  <div className="relative">
                    <img
                      alt="..."
                      src={image_link}
                      style={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        borderRadius: '50%',
                        height: 'auto',
                        border: 'none',
                        maxWidth: '160px',
                       transform: 'translateY(-50%)',
                       marginBottom: '-50px',
                      }}
                    />

                  </div>
                </div>
              </div>
              <div className="text-center text-white">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-300 mb-2">
                  {name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                  {home}
                </div>
                <div className="mb-2 text-blueGray-300 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-300" />
                  {workplace}
                </div>
                <div className="mb-2 text-blueGray-300">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-300" />
                  {college}
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-row justify-center items-center gap-8 text-3xl">
                  <span className="hover:scale-150 transition-transform">
                    <a href={linkedin} target="_blank">
                      <i className="fab fa-linkedin "></i>
                    </a>
                  </span>
                  <span className="hover:scale-150 transition-transform">
                    <a href={github} target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </span>
                  <span className="hover:scale-150 transition-transform">
                    <a href={instagram} target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative  pt-8 pb-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center"></div>
          </div>
        </footer>
      </section>
    </>
  );
}
