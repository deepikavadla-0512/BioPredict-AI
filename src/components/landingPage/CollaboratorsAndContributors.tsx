import React from 'react';

const CollaboratorsAndContributors = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-5xl font-bold text-[#123265] mb-4">Collaborators and Contributors</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Working together to advance research and development in computational biology and disease prediction
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          
          {/* Principal Investigator Card */}
          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="h-72 overflow-hidden rounded-lg mb-6">
                <img 
                  src="/profiles/chandraMohanSir2.jpg" 
                  alt="Lead Contributor" 
                  className="object-contain w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#123265] mb-2">Dr. Chandra Mohan Dasari</h3>
              <p className="text-gray-600 mb-4 font-medium">Principal Investigator</p>
              <p className="text-gray-500 mb-4 text-sm">Indian Institute of Information Technology, Sri City</p>
              <a 
                href="https://www.iiits.ac.in/people/regular-faculty/dr-chandra-mohan-d/" 
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#123265] rounded-md hover:bg-[#1a4080] transition-colors"
              >
                View Profile
              </a>
            </div>
          </div>

          {/* 2x2 Grid of Team Members */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[529px]">
            {[
              {
                name: "Varshitha Bammidi",
                role: "Research Intern",
                img: "/profiles/varshitha.jpeg",
                link: "https://www.linkedin.com/in/varshitha-bammidi/"
              },
              {
                name: "Sameera Kusala",
                role: "Research Intern",
                img: "/profiles/sameera.png",
                link: "https://www.linkedin.com/in/sameera93/"
              },
              {
                name: "Chaitanyakiran Kommuru",
                role: "Developer",
                img: "/profiles/Chaitanyakiran_Kommuru.JPG",
                link: "#"
              },
              {
                name: "Meghana",
                role: "Developer",
                img: "/profiles/meghna.jpg",
                link: "#"
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full min-h-0">
                <div className="h-48 overflow-hidden rounded-lg mb-2">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <a href={member.link} className="group">
                  <h3 className="text-base font-bold text-[#123265] mb-0.5 hover:text-[#1a4080] transition-colors inline-flex items-center">
                    {member.name}
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </h3>
                </a>
                <p className="text-gray-600 mb-0.5 text-xs font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsAndContributors;
